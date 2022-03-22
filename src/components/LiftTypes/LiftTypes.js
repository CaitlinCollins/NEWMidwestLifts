import React from "react";
import Card from "react-bootstrap/Card";


function LiftTypes(props) {
   return (
    <Card>
    <Card.Img variant="top" src={props.image} alt={props.alt} className="liftimg"/>
    <Card.Body>
        <Card.Title className="cardtitle">{props.name} 
        </Card.Title>
        <div className="textwrapper">
        <Card.Text className="cardtext">
        {props.description}
        </Card.Text>
        </div>
    </Card.Body>
    <br/>
    <a
    href={props.details}
    target="_blank"
    rel="noreferrer"
    className="btn details"
    >Details</a>
    </Card> 
    
   )
}








export default LiftTypes;