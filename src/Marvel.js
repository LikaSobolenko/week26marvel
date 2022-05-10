import React from "react";

function Marvel(props) {
  return (
    <div className="marvel-card">
      <img className="marvel-img" src={props.img} alt={props.name} />
      <h4 className="marvel-name">{props.name}</h4>
      <p className="marvel-univers">{props.univers}</p>
      <p className="marvel-alterEgo">{props.alterEgo}</p>
      <p className="marvel-work">{props.work}</p>
      <p className="marvel-friends">{props.friends}</p>
      <p className="marvel-superPower">{props.superPower}</p>
      <p className="marvel-about">{props.about}</p>
    </div>
  );
}
export default Marvel;
