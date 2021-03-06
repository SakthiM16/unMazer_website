// Footer component goes in this file..
import React from 'react';
import linkedin from "../../Datalytix Vectors/icons/linkedin.png";
import medium from "../../Datalytix Vectors/icons/medium.png";
import twitter from "../../Datalytix Vectors/icons/twitter.png";
import '../Footer/footer.css';
import mail from "../../Datalytix Vectors/icons/mail.png";
import location from "../../Datalytix Vectors/icons/location.png";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
    <footer class="site-footer">
                <div class="container">
        <div class="row footer1">
          
          <div class="col-lg-4 col-md-4 col-sm-12 col-12 footer_link_wrap">

            <ul class="footer-links">
            <h6>Links</h6>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/retail">Solution</Link></li>
              <li><Link to="/insight/statistics">Insight</Link></li>
              <li><Link to="/demo">Try Us</Link></li>
            
            </ul>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-12 footer_link_wrap">
            
            <ul class="footer-links">
            <h6>Legal</h6>
            <li><Link to="/Privacy-Policy">Privacy Policy</Link></li>
              <li><Link to="/Terms-Conditions">Terms & Conditions</Link></li>
              
            </ul>
          </div>
          
          <div class="col-lg-4 col-md-4 col-sm-12 col-12 footer_link_wrap">
          
            <ul class="footer-links">
            <h6>Stay up-to-date</h6>
            <a className="linkedin" target="blank" href="https://www.linkedin.com/company/unmazer/"><img style={{paddingRight:"5px", paddingLeft:"5px"}} src={linkedin} alt="linkedin"/></a>
              <a className="twitter" target="blank" href="https://twitter.com/unmazer"><img style={{paddingRight:"5px", paddingLeft:"5px"}} src={twitter} alt="twitter"/></a>
              <a class="dribbble" target="blank" href="http://blog.unmazer.ai/"><img style={{paddingRight:"5px", paddingLeft:"5px"}} src={medium} alt="medium" /></a>
            <h6>Reach out to us</h6>
            <li><a className="mail" target="blank"><img style={{paddingRight:"5px", paddingLeft:"5px"}} src={mail} alt="mail_id"/>sales@unmazer.ai</a></li>
            <li><a className="location" target="blank"><img style={{paddingRight:"5px", paddingLeft:"5px"}} src={location} alt="mail_id"/>Bengaluru, India</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
         <Link to="#"> unMazer </Link>.
            </p>
          </div>
        </div>
      </div>
</footer>
      
    )
}
