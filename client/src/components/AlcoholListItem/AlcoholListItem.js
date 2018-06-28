import React from "react";
import "./AlcoholListItem.css";

const AlcoholListItem = props => {
  // console.log(props.description);
  // console.log(props.description.slice(2, -2));
  const description = props.description.slice(2, -2).split("', '");
  // console.log(description);

  return (
    <div className="col-md-4">
      <div className="card">

        <div className="card-header" id="category">
          {props.category}
        </div>

        <div className="card-body">
          <h6 className="card-title" id="alcoholName">
            <strong> {props.name} </strong>
          </h6>
          <div className="row">
            <img className="col-md-6" id="alcoholImage" alt={props.name} src={`../../img/alcohol/${props.image}.png`} />
            <ul className="col-md-6">

              {description.map((flavor, i) => <li key={i}>{flavor}</li>)}

            </ul>
          </div>
          <p className="card-text" id="price"> ${props.price} </p>
        </div>
      </div>
    </div>
  );
}


export default AlcoholListItem;
