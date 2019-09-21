import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Skills extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <h2>Skills</h2>
          <div className="clients-logo-wrapper text-center row">
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"></div>
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"></div>
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><Link to="/skills"><img src="img/logos/color/ruby.png" alt="ruby" /></Link></div>
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><Link to="/skills"><img src="img/logos/color/rails.png" alt="rails" /></Link></div>
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><Link to="/skills"><img src="img/logos/color/react.png" alt="react" /></Link></div>
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><Link to="/skills"><img src="img/logos/color/redux.png" alt="redux" /></Link></div>
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><Link to="/skills"><img src="img/logos/color/js.png" alt="js" /></Link></div>
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><Link to="/skills"><img src="img/logos/color/jQuery.png" alt="jQuery" /></Link></div>
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><Link to="/skills"><img src="img/logos/color/github.png" alt="github" /></Link></div>
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><Link to="/skills"><img src="img/logos/color/heroku.png" alt="heroku" /></Link></div>
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"></div>
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
