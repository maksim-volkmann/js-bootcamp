import "./aboutUs.css";

const AboutUs = ({ name, longName }) => {
  return (
    <div className="aboutUs">
      <div className="aboutUsWrapper">
        <div className="aboutUsWrapperLeft">
          <h1>{name}</h1>
        </div>
        <div className="aboutUsWrapperRight">{longName}</div>
      </div>
    </div>
  );
};

export default AboutUs;
