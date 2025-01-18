import "./home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="grid-item">
            <a href="/study">
              <p>Study</p>
            </a>
          </div>
          <div className="grid-item">
            <a href="/work">
              <p>Work</p>
            </a>
          </div>
          <div className="grid-item">
            <a href="/migration">
              <p>Migration</p>
            </a>
          </div>
          <div className="grid-item">
            <a href="/business">
              <p>Business</p>
            </a>
          </div>
          <div className="grid-item">
            <a href="/travel">
              <p>Travel</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
