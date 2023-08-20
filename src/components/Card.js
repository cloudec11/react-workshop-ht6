const Card = (props) => {
  const { image, title, body, link } = props;
  return (
    <div className="card">
      <img src={image} alt="" className="card-img" />
    </div>
  );
};

export default Card;
