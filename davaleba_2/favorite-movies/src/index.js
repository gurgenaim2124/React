
import React from 'react';
import ReactDOM from 'react-dom/client';
import MovieCard from './components/MovieCard';
import "./index.css"

const App = function () {
    const movies =  [
    { title: "Inception", year: 2010, description: "A mind-bending thriller." },
    { title: "The Lion King", year: 1994, description: "A Disney classic." },
    { title: "Interstellar", year: 2014, description: "" }
]

    return (
        <div className='card'>
            {movies.map((movie) => (
                <MovieCard
                    title={movie.title}
                    year={movie.year}
                    description={
                    movie.description ? movie.description : "No description"
                    }
                />
                )
            )
        }
        </div>
    );
};


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);