import React,{Component } from 'react';

class Header extends React.Component {
  render(){
    return(
      <header className="masthead" >
          <div style={{backgroundImage: "url('img/home-bg.jpg')"}}>
        <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>Clean Blog</h1>
              <span className="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
    );
  }
}

export default Header;
