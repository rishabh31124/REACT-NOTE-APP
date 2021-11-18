import React from 'react';
import "./style.css";
import {
    Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
export default function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }
    return (
        <div>
            <div className = "note">
                <div className = "ttt">
                    <CardSubtitle>{props.title}</CardSubtitle>
                </div>
                <hr />
                <div className = "ccc">
                    <CardText>{props.content}</CardText>
                </div>
                <Container className = "my-2">
                    <button className = "bbb" onClick = {handleClick}>Delete</button>
                </Container>
            </div>        
        </div>
    );
}
