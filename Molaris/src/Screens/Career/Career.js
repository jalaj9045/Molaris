import React from 'react'
import Navbar from "../Home/Navbar";
import Footer from '../Home/Footer';
import { Card } from "react-bootstrap";
function Career() {
  return (
    <>
      <Navbar />

      <section className='Main--CareerDiv'>
        <div className='Career--Banner'>
          <div className='Black--shadow'>
            <div className='text-white text-center' data-aos="zoom-in-up">
              <h1>Grow Your Career With Molaris</h1>
              <p className='career--pera'>Professional opportunities or latest technologies overlap with friendly atmosphere</p>
            </div>
          </div>
        </div>
      </section>

      <section className='Section--headingsData' data-aos="zoom-in-up">
        <h1>Highly Ambitious Company</h1>
        <p className='career--pera'>Molaris is the fastest growing IT service company<br></br> and is always in search
          of passionate innovative & excellent professionals</p>
      </section>



      <section className='Career--CardsMain' data-aos="zoom-in-up">
        <Card className='Career--card'>
          <Card.Body>
            <Card.Title>Friendly Atmosphere</Card.Title>
            <Card.Text className='card--txt'>
            A friendly atmosphere leads to better performance of team members which establishes customer satisfaction. At Vetron all team members are given an opportunity to be part of decision making.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='Career--card'>
          <Card.Body>
            <Card.Title>Newest Tech Stack</Card.Title>
            <Card.Text className='card--txt'>
            Modern technology has an impressive influence in todays time. High-tech technology is used at Vetron to declutter and make sure quality work is put forth so the employees can constantly learn through their work.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='Career--card'>
          <Card.Body>
            <Card.Title>Internal Transparency</Card.Title>
            <Card.Text className='card--txt'>
            We believe in sharing all vital information with our employee to render top-notch work and highlights the areas which need to be focused upon.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>




      <section className='Joining--cards'>
      <div className='Section--headingsData' data-aos="zoom-in-up">
        <h1>READY TO JOIN VETRON TEAM?</h1>
      </div>

      <div className='All--Cards' data-aos="zoom-in-up">
      <Card className='Career--card'>
          <Card.Body>
            <h3>Php Developers</h3>
            <Card.Subtitle className="mb-2 ">Required skills</Card.Subtitle>
            <Card.Text className='card--txt'>
            Core PHP, MVC frameworks like Laravel, OOPS and Data Structure
            </Card.Text>
              <Card.Link href="#" className='card--link'>Card Link</Card.Link>
          </Card.Body>
        </Card>

        <Card className='Career--card'>
          <Card.Body>
            <h3>Php Developers</h3>
            <Card.Subtitle className="mb-2 ">Required skills</Card.Subtitle>
            <Card.Text className='card--txt'>
            Core PHP, MVC frameworks like Laravel, OOPS and Data Structure
            </Card.Text>
              <Card.Link href="#" className='card--link'>Card Link</Card.Link>
          </Card.Body>
        </Card>

        <Card className='Career--card'>
          <Card.Body>
            <h3>Php Developers</h3>
            <Card.Subtitle className="mb-2 ">Required skills</Card.Subtitle>
            <Card.Text className='card--txt'>
            Core PHP, MVC frameworks like Laravel, OOPS and Data Structure
            </Card.Text>
              <Card.Link href="#" className='card--link'>Card Link</Card.Link>
          </Card.Body>
        </Card>
      </div>

      <div className='All--Cards' data-aos="zoom-in-up">
      <Card className='Career--card'>
          <Card.Body>
            <h3>Php Developers</h3>
            <Card.Subtitle className="mb-2 ">Required skills</Card.Subtitle>
            <Card.Text className='card--txt'>
            Core PHP, MVC frameworks like Laravel, OOPS and Data Structure
            </Card.Text>
              <Card.Link href="#" className='card--link'>Card Link</Card.Link>
          </Card.Body>
        </Card>

        <Card className='Career--card'>
          <Card.Body>
            <h3>Php Developers</h3>
            <Card.Subtitle className="mb-2 ">Required skills</Card.Subtitle>
            <Card.Text className='card--txt'>
            Core PHP, MVC frameworks like Laravel, OOPS and Data Structure
            </Card.Text>
              <Card.Link href="#" className='card--link'>Card Link</Card.Link>
          </Card.Body>
        </Card>

        <Card className='Career--card'>
          <Card.Body>
            <h3>Php Developers</h3>
            <Card.Subtitle className="mb-2 ">Required skills</Card.Subtitle>
            <Card.Text className='card--txt'>
            Core PHP, MVC frameworks like Laravel, OOPS and Data Structure
            </Card.Text>
              <Card.Link href="#" className='card--link'>Card Link</Card.Link>
          </Card.Body>
        </Card>
      </div>

      <div className='All--Cards' data-aos="zoom-in-up">
      <Card className='Career--card'>
          <Card.Body>
            <h3>Php Developers</h3>
            <Card.Subtitle className="mb-2 ">Required skills</Card.Subtitle>
            <Card.Text className='card--txt'>
            Core PHP, MVC frameworks like Laravel, OOPS and Data Structure
            </Card.Text>
              <Card.Link href="#" className='card--link'>Card Link</Card.Link>
          </Card.Body>
        </Card>

        <Card className='Career--card'>
          <Card.Body>
            <h3>Php Developers</h3>
            <Card.Subtitle className="mb-2 ">Required skills</Card.Subtitle>
            <Card.Text className='card--txt'>
            Core PHP, MVC frameworks like Laravel, OOPS and Data Structure
            </Card.Text>
              <Card.Link href="#" className='card--link'>Card Link</Card.Link>
          </Card.Body>
        </Card>

        <Card className='Career--card'>
          <Card.Body>
            <h3>Php Developers</h3>
            <Card.Subtitle className="mb-2 ">Required skills</Card.Subtitle>
            <Card.Text className='card--txt'>
            Core PHP, MVC frameworks like Laravel, OOPS and Data Structure
            </Card.Text>
              <Card.Link href="#" className='card--link'>Card Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
      </section>


      <Footer />
    </>
  )
}

export default Career