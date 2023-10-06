// import axios from 'axios';

// const apiKey = 'YOUR_TMDB_API_KEY';

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',
// });

// export const getTrendingMovies = async () => {
//   try {
//     const response = await instance.get(`/trending/all/week?api_key=${apiKey}`);
//     console.log('API Response:', response.data.results);
//     return response.data.results;
//   } catch (error) {
//     console.error('Error fetching movies:', error);
//     return [];
//   }
// };

const mockMovies = [
  {
    id: 1,
    title: "Titanic",
    poster_path: "../../image/titanic.jpeg",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    poster_path: "",
  },
  {
    id: 3,
    title: "The Godfather",
    poster_path: "/movie3.jpg",
  },
  {
    id: 4,
    title: "The Dark Knight",
    poster_path: "/movie4.jpg",
  },
  {
    id: 5,
    title: "Pulp Fiction",
    poster_path: "/movie5.jpg",
  },
  {
    id: 6,
    title: "Forrest Gump",
    poster_path: "/movie6.jpg",
  },
  {
    id: 7,
    title: "Fight Club",
    poster_path: "/movie7.jpg",
  },
  {
    id: 8,
    title: "The Matrix",
    poster_path: "/movie8.jpg",
  },
  {
    id: 9,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    poster_path: "/movie9.jpg",
  }
 
];


const getTrendingMovies = async () => {
  try {
    // Simula um atraso de 500ms para simular uma chamada de API assíncrona
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockMovies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export { getTrendingMovies };