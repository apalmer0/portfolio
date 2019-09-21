import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-footer col-md-6 col-xs-6">
              <h3>Navigate</h3>
              <ul className="no-list-style footer-navigate-section">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/hire">Hire</Link></li>
              </ul>
            </div>
            <div className="col-footer col-md-4 col-xs-6">
              <h3>Contacts</h3>
              <p className="contact-us-details">
                <b>Homebase:</b> Boston, Massachusetts<br/>
                <b>Email:</b> <a href="mailto:andrew@andrewpalmer.co">andrew@andrewpalmer.co</a><br/>
                <b>Github:</b> <a href="https://github.com/apalmer0/" target="_blank">github.com/apalmer0</a><br/>
                <b>LinkedIn:</b> <a href="https://linkedin.com/in/apalmer0/" target="_blank">linkedin.com/in/apalmer0</a><br/>
                <b>Phone:</b> 617.690.8147<br/>
              </p>
            </div>
            <div className="col-footer col-md-2 col-xs-6">
              <h3>Stay Connected</h3>
              <ul className="footer-stay-connected no-list-style">
                <li><a href="https://github.com/apalmer0" target="_blank" className="github"></a></li>
                <li><a href="https://www.linkedin.com/in/apalmer0" target="_blank" className="linkedin"></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="footer-copyright">
                &copy; 2016 Andrew Palmer. All rights reserved.
                <br />
                Some icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> are licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
