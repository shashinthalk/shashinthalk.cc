import SectionHeading from '../components/ui/SectionHeading';
import SectionWrapper from '../components/ui/SectionWrapper';
import MetaTagManager from "../components/layout/MetaTagManager";
import Map from '../components/ui/Map';
import Button from '../components/ui/Button';
import { useState, useCallback, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Projects = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [nearestStation, setNearestStation] = useState(null);
  const liveLocation = [6.9019, 79.8528];

  // Configure Notiflix
  useEffect(() => {
    Notify.init({
      position: 'right-top',
      distance: '15px',
      timeout: 3000,
      showOnlyTheLastOne: true,
    });
  }, []);

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (point1, point2) => {
    const [lat1, lon1] = point1;
    const [lat2, lon2] = point2;
    const R = 6371; // Earth's radius in km

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const projectLocations = [
    {
      position: [6.9271, 79.8612],
      title: "Colombo EV Station",
      description: "Available EV charging stations in Colombo",
      isLive: false
    },
    {
      position: [6.9019, 79.8528],
      title: "Fort EV Station",
      description: "Fast charging station in Fort area",
      isLive: false
    },
    {
      position: [6.8995, 79.8657],
      title: "Slave Island Station",
      description: "24/7 EV charging facility",
      isLive: false
    },
    {
      position: [6.9147, 79.8473],
      title: "Pettah Hub",
      description: "Public EV charging point",
      isLive: false
    },
    {
      position: [6.9344, 79.8428],
      title: "Maradana Station",
      description: "Multi-port charging station",
      isLive: false
    },
    {
      position: [6.9161, 79.8636],
      title: "Kollupitiya Point",
      description: "Premium charging facility",
      isLive: false
    },
    {
      position: liveLocation,
      title: "Live Location",
      description: "Current live location in Colombo",
      isLive: true
    }
  ];

  // Check for nearest station whenever live location updates
  useEffect(() => {
    if (!isStarted) return;

    const checkNearestStation = () => {
      const stations = projectLocations.filter(loc => !loc.isLive);
      const distances = stations.map(station => ({
        ...station,
        distance: calculateDistance(liveLocation, station.position)
      }));

      const nearest = distances.reduce((prev, curr) => 
        prev.distance < curr.distance ? prev : curr
      );

      // Notify if within 1km radius
      if (nearest.distance <= 1) {
        if (!nearestStation || nearestStation.title !== nearest.title) {
          setNearestStation(nearest);
          const distanceInMeters = (nearest.distance * 1000).toFixed(0);
          Notify.success(`${nearest.title} is ${distanceInMeters}m away\n${nearest.description}`);
        }
      } else {
        setNearestStation(null);
      }
    };

    // Check immediately and then every 2 seconds
    checkNearestStation();
    const intervalId = setInterval(checkNearestStation, 2000);

    return () => clearInterval(intervalId);
  }, [liveLocation, isStarted, nearestStation]);

  const handleStart = useCallback(() => {
    console.log('Button clicked, current state:', isStarted);
    setIsStarted(prev => !prev);
    
    // Show initial notification when movement starts
    if (!isStarted) {
      Notify.info('Started tracking nearby EV stations');
    }
  }, [isStarted]);

  return (
    <>
      <MetaTagManager 
        title={'Nishan Shashintha | Projects'} 
        description={'As a Full Stack Engineer, I specialize in designing and developing end-to-end digital solutions that balance performance and user experience. Beyond my core work, I enjoy exploring creative and tech-driven side projects that keep me inspired and forward-thinking.'} 
      />
      <SectionWrapper className='bg-theme-gradient'>
        <div className='mt-[10%] mb-[5%] w-full flex justify-center'>
          <div className='flex-col p-5 container relative'>
            <SectionHeading>Project Locations</SectionHeading>
            <div className='mt-8 relative w-full'>
              <Map 
                markers={projectLocations} 
                center={liveLocation}
                zoom={13}
                dragging={false}
                zoomControl={false}
                scrollWheelZoom={false}
                onStart={isStarted}
              />
            </div>
            <div className='mt-8 flex justify-center'>
              <Button onClick={handleStart}>
                {isStarted ? 'Stop Movement' : 'Start Movement'}
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Projects;
