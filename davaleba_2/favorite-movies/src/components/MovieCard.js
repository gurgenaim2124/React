import React from "react";

const MovieCard = ({title, year, description}) => {
    return (
        <div className="movie-card">
            <h1>{title}</h1>
            <h2>{year}</h2>
            <p>About movie:{description}</p>
        </div>
    )
}

export  default MovieCard