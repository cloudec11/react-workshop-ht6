import Card from "../components/Card";
import ProjectImage from "../assets/images/project.jpg"

const Projects = () => {
  return (
    <div className="Projects">
      <p>test</p>
      <div className="card-row">
        <Card image={ProjectImage} title="Awesome Project" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt." link="https://hackthe6ix2023.devpost.com/" />
        <Card image={ProjectImage} title="Awesome Project" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt." link="https://hackthe6ix2023.devpost.com/" />
        <Card image={ProjectImage} title="Awesome Project" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt." link="https://hackthe6ix2023.devpost.com/" />
      </div>
      <div className="card-row">
        <Card image={ProjectImage} title="Awesome Project" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt." link="https://hackthe6ix2023.devpost.com/" />
        <Card image={ProjectImage} title="Awesome Project" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt." link="https://hackthe6ix2023.devpost.com/" />
        <Card image={ProjectImage} title="Awesome Project" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt." link="https://hackthe6ix2023.devpost.com/" />
      </div>
    </div>
  );
};

export default Projects;
