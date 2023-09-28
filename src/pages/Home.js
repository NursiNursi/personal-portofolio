import "../styles/Home.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>HI, My Name is Nursi</h2>
        <div className="prompt">
          <p>A software developer with passion for learning and creating</p>
          <InstagramIcon />
          <FacebookIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, NextJS, HTML, CSS, React Native, NPM, Bootstrap,
              MaterialUI, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, MySQL, PostgreSQL, GO
            </span>
          </li>
          <li className="item">
            <h2>Languanges</h2>
            <span>JavaScript, Java, Python, C#, C, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
