import { Card, Container } from 'react-bootstrap';
import MainHeader from './MainHeader';
import './Mission.css'
import './About.css'

function About() {
    return (
        <div>
            <MainHeader />
            <div>
                <Container
                    className="about d-flex align-items-center justify-content-center h-50"
                    style={{ minHeight: "100vh"}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C5603AQEnTXcVAfGbdw/profile-displayphoto-shrink_400_400/0/1543780476067?e=1657756800&v=beta&t=yhVD6HcfKL0zQD5P1vXQ0KtoOLCPp9EaKQWPH0Xvczg" />
                        <Card.Body>
                            <Card.Title>Shailen Sampath, MSc</Card.Title>
                            <Card.Text>
                                Co-founder of FollowUp <br />
                                Studied Biomedical Engineeering
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4E03AQE31z6A7q5S_A/profile-displayphoto-shrink_800_800/0/1622684481593?e=1657756800&v=beta&t=RCya0UUfs8Gol84eSbOf-GG7ChVt_1OtnaMDUvtBTBU" />
                        <Card.Body>
                            <Card.Title>Abby Perelman</Card.Title>
                            <Card.Text>
                                Co-founder of FollowUp <br />
                                Studies Cognitive Neuroscience
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4D03AQEkQdU8wSXcsg/profile-displayphoto-shrink_800_800/0/1612539764141?e=1657756800&v=beta&t=HZ5-ARtYAE0SOeyAVwvdkLDvbEBPVL2zEQmMuZ1Qy0E" />
                        <Card.Body>
                            <Card.Title>Suraj Zaveri</Card.Title>
                            <Card.Text>
                                Co-founder of FollowUp
                                Studies Applied Math-CS
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="h-50" variant="top" src="https://www.lifespan.org/sites/default/files/styles/provider_headshot/public/2021-10/akbar-umer-md-2021-web.jpg?h=95849dd5&itok=uBJWD706" />
                        <Card.Body>
                            <Card.Title>Umer Akbar, MD</Card.Title>
                            <Card.Text>
                                Medical Advisor to FollowUp
                                Neurologist
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4E03AQFZuPoMwgTqzg/profile-displayphoto-shrink_800_800/0/1600426704852?e=1657756800&v=beta&t=PoxyKQ9NC2_AtCqOwcOY7O1L9C4WK-IOivq3vN6PQ38" />
                        <Card.Body>
                            <Card.Title>Wael Asaad, MD PhD</Card.Title>
                            <Card.Text>
                                Medical Advisor to FollowUp <br />
                                Functional Neurosurgeon
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>



                <Container
                    className="about d-flex align-items-start justify-content-center"
                    style={{ minHeight: "100vh"}}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4E03AQHClItNK4BmvA/profile-displayphoto-shrink_800_800/0/1580313271914?e=1657756800&v=beta&t=V0pJb1omfGi220oisgLPn-73ZKMI5nuiacldSaaEdqQ" />
                        <Card.Body>
                            <Card.Title>Jacqueline Jia</Card.Title>
                            <Card.Text>
                                Software Engineer <br />
                                Studies Neuro-CS
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C5603AQFfsHMiqN2zUw/profile-displayphoto-shrink_800_800/0/1626066957117?e=1657756800&v=beta&t=mID1KN_XN7sQnduVEjGflgzpgj313jjCzXIvLSwGbZ4" />
                        <Card.Body>
                            <Card.Title>Faizaan Vidhani</Card.Title>
                            <Card.Text>
                                Software Engineer <br />
                                Studies Neuro-CS
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C5603AQFMfHdgrR9iMQ/profile-displayphoto-shrink_800_800/0/1634580858817?e=1657756800&v=beta&t=oLXgSBx0orY1kYgaHPAUZsDTbOJsMcniFgaqL91nj3E" />
                        <Card.Body>
                            <Card.Title>Iris Huang</Card.Title>
                            <Card.Text>
                                Software Engineer <br />
                                Studies Computational Biology
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4D03AQF6RFDUTSFggw/profile-displayphoto-shrink_800_800/0/1626160640630?e=1657756800&v=beta&t=PO-LpxSO3e5MEzVb6yTYnIvKSMftQLR94u8fRURxp6A" />
                        <Card.Body>
                            <Card.Title>Kyle Chen</Card.Title>
                            <Card.Text>
                                Software Engineer <br />
                                Studies Business Economics
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Container>
            </div>
        </div>
    );
}

export default About;