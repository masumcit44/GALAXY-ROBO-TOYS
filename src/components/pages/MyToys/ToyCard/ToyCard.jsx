import React from "react";
import { FaEdit } from "react-icons/fa";
const ToyCard = ({ mytoy, handleDelete, handleUpdate }) => {
  const { _id, category, name, price, quantity, sellerName, image } = mytoy;
  return (
    <tr className="font-bold text-base ">
      <td>{sellerName}</td>
      <td className="avator">
        <div className="w-24 mask mask-squircle">
          <img className="w-40 h-20" src={image} />
        </div>
      </td>
      <td className="nav-design text-2xl bg-amber-100">{name}</td>
      <td>{category}</td>
      <td className="text-red-500 bg-green-300">${price}</td>
      <td className="text-green-900 ">{quantity}</td>
      <td className=" ">
        <label
          htmlFor="my-modal-6"
          onClick={() => handleUpdate(_id)}
          className="btn btn-outline mr-2  btn-info"
        >
          <FaEdit></FaEdit>
        </label>

        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-outline w-12 bg-red-600 text-red-100 btn-circle"
        >
          x
        </button>
      </td>
    </tr>
  );
};

export default ToyCard;
