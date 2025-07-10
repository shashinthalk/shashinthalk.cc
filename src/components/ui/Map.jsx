import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';

const Map = ({ 
  center = [7.8731, 80.7718], 
  zoom = 20, 
  markers = [], 
  dragging = true, 
  zoomControl = true, 
  scrollWheelZoom = true,
  onStart = false
}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const movingMarkerRef = useRef(null);
  const routingControlRef = useRef(null);
  const routePathRef = useRef(null);
  const animationFrameRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const routeCoordinatesRef = useRef(null);

  // Helper function to interpolate between two points
  const interpolate = (start, end, fraction) => {
    return [
      start[0] + (end[0] - start[0]) * fraction,
      start[1] + (end[1] - start[1]) * fraction
    ];
  };

  // Helper function to safely update marker position
  const updateMarkerPosition = (position) => {
    if (movingMarkerRef.current && mapInstanceRef.current && isAnimatingRef.current) {
      movingMarkerRef.current.setLatLng(position);
    }
  };

  // Function to start the animation
  const startAnimation = () => {
    if (!routeCoordinatesRef.current) return;
    
    isAnimatingRef.current = true;
    let startTime = null;
    const duration = 30000; // 30 seconds for full route
    const coordinates = routeCoordinatesRef.current;
    const totalDistance = coordinates.length;

    const animate = (currentTime) => {
      if (!isAnimatingRef.current) return;

      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Calculate current position
      const pointIndex = Math.min(
        Math.floor(progress * totalDistance),
        totalDistance - 1
      );

      if (pointIndex < totalDistance - 1) {
        // Interpolate between current and next point
        const subProgress = (progress * totalDistance) % 1;
        const currentPoint = coordinates[pointIndex];
        const nextPoint = coordinates[pointIndex + 1];
        const interpolatedPosition = interpolate(
          [currentPoint.lat, currentPoint.lng],
          [nextPoint.lat, nextPoint.lng],
          subProgress
        );

        updateMarkerPosition(interpolatedPosition);

        if (isAnimatingRef.current) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      } else {
        // Restart animation
        startTime = null;
        if (isAnimatingRef.current) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // Function to stop the animation
  const stopAnimation = () => {
    isAnimatingRef.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    // Reset marker to start position
    if (movingMarkerRef.current && routeCoordinatesRef.current) {
      const startPoint = routeCoordinatesRef.current[0];
      movingMarkerRef.current.setLatLng([startPoint.lat, startPoint.lng]);
    }
  };

  // Effect to handle external start/stop trigger
  useEffect(() => {
    if (onStart) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [onStart]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize map only once
    if (!mapInstanceRef.current && mapRef.current) {
      // Set up static marker icon
      const icon = L.icon({
        iconUrl: '/images/marker-icon.png',
        iconRetinaUrl: '/images/marker-icon-2x.png',
        shadowUrl: '/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Create blue dot icon
      const blueDot = L.divIcon({
        className: 'blue-dot',
        html: '<div style="background-color: #2196F3; border: 2px solid white; border-radius: 50%; width: 12px; height: 12px; box-shadow: 0 0 10px rgba(33, 150, 243, 0.7);"><div style="background-color: rgba(33, 150, 243, 0.3); border-radius: 50%; width: 24px; height: 24px; position: absolute; top: -6px; left: -6px; animation: pulse 1.5s infinite;"></div></div>',
        iconSize: [12, 12],
        iconAnchor: [6, 6]
      });

      // Create map instance with options
      mapInstanceRef.current = L.map(mapRef.current, {
        dragging: dragging,
        zoomControl: zoomControl,
        scrollWheelZoom: scrollWheelZoom,
        doubleClickZoom: false,
        touchZoom: false,
        boxZoom: false
      }).setView(center, zoom);

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);

      // Add static markers
      markers.forEach(marker => {
        if (!marker.isLive) {
          L.marker(marker.position, { icon })
            .bindPopup(`
              <div>
                <h3 class="font-semibold">${marker.title}</h3>
                <p>${marker.description}</p>
              </div>
            `)
            .addTo(mapInstanceRef.current);
        }
      });

      // Find live marker and destination
      const liveMarker = markers.find(m => m.isLive);
      const destinationMarker = markers.find(m => !m.isLive);

      if (liveMarker && destinationMarker) {
        // Create the moving marker
        movingMarkerRef.current = L.marker(liveMarker.position, { icon: blueDot })
          .addTo(mapInstanceRef.current);

        // Add CSS for pulse animation
        const style = document.createElement('style');
        style.textContent = `
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(2); opacity: 0; }
          }
        `;
        document.head.appendChild(style);

        // Initialize route path layer
        routePathRef.current = L.layerGroup().addTo(mapInstanceRef.current);

        // Create routing control without adding it to the map
        const control = L.Routing.control({
          waypoints: [
            L.latLng(liveMarker.position[0], liveMarker.position[1]),
            L.latLng(destinationMarker.position[0], destinationMarker.position[1])
          ],
          router: L.Routing.osrmv1({
            serviceUrl: 'https://router.project-osrm.org/route/v1',
            profile: 'driving'
          }),
          lineOptions: {
            styles: [{ color: '#2196F3', opacity: 0.6, weight: 4 }],
            addWaypoints: false
          },
          show: false,
          addWaypoints: false,
          routeWhileDragging: false,
          fitSelectedRoutes: false,
          showAlternatives: false,
          createMarker: () => null
        });

        // Handle route calculation
        control.on('routesfound', (e) => {
          const routes = e.routes;
          const coordinates = routes[0].coordinates;
          routeCoordinatesRef.current = coordinates;

          // Clear existing route path
          if (routePathRef.current) {
            routePathRef.current.clearLayers();
          }

          // Add new route path
          if (routePathRef.current && mapInstanceRef.current) {
            L.polyline(coordinates, {
              color: '#2196F3',
              opacity: 0.6,
              weight: 4
            }).addTo(routePathRef.current);
          }
        });

        // Store the control reference and calculate route
        routingControlRef.current = control;
        control.route();
      }
    }

    return () => {
      stopAnimation();
      if (mapInstanceRef.current) {
        if (routePathRef.current) {
          routePathRef.current.clearLayers();
          mapInstanceRef.current.removeLayer(routePathRef.current);
          routePathRef.current = null;
        }
        if (movingMarkerRef.current) {
          mapInstanceRef.current.removeLayer(movingMarkerRef.current);
          movingMarkerRef.current = null;
        }
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        routingControlRef.current = null;
      }
    };
  }, [center, zoom, markers, dragging, zoomControl, scrollWheelZoom]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg"
    />
  );
};

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.arrayOf(PropTypes.number).isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      isLive: PropTypes.bool
    })
  ),
  dragging: PropTypes.bool,
  zoomControl: PropTypes.bool,
  scrollWheelZoom: PropTypes.bool,
  onStart: PropTypes.bool
};

export default Map;