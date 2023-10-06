// SeriesService.tsx
const arcaneImage = require("../../image/arcane.jpg");
const himymImage = require("../../image/images (6).jpeg");
const peakyImage = require("../../image/peaky.jpg.webp");

const mockSeries = [
  {
    id: 1,
    title: "Arcane",
    poster_path: arcaneImage,
    media_type: "movie",
  },
  {
    id: 2,
    title: "How I Met Your Mother",
    poster_path: himymImage,
    media_type: "movie",
  },
  {
    id: 3,
    title: "Peaky Blinders",
    poster_path: peakyImage,
    media_type: "movie",
  }
  // Adicione mais filmes e séries conforme necessário
];

    // Adicione mais séries conforme necessário

    const getTrendingSeries = async () => {
        try {
          // Simula um atraso de 500ms para simular uma chamada de API assíncrona
          await new Promise((resolve) => setTimeout(resolve, 500));
          return mockSeries;
        } catch (error) {
          console.error("Error fetching series:", error);
          return [];
        }
      };
      
      export { getTrendingSeries };
