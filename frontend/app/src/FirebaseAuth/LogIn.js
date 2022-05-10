import React, { useRef, useState } from 'react'
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { AuthProvider, useAuth } from './AuthContext'
import MainHeader from '../Home/MainHeader'
import { Link, useNavigate } from "react-router-dom"

export default function LogIn() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch {
            setError("ERROR: Failed to log in.")
        }
        setLoading(false);

    }

    return (
        <AuthProvider>
            <MainHeader />
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh"}}>
                <div className={"w-100"} style={{ maxWidth: "400px"}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email" className="mb-2">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password" className="mb-2">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100 mt-2" type="submit">Log In</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </Container>
        </AuthProvider>
    )
}