import React from 'react'
import Navbar from "../Home/Navbar";
import risk from "../../Screens/Home/Assest/b.png";
import toolbanner from "../../Screens/Home/Assest/toolsbanner.jpg";
import solutions from "../../Screens/Home/Assest/solution.png";
import pan from "../../Screens/Home/Assest/pan.PNG";
import Footer from '../Home/Footer';
export default function About() {
    return (
        <>
            <Navbar />
            <section className="About--MainSec">
                <div className='left--aboutdata'>
                    <div className="content text-white" data-aos="zoom-in-right">
                        <h1>We Make It Happen</h1>
                        <p>We are tech lovers who develop products to support companies</p>
                        <button className="banner-btn">Contact Us</button>
                        <div className="staranimate">
                        </div>
                    </div>
                </div>
                <div className='right--aboutdata'>
                    <img src={risk} className='about--bannerimg' />
                </div>
            </section>


            {/* section for about contant  */}
            <section className='About--Content'>
                <div className='About--conentleft' data-aos="zoom-in-up">
                <img src={toolbanner} className='about--bannerimg' />
                </div>
                <div className='About--conentright' data-aos="zoom-in-up">
                    <div className='About--us'>
                    <h1><span className='thrw--border'>About</span> Us</h1>
                    <p>In this world of technology and AI we are a creative storyteller who imparts the light of modernization to influence the world with a legitimate ray of designing.</p>
                    <p>From every bizarre angle, Vetron can success you to innovate, grow and become a customer-centric organization. A nimble firm incorporating auspicious solutions by a global team of professionals.</p>
                    <p>Our team of highly-skilled technicians set up together and bring boundless potential which gets utilized in innovative articulation. The top-notch management team of the organization strives to give the best and an atmosphere of passion and wealth is surrounded 24x7. Our "SEO Services" is the cherry on top of the mouth-watering cake which is the desire of all.</p>
                    <p>We possess sundry nature, yet take a shot at a shared objective with congruity. We convey vitality and knowledge to any objective by acclimatizing points of view over the team</p>
                    </div>
                </div>
            </section>


            <div className='mini--banner' data-aos="zoom-in-up">
                <h1 className='text-white'>We Build Ideas Into Reality</h1>
            </div>

            <section className='About--Content' data-aos="zoom-in-up">
                <div className='About--conentright'>
                    <div className='About--us'>
                    <h1><span className='thrw--border'>Our</span> Value</h1>
                    <p>Our zealous professional unified team integrity is devoted to executing efficient and quality work in all circumstances.</p>
                    </div>
                </div>
                <div className='About--conentleft'>
                <img src={solutions} className='about--bannerimg' />
                </div>
            </section>

            <section className='Our--Vision'>
                <div className='About--conentright '>
                    <div className='About--us text-white text-center throwborder'>
                    <h1><span className='thrw--border'>Vision</span></h1>
                    <p>The company's field of vision is to deliver a technologically equipped solution in the most effective way. In addition to it, Vetron tunes with clock and hence deliver the output in the given period of time.</p>
                    </div>
                </div>
            </section>


            <section className='About--Content focus'>
                <div className='About--conentleft focus--img' data-aos="zoom-in-up">
                <img src={pan}  />
                </div>
                <div className='About--conentright' data-aos="zoom-in-up">
                    <div className='About--us'>
                    <h1><span className='thrw--border'>Focus</span></h1>
                    <p>Vetron IT Services focus on excellent customer service and satisfactory solutions.</p>
                    <button className="About--btn">Find Out How We Work</button>
                    </div>
                </div>
            </section>

            <div className='Work--with'>
                <div className='workdata text-white '>
                    <h1>WORK WITH US</h1>
                    <p>Thank you for exploring Let's know if We can build your idea together</p>
                    <button className="About--btn">Get a quote</button>
                </div>
            </div>


            <Footer/>
        </>
    )
}
