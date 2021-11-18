import React from 'react'
import { Container } from 'reactstrap'

export default function Contact() {
    return (
        <div>
            <Container className = 'text-center'>
                <h1 className = 'text-muted'>Contact Details</h1>
                <hr />
                <p>Company : XYZ</p>
                <p>
                    Phone : 101
                </p>
                <p>
                    Address : abc
                </p>
            </Container>
        </div>
    )
}
