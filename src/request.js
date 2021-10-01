const Api_key = 'da9d22df8d25677e30ec3bbfc75e0365';

const Requests = {

fetchTrending: `https://api.themoviedb.org/3/discover/movie?api_key=${Api_key}&language=en-US`,
fetchTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US`,
fetchWeekTrend : `https://api.themoviedb.org/3/trending/all/week?api_key=${Api_key}&language=en-US`,

}

export default Requests;


