import React, { Component } from "react";

class Profile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className=" col-sm-6 jumbotron m-1">
            <h1>Pratik Gupta</h1>
            <p>
              Software Development Professional with 4+ years of experience in
              Web Application Development .
            </p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/pratik-gupta-76407aa7/"
              target="_blank"
            >
              https://www.linkedin.com/in/pratik-gupta-76407aa7/
            </a>
            <br />
            <br />
            <h3>Skills</h3>
            <h4>Programming Languages:</h4>
            <li>Python</li>
            <li>Php</li>
            <li>Javascript</li>
            <li>NodeJS</li>
            <h4>Mark-up and Formats</h4>
            <li>HTML 5 </li> <li>CSS3</li> <li>JSON</li>
            <h4>Js Frameworks:</h4>
            <li>Angular JS</li>
            <li>React Js</li>
            <h4>Cloud Services:</h4>
            <li>Ibm Cloud</li>
            <li>IBM Watson Conversation Services</li>
            <li>AWS</li>
            <h4>Databases</h4>
            <li>MongoDb</li>
            <li>MySQL</li>
            <li>ELK & Logstash</li>
            <h4>Deployment Technologies</h4>
            <li>Dockers & Kubernetes</li>
          </div>
          <div className=" col-sm-5 jumbotron m-1">
            <h3>Simple React Application</h3>
            <bold>
              <i>This Application demonstrates a simple React Application </i>
              <br />
              <br />
              <h5>
                It Demonstrates simple cart functionality and dynamic data fetch
              </h5>
              <li>
                Clicking on Add item will increment the qty in qty span as well
                as navbar
              </li>
              <li>
                Clicking of Delete item will delete the items from the page
              </li>
              <li>fetching of data dynamically </li>
            </bold>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
