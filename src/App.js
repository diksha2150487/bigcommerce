import logo from "./logo.svg";
import "./App.css";
import img1 from "./image/Group.png";
import img2 from "./image/Group (1).png";
import img3 from "./image/Group (1).png";
import img4 from "./image/Group (3).png";
import img5 from "./image/Group (4).png";
import img6 from "./image/Group (5).png";

function App() {
  return (
    <div>
      <div className="container1">
        <div className="leftcontainer1">
          <h3>Expert BigCommerce Consulting</h3>
          <h2>Bigcommerce Development Service</h2>
          <button className="team">Consult our BigCommerce Team</button>
        </div>
      </div>
      {/* ************************************ */}
      <div className="container2">
        <h2>BIGCOMMERCE SERVICES OFFERED</h2>
        <h3>
          We develop BigCommerce stores that provide a unique and refined
          experience to site visitors
        </h3>
        <h4>which results in better conversions and higher AOV.</h4>
        <div className="box">
          <div className="first1" id="new">
            <img src={img1} className="startup" />
            <h3>Startup</h3>
            <h5>
              We can help you start up a BigCommerce store that is completely
              SEO friendly, high on user experience, and easy to maintain.
            </h5>
          </div>
          <div className="first1">
            <img src={img2} />
            <h3>Design</h3>
            <h5>
              Our BigCommerce design team has demonstrated its excellence in
              designing custom BigCommerce themes with all the desired features
              and capabilities
            </h5>
          </div>
          <div className="first1">
            <img src={img3} />
            <h3>Migration</h3>
            <h5>
              We make migration to BigCommerce easy. We guarantee that no data
              will be lost and that your SEO ranking will be back up in a short
              time.
            </h5>
          </div>
          <div className="first1">
            <img src={img4} />
            <h3>Programming</h3>
            <h5>
              If you need something that is out of the box we can help you
              achieve the same with our BigCommerce expertise and knowledge
            </h5>
          </div>
          <div className="first1">
            <img src={img5} />
            <h3>Maintenance</h3>
            <h5>
              We maintain and manage several BigCommerce stores helping them
              with their operations and scalability
            </h5>
          </div>
          <div className="first1">
            <img src={img6} />
            <h3>Customization</h3>
            <h5>
              Whether you are looking to migrate from blueprint to stencil or
              are looking for some out of the box compliance checks or
              customizations, we are here to serve you.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
