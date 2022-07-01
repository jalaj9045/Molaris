import React from 'react'
import Navbar from '../Home/Navbar';
import dev1 from "../../Screens/Home/Assest/dev1.png";
import dev2 from "../../Screens/Home/Assest/dev2.png";
import dev4 from "../../Screens/Home/Assest/dev4.png";
import dev5 from "../../Screens/Home/Assest/dev5.png";
import dev6 from "../../Screens/Home/Assest/dev6.png";
import dev7 from "../../Screens/Home/Assest/dev7.png";
import { Card } from "react-bootstrap";
import Footer from '../Home/Footer';
function Blog() {
    return (
        <>
            <Navbar />

            <section className='Blog--Maindiv'>
                <div className='blog--banner'>
                    <h1 data-aos="zoom-in-up">Our Blog</h1>
                </div>
                
                {/* cards section  */}
                <div className='Blog--cards'>
                    <div className='Blog--cardDiv' data-aos="zoom-in-up">
                        <Card className='b-Cards'>
                            <Card.Img variant="top" src={dev1} />
                            <Card.Body>
                                <Card.Title>How the Knowledge Panel can drive traffic to Search Engines</Card.Title>
                                <Card.Text>
                                    For decades, the focus of the search was to match the keywords to the search query. In 2012, google introduced an Intelligent model where the real-world entities and their relationships are
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='b-Cards'>
                            <Card.Img variant="top" src={dev2} />
                            <Card.Body>
                                <Card.Title>Practices to increase the loading speed of the website with Magento CMS</Card.Title>
                                <Card.Text>
                                    The survey shows that 42% of consumers who leave the sites will leave the sites which load longer than a 3 minute. If the website of the company takes time to load, it can be a big loss
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='b-Cards'>
                            <Card.Img variant="top" src={dev4} />
                            <Card.Body>
                                <Card.Title>The State of Higher Education CMS</Card.Title>
                                <Card.Text>
                                    Schools are adopting the advanced methods in various fields of theirs to mitigate their traditional system. Name it any field, from notetaking to learning resources, teaching
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                {/* cards section  */}
                <div className='Blog--cards'>
                    <div className='Blog--cardDiv' data-aos="zoom-in-up">
                        <Card className='b-Cards'>
                            <Card.Img variant="top" src={dev5} />
                            <Card.Body>
                                <Card.Title>How the Knowledge Panel can drive traffic to Search Engines</Card.Title>
                                <Card.Text>
                                    For decades, the focus of the search was to match the keywords to the search query. In 2012, google introduced an Intelligent model where the real-world entities and their relationships are
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='b-Cards'>
                            <Card.Img variant="top" src={dev6} />
                            <Card.Body>
                                <Card.Title>Practices to increase the loading speed of the website with Magento CMS</Card.Title>
                                <Card.Text>
                                    The survey shows that 42% of consumers who leave the sites will leave the sites which load longer than a 3 minute. If the website of the company takes time to load, it can be a big loss
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='b-Cards'>
                            <Card.Img variant="top" src={dev7} />
                            <Card.Body>
                                <Card.Title>The State of Higher Education CMS</Card.Title>
                                <Card.Text>
                                    Schools are adopting the advanced methods in various fields of theirs to mitigate their traditional system. Name it any field, from notetaking to learning resources, teaching
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Blog