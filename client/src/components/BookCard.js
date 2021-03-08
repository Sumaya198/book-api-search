import React from "react";
import './BookCard.css'



function BookCard(props) {
  return (
<div className="card book-container">
    <div className="post-img">
    <img alt={props.title} src={props.image} />
    </div>
    <div className="info-section text-dark">
        <h3 className="card-title text-center">{props.title}</h3>
        <h3 className="card-title text-center">{props.authors}</h3>
        <p className="card-text text-secondary">{props.description}</p>
        <a href={props.link}>LINK</a>
        <button className="btn btn-primary" onClick={() => props.handleSaveClick(props)}>SAVE</button>
    </div>

</div>

  );
}

export default BookCard;