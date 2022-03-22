import React from "react";
import LiftTypes from "../LiftTypes/LiftTypes";
import lifts from '../../lifts.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Lifts() {
    return (
        <div>
         <Row>
            <Col md={12}>
               <div className="lift">
                  <Row>
                    <Col md={2}></Col>
                     <Col md={8}>
                        <h1 className="text-center liftheading
                        ">LIFTS</h1>
                        <hr className="liftsHr" />
                     </Col>
                     <Col md={2}></Col>
                  </Row>
                  <Row>
                      <Col md={1}></Col>
                      <Col md={10} className="text-center">
                  <div>
                     {lifts.map(lift =>  {
                        return (
                           <LiftTypes
                           key={lift.id}
                           name={lift.name}
                           image={lift.image}
                           alt={lift.alt}
                           description={lift.description}
                           details={lift.details}
                           />
                        );
                     })}
                  </div>
                  </Col>
                  <Col md={1}></Col>
                    </Row>
               </div>
            </Col>
         </Row>
         <Row>
            <div className="spacer"></div>
        </Row>
      </div>
    )

}

export default Lifts;