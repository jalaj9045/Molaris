import React from 'react'
import Navbar from "../Home/Navbar";
import Serviceban from '../Home/Assest/serviceimg.png';
import cycle from '../Home/Assest/earth.PNG';
import pipeline from '../Home/Assest/pipeline.PNG';
import { Tabs, Tab } from 'react-bootstrap';
import read from '../Home/Assest/read.png';
import Footer from '../Home/Footer';
function Service() {
  return (
    <>
      <Navbar />

      <section className="About--MainSec">
        <div className='left--aboutdata'>
          <div className="content text-white" data-aos="zoom-in-right">
            <h1>Delivering Agile <br></br> Environment Through DevOps</h1>
            <p>Re-Engineering your Development & Deployment Process</p>
            <button className="banner-btn">Contact Us</button>
            <div className="staranimate">
            </div>
          </div>
        </div>
        <div className='right--aboutdata'>
          <img src={Serviceban} className='about--bannerimg' />
        </div>
      </section>


      <section className='Section--headingsData'>
        <h1>Impeccable Benefits of DevOps</h1>
        <p className='career--pera'>Implement DevOps to boost up the deployment speed with improved code quality</p>
      </section>

      <section className='About--Content' data-aos="zoom-in-up">
        <div className='About--conentright'>
          <div className='About--us'>
            <h1><span className='thrw--border'>Improved </span>IT service Delivery</h1>
            <p className='career--pera'>Deliver your applications faster & accurate with DevOps. Change the manner in which your team works by crossing over any barrier among advancement and operational administrations. Implement DevOps for better correspondence and cooperation within teams.</p>
          </div>
        </div>
        <div className='About--conentleft'>
          <img src={cycle} className='about--bannerimg' />
        </div>
      </section>

      <section className='Section--headingsData' data-aos="zoom-in-up">
        <h2>Molaris Effective Development Automation With DevOps</h2>
        <p className='career--pera'>DevOps redefines the software delivery and deployment strategy</p>
      </section>

      <section className='Aotumation--data'>
        <div className='Service--Tabs' data-aos="zoom-in-up">
          <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="Continuous Integration" className='tabs--data'>
              <h2><span className='thrw--border'>Continuous </span>Integration</h2>
              <p>CI is an enterprise well known to discover any troubles inside the early stage. Our CI specialists use tools like Jenkins for significant level cross-group conversation to spare time..</p>
              <div className='read--data'>
                <div className='check--data'>
                  <img src={read} />
                  <p className='setpadd'>Enhanced Product Quality</p>
                </div>
                <div className='check--data'>
                  <img src={read} />
                  <p className='setpadd'>Reduced Bugs & Incidents</p>
                </div>
                <div className='check--data'>
                  <img src={read} />
                  <p className='setpadd'>Increase in New Release Timeframe</p>
                </div>
                <div className='check--data'>
                  <img src={read} />
                  <p className='setpadd'>
                    Improved Adaptability</p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Infrastructure Management" className='tabs--data'>
              <h2><span className='thrw--border'>Infrastructure </span>Management</h2>
              <p>Our DevOps solution helps to develop & deploy high-quality software products and services. Providing better resource management with re-using option & low-cost implementation</p>
              <div className='read--data'>
                <div className='check--data'>
                  <img src={read} />
                  <p className='setpadd'>Enhanced Product Quality</p>
                </div>
                <div className='check--data'>
                  <img src={read} />
                  <p className='setpadd'>Reduced Bugs & Incidents</p>
                </div>
                <div className='check--data'>
                  <img src={read} />
                  <p className='setpadd'>Increase in New Release Timeframe</p>
                </div>
                <div className='check--data'>
                  <img src={read} />
                  <p className='setpadd'>
                    Improved Adaptability</p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Continuous Integration" className='tabs--data'>
              <h2><span className='thrw--border'>Continuous  </span>Delivery</h2>
              <p>CD is an engineering approach which releases the software updates in a safe & reliable way. Reduce your deployment risks with our CD experts with instant deployment process with accurate changes</p>
              <div className='read--data'>
                <div className='check--data'>
                  <img src={read} />
                  <p className='setpadd'>Enhanced Product Quality</p>
                </div>
                <div className='check--data'>
                  <img src={read} />
                  <p className='setpadd'>Reduced Bugs & Incidents</p>
                </div>
                <div className='check--data'>
                  <img src={read} />
                  <p className='setpadd'>Increase in New Release Timeframe</p>
                </div>
                <div className='check--data'>
                  <img src={read} />
                  <p className='setpadd'>
                    Improved Adaptability</p>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>



      <section className='Section--headingsData' data-aos="zoom-in-up">
        <h2>Pipeline a continuous business delivery with DevOps</h2>
        <p className='career--pera'>DevOps breaks the barrier between development & operational services</p>
      </section>
      <div className='Pipe--lineImg' data-aos="zoom-in-up">
        <img src={pipeline} />
      </div>

      <Footer />
    </>
  )
}

export default Service