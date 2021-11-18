import React from 'react'
import { Container } from 'reactstrap'

export default function About() {
    return (
        <div>
            <Container className = 'text-center'>
                <h1 className = 'text-muted'>Something about Note Application</h1>
                <hr />
                <p className = "lead" >It's an application of writting your notes. It should be done with the help of a react js library, also taken help of reactstrap for designing. </p>
            </Container>
            
        </div>
    )
}
