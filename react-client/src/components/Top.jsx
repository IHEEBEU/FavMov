import React , {useState , useEffect} from 'react'
import axios from "axios";
function Top() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
      const fetchTopMovies = async () => {
        try {
          const response = await axios.get('http://localhost:5000/');
          setMovie(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchTopMovies();
    }, []);
    console.log("this is the Top",movie);

  return (
    <div className="all-movie">
    <h1 className="header">Top 10 this week</h1>
      {movie.map(one=>(
        <div className="wrapper" key={one.id}>
        <div className="top-movie" >
        <img className="movie-img" src={one.imageUrl} />
        </div>
        <div>
           <p className="movie-name">{one.name}</p>
          <p className="desc-top">{one.description}</p>
           <p className="rate-top">{one.rate}/10</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Top
