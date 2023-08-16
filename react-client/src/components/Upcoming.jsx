import axios from "axios";
import React, { useEffect, useState } from "react";

function Upcoming() {
  const [movie, setMovie] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
        headers: {
          'X-RapidAPI-Key': 'ea229fef74msh41761f612a31fe6p1aa45ajsn1dd72fe53ee7',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
  
      try {
        const response = await axios.request(options);
        console.log(response.data.results);
        setMovie(response.data.results); // Set movie state to response.data.results
      } catch (error) {
        console.error(error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  useEffect(() => {
    if (currentIndex < movie.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          let nextIndex = prevIndex + 1;
          while (nextIndex === 3 || nextIndex === 4 || nextIndex === 6) {
            nextIndex++; // Skip indexes 3, 4, and 6
          }
          if (nextIndex >= movie.length) {
            nextIndex = 0;
          }
          return nextIndex;
        });
      }, 8000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [currentIndex, movie]);

  return (
    <div className="coming-wrapper">
      {movie.length > 0 && (
        <div className="coming-main" key={movie[currentIndex].id}>
          <div className="need-it">
          <h1 className="coming-head">Upcoming Movies</h1>
          {movie[currentIndex].primaryImage && movie[currentIndex].primaryImage.url && (
            <img className="coming-img"
              src={movie[currentIndex].primaryImage.url}
              alt={movie[currentIndex].originalTitleText.text}
            />
          )}
          <p className="coming-title">{movie[currentIndex].originalTitleText.text}</p>
        </div>

          </div>
      )}
    </div>
  );
}

export default Upcoming;
