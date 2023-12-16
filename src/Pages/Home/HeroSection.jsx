import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Amit Carpenter</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Mern Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            A MERN Stack Developer with 1.3 years of experience is skilled in
            creating web applications using MongoDB, Express.js, React, and
            Node.js. They have hands-on experience in both frontend and backend
            development
          </p>
            <br/>
        </div>
        <Link to="Contact">
          <button className="btn btn-primary">Get In Touch</button>
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
