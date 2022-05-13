import React, { useRef, useState } from 'react'
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { AuthProvider, useAuth } from './AuthContext'
import MainHeader from '../Home/MainHeader'
import { Link, useNavigate } from "react-router-dom"

export default function SignUp() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);
    const { signup1 } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e: any) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("ERROR: Passwords do not match.");
        }

        try {
            setError("");
            setLoading(true);
            await signup1(emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch(error) {
            setError(console.log(error));
            // setError("ERROR: Failed to create an account.")
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
                            <h2 className="text-center mb-4">Sign Up</h2>
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
                                <Form.Group id="password-confirm" className="mb-2">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100 mt-2" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </div>
            </Container>
        </AuthProvider>
    )
}