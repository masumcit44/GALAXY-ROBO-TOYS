import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const Rating = form.Rating.value;
    const detail = form.detail.value;
    const url = form.url.value;
    const quantity = form.quantity.value;

    console.log(url, name, seller, email, category, price, Rating, detail);
    const toy = {
      url,
      name,
      seller,
      email,
      category,
      price,
      Rating,
      detail,
      quantity
    };

    fetch("http://localhost:5000/allToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire('toy added successfully')
        }
      });
  };

  return (
    <div className="w-2/4 mx-auto bg-amber-200 rounded-sm p-10 my-4">
      <form onSubmit={handleSubmit} className="">
        <div className="form-control   ">
          <h2 className="text-4xl font-bold text-center">Add Toy Section </h2>
          <label className="label">
            <span className="label-text">Photo URL of the Toy</span>
          </label>
          <input
            type="text"
            placeholder="PhotoURL"
            name="url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input
            type="text"
            placeholder="Toy Name"
            name="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input
            disabled
            type="text"
            defaultValue={user?.displayName}
            name="seller"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input
            disabled
            type="text"
            defaultValue={user?.email}
            name="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-category </span>
          </label>
          <select name="category" className="select select-bordered">
            <option value="ActionFigures">ActionFigures</option>
            <option value="RemoteControl">RemoteControl</option>
            <option value="BuildingSets">BuildingSets</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price of toy</span>
          </label>
          <input
            type="text"
            placeholder="$"
            name="price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="text"
            placeholder="rating"
            name="Rating"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available quantity</span>
          </label>
          <input
            type="text"
            placeholder="Available quantity"
            name="quantity"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail description</span>
          </label>
          <textarea
            type="text"
            placeholder="Detail description"
            name="detail"
            className="input input-bordered resize-none"
            rows={40}
          />
        </div>
        <div className="form-control my-4">
          <input type="submit" className="btn btn-info" value="submit" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddToy;
