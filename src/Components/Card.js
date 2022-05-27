import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Components/CSS/card.css'


function CardExample() {
  return (
    <div className="card" >
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Computer Programer</h5>
      <p className="card-text">Average Pay: $93,000</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
      </div>
  );
}


export default CardExample;