import React from "react";
import "./style.css";

function PaintingCard(props) {
  return (
    <div className="card" onClick={() => props.removePainting(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default PaintingCard;
