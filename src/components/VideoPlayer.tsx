import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

const VideoPlayer = ({ videoUrl, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  };

  const embedUrl = getEmbedUrl(videoUrl);

  if (!embedUrl) {
    return null;
  }

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      {!isPlaying ? (
        <div 
          className="relative w-full h-full cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <img 
            src={`https://img.youtube.com/vi/${embedUrl.split('/embed/')[1]}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoPlayer;