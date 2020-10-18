import React from 'react'
import "./footer.css"

export const Footer = (props) => {
  return (
    <div className="main-footer-container">
      <div className="footer-content-wrapper">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h2>WORKOUT &#38; PROGRAMS</h2>
              <ul className="list-unstyled">
                <li>WORKOUT VIDEOS</li>
                <li>CUSTOM WORKOUTS</li>
                <li>WORKOUTS PROGRAMS</li>
                <li>MEAL PLANS</li>
              </ul>
            </div>
            {/* Column2 */}
            <div className="col">
              <h2>HEALTHY LIVING</h2>
              <ul className="list-unstyled">
                <li>FITNESS</li>
                <li>HEALTHY RECIPES</li>
                <li>BEFORE &#38; AFTER</li>
                <li>WEITGH LOSS</li>
              </ul>
            </div>
            {/* Column3 */}
            <div className="col">
              <h2>FICTIONAL COMPANY Inc</h2>
              <ul className="list-unstyled">
                <li>COMMUNITY</li>
                <li>BLOG</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-line">
        </div>
        <section className="copyright-section">
          <p>Copyright (C) 2020 Fictional Company Inc. All rights reserved.</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </section>
      </div>
    </div>
  )

}

export default Footer;