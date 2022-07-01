import React from 'react'
import Footer from '../Home/Footer';
import Navbar from "../Home/Navbar";
function Contact() {
  return (
    <>
      <Navbar />

      <section className='for-form' >
        <div className='half--background'>
          <div className='Form--box' data-aos="zoom-in-down">
            <div className='form--heading'>
              <h2>Fill the form and submit, We'll get back to you ASAP</h2>
            </div>
            <div className='my--form'>
              <form className='contact--form'>
                <div class="form-group">
                  <label for="usr">Name:</label>
                  <input type="text" class="form-control" placeholder="Enter Name" id="usr" />
                </div>
                <div class="form-group">
                  <label for="email">Email address:</label>
                  <input type="email" class="form-control" placeholder="Enter email" id="email" />
                </div>
                <div class="form-group">
                  <label for="comment">Comment:</label>
                  <textarea class="form-control" rows="5" id="comment" placeholder="Write Some Osm Comments.."></textarea>
                </div>
                <button className="submit--btn">Send Request</button>
              </form>
            </div>
            <div className='Contact--largecard'>
              <h2>Molaris IT Services</h2>
              <div className='contact--Box'>
                <div className='Contact--numbs'>
                  <h4>Phone and Email</h4>
                  <div className='number'>+91 (951) 202 4101</div>
                  <div className='number'>+91 (951) 202 4101</div>
                  <div className='number'>+91 (951) 202 4101</div>
                </div>
                <div className='Contact--numbs'>
                  <h4>Address</h4>
                  <div className='number'>617, Western Business Park ,</div>
                  <div className='number'>Udhna Magdalla Road, Vesu, Surat,</div>
                  <div className='number'>Gujarat, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact
