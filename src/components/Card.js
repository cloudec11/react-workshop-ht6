const Card = (props) => {
  const { image, title, body, link } = props;
  return (
    <div className='card'>
      <img className='card-img' src={image} alt='project' />
      <p className='card-title'>{title}</p>
      <p className='card-body'>{body}</p>
      <a className='card-link' href={link} target='_blank' rel='noreferrer'>Learn More</a>
    </div>
  );
};

export default Card;
