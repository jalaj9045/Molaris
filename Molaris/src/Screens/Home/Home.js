import Multicards from "./Multicards";
import Blogcard from "./Blogcard";
import Products from "./Products";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";
import remove from "../../Screens/Home/Assest/cd.png";
import Footer from "./Footer";
function Home() {

  return (
    <>
      <Navbar />
<section className="banner_underline">
        <div className="Banner">
          <div className="banner_left_div" data-aos="zoom-in-up">
            <div className="banner-content">
              <div className="content">
                <h1>WE BUILD IDEAS INTO <span className="company">REALITY</span> </h1>
                <p className="pera1">You imagine We make it happen</p>
                <button className="banner-btn">Get A QUOTE</button>
                <div className="staranimate"></div>
              </div>
            </div>
          </div>
          <div className="banner_right_div show" data-aos="zoom-in-down">
            <img src={remove} className='bannerimg' />
          </div>
        </div>
      </section>

      <section className='Our-Services'>
        <div className='title text-center ' data-aos="fade-up">
          <h1>Our Services Portfolio</h1>
          <p>Grow your business with our expertise</p>
        </div>
        <div className='card-section' data-aos="fade-up">
          <Multicards />
        </div>
      </section>

      <section className='Our-products'>
        <div className='title text-center' data-aos="fade-up">
          <h1>Our Product Portfolio</h1>
          <p>Grow your business with our expertise</p>
        </div>
        <div className='card-section' data-aos="fade-up">
          <Products />
        </div>
      </section>

      <section className='we-help'>
        <div className='title text-center' data-aos="fade-up">
          <h1>How Do We Help</h1>
          <div>We work with both built up and new companies however</div>
          <div>our approach in each case consistent & exclusive</div>
        </div>
        <div className="help-cards">
          <div className="leftdata" data-aos="fade-up">
            <Card className="blackcard">
              <Card.Body>
                <h1>Business</h1>
                <div className="line-center"> <div className="line"></div></div>
                <Card.Text className="cardtext">
                  Our everlasting objective is to be a dependable accomplice that assists organizations with being at the edge of innovation
                </Card.Text>
                <Button className="banner-btn">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="rightdata" data-aos="fade-up">
            <Card className="whitecard">
              <Card.Body>
                <h1>Start-ups</h1>
                <div className="line-center"> <div className="line"></div></div>
                <Card.Text className="cardtext">
                  Start-ups are about precision timing and quick development. We definitely realize how to accomplish the best outcomes in the most limited measure of time
                </Card.Text>
                <Button className="banner-btn2">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>


      <section className='Our-Blogs'>
        <div className='title text-center' data-aos="fade-up">
          <h1>Our Blog</h1>
        </div>
        <div className='card-section' data-aos="fade-up">
          <Blogcard />
        </div>
      </section>


      <div className='title2 text-center' data-aos="fade-up">
        <h1>WORK WITH US</h1>
        <p>Let us know if you have an idea We can build together</p>
        <button className="feturedbtn">Get A QUOTE</button>
      </div>

      <Footer />
    </>
  );
}

export default Home;
