import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MediaItem {
  type: 'image' | 'video';
  original: string;
  thumbnail: string;
  videoUrl?: string;
  title?: string;
}

interface MediaCarouselProps {
  media: MediaItem[];
}

const MediaCarousel = ({ media }: MediaCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const nextMedia = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
    setPlayingVideo(null);
  };

  const prevMedia = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
    setPlayingVideo(null);
  };

  const getEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  };

  const getVideoThumbnail = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  };

  if (!media || media.length === 0) return null;

  const currentMedia = media[currentIndex];

  return (
    <div className="relative">
      {/* Main Media */}
      <div className="relative overflow-hidden rounded-lg bg-muted">
        {currentMedia.type === 'image' ? (
          <img
            src={currentMedia.original}
            alt={`Media ${currentIndex + 1}`}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="relative w-full h-64 bg-black">
            {playingVideo === currentIndex ? (
              <iframe
                src={getEmbedUrl(currentMedia.videoUrl!)}
                title={currentMedia.title || `Video ${currentIndex + 1}`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div 
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setPlayingVideo(currentIndex)}
              >
                <img 
                  src={currentMedia.thumbnail || getVideoThumbnail(currentMedia.videoUrl!)}
                  alt={currentMedia.title || `Video ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 hover:bg-red-700 rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-white ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Navigation Arrows */}
        {media.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-terminal-cyan text-terminal-cyan hover:bg-terminal-cyan hover:text-background"
              onClick={prevMedia}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline" 
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border-terminal-cyan text-terminal-cyan hover:bg-terminal-cyan hover:text-background"
              onClick={nextMedia}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
        
        {/* Media Counter */}
        {media.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-background/80 text-foreground px-2 py-1 rounded text-sm font-mono">
            {currentIndex + 1} / {media.length}
          </div>
        )}
      </div>
      
      {/* Thumbnails */}
      {media.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setPlayingVideo(null);
              }}
              className={`relative flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all ${
                index === currentIndex 
                  ? 'border-terminal-green' 
                  : 'border-muted hover:border-terminal-cyan'
              }`}
            >
              <img
                src={item.type === 'video' 
                  ? (item.thumbnail || getVideoThumbnail(item.videoUrl!))
                  : item.thumbnail
                }
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Play className="h-3 w-3 text-white" fill="currentColor" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaCarousel;