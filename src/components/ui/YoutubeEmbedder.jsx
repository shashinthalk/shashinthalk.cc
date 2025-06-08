export default function YoutubeEmbedder( {videoId} ) {
  return (
    <div className="relative pt-[56.25%] mx-4 md:mx-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg md:rounded-xl shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
