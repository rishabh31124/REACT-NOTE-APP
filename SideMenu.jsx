import React from 'react'
// import "./SideMenu.css";
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function SideMenu() {

    return (
        <div>
            <ListGroup>
                <ListGroupItem  tag="a" href="/home" action>Home</ListGroupItem>
                <ListGroupItem  tag="a" href="/about" action>About</ListGroupItem>
                <ListGroupItem  tag="a" href="/add-note" action>Add Note</ListGroupItem>
                <ListGroupItem  tag="a" href="./contact" action>Contact</ListGroupItem>
            </ListGroup>
        </div>
        
    );

}
