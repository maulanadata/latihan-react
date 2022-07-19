import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ movies }) => {

  function deskripsi() {
    let str = movies.overview;
    let res = str.split(" ", 15);
    let deskripsi = res.join(" ");
    return deskripsi;
  }

	return (
    <div className="card cardWidth" >
      <img src={ 'https://image.tmdb.org/t/p/w500' + movies.poster_path } 
        className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title fw-bold">
          { movies.title }
        </h5>
        <p className="card-text" >
          { deskripsi() +'...' }
        </p>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
	);
};

export default Card;

