import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Skills extends Component {
  render() {
    const data = [
      { skill: "ruby", logo: "img/logos/color/ruby.png" },
      { skill: "rails", logo: "img/logos/color/rails.png" },
      { skill: "react", logo: "img/logos/color/react.png" },
      { skill: "redux", logo: "img/logos/color/redux.png" },
      { skill: "js", logo: "img/logos/color/js.png" },
      { skill: "jQuery", logo: "img/logos/color/jQuery.png" },
      { skill: "github", logo: "img/logos/color/github.png" },
      { skill: "heroku", logo: "img/logos/color/heroku.png" },
    ];

    return (
      <div className="section">
        <div className="container">
          <h2>Skills</h2>
          <div className="clients-logo-wrapper text-center row">
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6" />
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6" />
            {data.map(({ skill, logo }) => (
                <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6">
                  <Link to="/skills"><img src={logo} alt={skill} /></Link>
                </div>
              )
            )}
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6" />
            <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6" />
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
