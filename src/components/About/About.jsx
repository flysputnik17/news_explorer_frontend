import "./About.css";

const About = () => {
  return (
    <div className="about">
      <img className="about__img" src="../../images/image-03.svg"></img>
      <div className="about__text">
        <h2 className="about__text-title">About the author</h2>
        <p className="about__text-paragraph">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
};

export default About;
