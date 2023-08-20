import Headshot from "../assets/images/headshot.jpg";

const Home = () => {
  return (
    <div className="Home">
      <img className="headshot" src={Headshot} alt="headshot" />
      <p className="intro">👋 Hi there! My name is</p>
      <h1 className="name">Victoria Da Rosa</h1>
      <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim neque volutpat ac tincidunt. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Viverra justo nec ultrices dui. Pellentesque massa placerat duis ultricies lacus. Sit amet justo donec enim diam. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Sem integer vitae justo eget. Sed cras ornare arcu dui vivamus arcu felis. Nibh tellus molestie nunc non.</p>
    </div>
  );
};

export default Home;
