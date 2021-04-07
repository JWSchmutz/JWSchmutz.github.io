import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2 className="page-title light-gray">About Me</h2>
      <div className="about-main">
        <img
          src={require("../../images/me.jpg").default}
          alt="me"
          className="me"
        />
        <section>
          <h3 className="sub-title light-gray">Hello! I'm Jeremiah.</h3>
          <p className="about-p light-gray">
            I am a proud husband and father of three feral children. I am also
            proud to work as a web developer for Bank of America. I grew up in
            Clemson, went to college near Buffalo, and my entire professional
            life has been in the wonderful Charlotte, NC.
          </p>
        </section>
        <section>
          <h3 className="sub-title light-gray">My Coding Journey</h3>
          <p className="about-p light-gray">
            After seven years of teaching high school mathematics, I was ready
            for a change. I was very interested in coding, but I had no
            experience! I kept looking at jobs, wondering how long I would have
            to work them before being able to switch to coding. This led me to a
            web development bootcamp. After twelve intense weeks, I was
            immediately hired on as a teaching assistant. From there, I got my
            current job as a web developer at Bank of America. Now, I find
            myself coding around 8 hours a week outside of my work. I just can't
            get enough of it!
          </p>
        </section>
        <section>
          <h3 className="sub-title light-gray">Interests</h3>
          <p className="about-p light-gray">
            I am a massive nerd. In my free time, I like to code and play games.
            I really like to play basketball, soccer, and volleyball (although I
            am terrible at it). My wife and I volunteer at our church every
            Sunday, and attend a small group wednesday nights. I am also
            interested in math, logic, media, philosophy, and other cultures and
            languages. I am close to fluent in Spanish.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
