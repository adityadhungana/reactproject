import React, { Component } from "react";

class Header extends Component
{
    render()
    {
        return(
<div>
<header>
  <div className="collapse bg-dark" id="navbarHeader">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4 className="text-white">About this single page react application</h4>
          <p className="text-muted">This react application is created for COMP 6210. This is an assignment one. This is designed and developed by Aditya Dhungana - 30038063</p>
        </div>
      </div>
    </div>
  </div>
  <div className="navbar navbar-dark bg-dark shadow-sm">
    <div className="container">
      <a href="#" className="navbar-brand d-flex align-items-center">
      <svg class="nrk-media-play-icon" viewBox="0 0 24 24" width="1.500em" height="1.500em" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6 2h8l5.5 10L14 22H6l5.5-10L6 2z"></path></svg>
        <strong>SCP: React Assignment one</strong>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>

</div>

        );
    }
}



export default Header;