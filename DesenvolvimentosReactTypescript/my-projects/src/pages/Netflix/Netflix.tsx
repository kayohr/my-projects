// Netflix.tsx
import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/Netflix/MovieServices';
import { getTrendingSeries } from '../../services/Netflix/SeriesService';

const Netflix: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<any | null>(null);
  const [top10, setTop10] = useState<any[]>([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        const trendingSeries = await getTrendingSeries();

        // Combine a lista de filmes e séries
        const combinedList = [...trendingMovies, ...trendingSeries];

        // Pegue os 10 primeiros itens da lista combinada
        const top10List = combinedList.slice(0, 10);

        setTop10(top10List);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    fetchMedia();
  }, []);

  const handleMediaClick = (media: any) => {
    setSelectedMedia(media);
  };

  const handleBackClick = () => {
    setSelectedMedia(null);
  };

  return (
    <div className='Netflix'>
      Netflix
      {selectedMedia ? (
        <>
          <button onClick={handleBackClick}>Back to List</button>
          <div>
            <h2>{selectedMedia.title}</h2>
            <p>{selectedMedia.overview}</p>
            {/* Adicione outras informações sobre a mídia aqui */}
          </div>
        </>
      ) : (
        <>
          <h1>Trending Media</h1>
          {/* Renderize seus componentes MovieCard ou SeriesCard aqui */}
          {top10.map((media) => (
            <div key={media.id} onClick={() => handleMediaClick(media)}>
              <img src={media.poster_path} alt={media.title} />
              <h3>{media.title}</h3>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Netflix;

