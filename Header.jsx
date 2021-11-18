import React from "react";
import { Card, CardBody } from 'reactstrap';
import "./style.css";

function Header() {
  return (
      <Card>
        <CardBody className = "my-2">
          <header>
            <h1>Notes..</h1>
          </header>
        </CardBody>
      </Card>
  );
}

export default Header;