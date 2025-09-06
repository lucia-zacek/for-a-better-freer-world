import "./styles.scss";
import familyPhoto from '../assets/images/family_photo.jpg';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <span className="welcome-title">
        Mission & Vision
      </span>
      <div>
        <span className="welcome-message">
          A place where your ideas and choices matter,
          <br />
          where a like-minded community
          <br />
          thrives on collaboration,
          <br />
          not exploitation.
          <br /> <br />
          Here, powerful tools are shared,
          <br />
          not hoarded;
          <br />
          you are free to build, improve, and innovate
          <br />
          without gatekeepers draining progress for profit.
          <br /> <br />
          It is not just a vision,
          <br />
          it is a tool against enshitification
          <br />
          and a stand for a 
          {' '}
        </span>
        <span className="italic welcome-message">
           better freer world
        </span>
        <span className="welcome-message">
          <br />
          we create together.
        </span>
      </div>
      <img src={familyPhoto} className="family-photo" alt="Family" />
      <span className="welcome-subtext">
        Be The Change You Want To See In The World!
      </span>
    </div>
  );
};

export default Welcome;
