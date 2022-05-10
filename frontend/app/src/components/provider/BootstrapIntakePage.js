import React, {useRef, useState} from "react";
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import PortalHeader from '../PortalHeader';

export default function IntakePage() {
    // const emailRef = useRef(null);
    // const passwordRef = useRef(null);
    // const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    async function handleSubmit(e: any) {
        e.preventDefault();
        setLoading(true);
    }

    return (
        <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh"}}>
            <div className={"w-100"} style={{ maxWidth: "400px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In</h2>
                        <Form onSubmit={handleSubmit}>
                            <div className="profile-info">
                                <Form.Group id="firstname" className="mb-2">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                                <Form.Group id="lastname" className="mb-2">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                                <Form.Group id="institution" className="mb-2">
                                    <Form.Label>Institution</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                            </div>

                            <div className="contact-info">
                                <Form.Group id="phone-number" className="mb-2">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                            </div>

                            <Button disabled={loading} className="w-100 mt-2" type="submit">Log In</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </Container>
    )
}