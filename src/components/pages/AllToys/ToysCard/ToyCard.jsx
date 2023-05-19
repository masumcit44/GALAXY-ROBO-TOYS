import React from "react";

const ToyCard = ({ toy }) => {
  const { _id, category, name, price, quantity, seller ,image } = toy;
  return (
    <tr className="font-bold text-base ">
      <td>{seller}</td>
      <td className="avator">
        <div className="w-24 mask mask-squircle">
          <img className="w-40 h-20" src={image} />
        </div>
      </td>
      <td className="nav-design text-2xl bg-amber-100">{name}</td>
      <td>{category}</td>
      <td className="text-red-500 bg-green-300">{price}</td>
      <td className="text-green-900 ">{quantity}</td>
      <td>
        <button className="btn btn-outline  btn-info">View Details</button>
      </td>
    </tr>
  );
};

export default ToyCard;
