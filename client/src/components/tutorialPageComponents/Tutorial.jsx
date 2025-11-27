import { Link } from "react-router-dom";

export default function Tutorial({ 
  title, 
  image, 
  link, 
  onClick
}) {
  return (
    <div className="tutorial-card" onClick={onClick}>
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
      <p className="tutorial-card-title"><strong>{title}</strong></p>
      <Link to={link}>
        <button className="tutorial-checkout-btn">Check Out</button>
      </Link>
    </div>
  );
}