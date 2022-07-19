import React, { Component } from 'react';
import './styled.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';

class About extends Component {
	render() {
		return (
            <Container>
                <Card className='mt-4 dark'>
                    <Card.Header className='d-flex flex-wrap justify-content-center'>
                        <div>Mohamad Wildan Maulana</div>
                        <div className='mx-4'>|</div>
                        <div>Tegal, Jawa Tengah</div>

                    </Card.Header>
                    <Card.Body>
                        <div className='row'>
                            <div className='col-md-2 poto'>
                                <Card.Text className='my-auto'>                                   
                                    <img src="https://media.istockphoto.com/vectors/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-vector-id1087531642?b=1&k=20&m=1087531642&s=612x612&w=0&h=iT7u5H5ZCeLEUC46nV0RdlA_3PGcbewRYK8evJ4ps2c="
                                     alt="" width='100%' />
                                </Card.Text>
                            </div>
                            <div className='col-md-4'>
                                <Card.Title>About Me</Card.Title>
                                <Card.Text>                                   
                                    Halo namaku Wildan, Aku lulusan SMK jurusan Multimedia yang gemar belajar ilmu IT. Aku juga pernah belajar basic dalam IT seperti Web Development, Cybersecurity Analyst, dan Networking. Aku juga menguasai software multimedia seperti Adobe, Corel Draw, Pinnacle dan 3DS Max. 
                                </Card.Text>
                            </div>
                            <div className='col-md-3'>
                                <Card.Title>Skill</Card.Title>
                                <Card.Text className='text-start'>
                                    <ul className='ms-4'>
                                        <li> Web Developement </li>
                                        <li> Cybersecurity Analyst </li>
                                        <li> Networking </li>
                                        <li> Graphic Design </li>
                                        <li> Editing </li>
                                        <li> Animation </li>
                                    </ul>
                                </Card.Text>
                            </div>
                            <div className='col-md-3'>
                                <Card.Title>Contact Us</Card.Title>
                                <Card.Text className='text-start'>     
                                    <ul className='hide'>
                                        <li className='mb-2'> <WhatsApp></WhatsApp>
                                            <span className='ms-2'>+62 8129 5475 542</span> 
                                        </li>
                                        <li className='mb-2'> <LinkedIn></LinkedIn>
                                            <span className='ms-2'>@wildanmaulanaa</span> 
                                        </li>
                                        <li className='mb-2'> <GitHub></GitHub>
                                            <span className='ms-2'>@maulanadata</span> 
                                        </li>
                                    </ul>
                                </Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
		);
	}
}
 
export default About;
