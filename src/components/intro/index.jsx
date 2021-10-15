import "./styles.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">My name is</h2>
          <h1 className="i-name">Shankhadeep Dey</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Mobile App Developer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">Right</div>
    </div>
  );
};

export default Intro;
