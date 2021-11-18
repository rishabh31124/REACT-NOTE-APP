import React from 'react';
import{ Button , Container, Jumbotron } from 'reactstrap';

export default function Home() {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid className = "text-center">
                    <h1 className="display-3">Hello World!..</h1>
                        <p className="lead">It's an application for saving your important notes for future use</p>
                        <Button color="primary" size="sm">Start Using</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}
