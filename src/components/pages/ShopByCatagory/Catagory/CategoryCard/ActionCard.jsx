import React from "react";
import { useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";
import "@smastrom/react-rating/style.css";
const ActionCard = ({ card }) => {
  const { _id, image, name, price, rating } = card;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleNotLogin = () => {
    Swal.fire({
      title: "please login!",
      text: 'You have to log in first to view details',
    });
    navigate('/login')
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-80 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="">price: {price} </p>
        <div className="flex  items-center">
          {" "}
          <p className="flex-grow-0">rating:</p>{" "}
          <Rating disabled style={{ maxWidth: 150 }} value={rating} readOnly />{" "}
        </div>
        <div className="card-actions justify-end">
          {user ? (
            <Link to="/toydetails">
              <button className="btn btn-primary">View Details button</button>
            </Link>
          ) : (
            <button onClick={handleNotLogin} className="btn btn-primary">
              View Details button
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
