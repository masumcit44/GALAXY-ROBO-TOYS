import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ToyCard from "./ToyCard/ToyCard";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MyToys = () => {
  const [mytoys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  //   console.log(user?.email);
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: " btn ms-2 btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  useEffect(() => {
    fetch(`http://localhost:5000/alltoys?email=${user?.email}`)
      .then((res) => {
        toast.info("Loading your toys...", { autoClose: 2000 }); // Show the spinner
        return res.json();
      })
      .then((data) => {
        if (user) {
          setMyToys(data);
        }
      })
      .catch((error) => {
        toast.error("Error fetching toys."); // Show error message if there's an error
        console.error(error);
      });
  }, [user]);

  const handleDelete = (id) => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/alltoys/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remaining = mytoys.filter((toy) => toy._id != id);
                setMyToys(remaining);

                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your toy has been deleted.",
                  "success"
                );
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancelled");
        }
      });
  };
  const handleUpdate = (id) => {
    setShowModal(true);
    setUpdateId(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const detail = form.detail.value;
    const quantity = form.quantity.value;

    console.log(price, quantity, detail);
    const toy = {
      price,
      detail,
      quantity,
    };

    fetch(`http://localhost:5000/allToys/${updateId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const updated = mytoys.find((toy) => toy._id == updateId);
        const remaining = mytoys.filter((toy) => toy._id != updateId);
        const updatedToy = [updated, ...remaining];
        updated.price = price;
        updated.detail = detail;
        updated.quantity = quantity;
        if (data.modifiedCount > 0) {
          setMyToys(updatedToy);
          Swal.fire('Updated')
          setShowModal(false);
        }
      });
  };

  if (!user) {
    return <progress className="progress w-56"></progress>;
  }

  const handleAccending = (sort) => {
    fetch(`http://localhost:5000/mytoys?sort=${sort}&&email=${user?.email}`)
      .then((res) => {
        toast.info("Loading your toys...", { autoClose: 2000 }); // Show the spinner
        return res.json();
      })
      .then((data) => {
        setMyToys(data);
      });
  };

  return (
    <div className="overflow-x-auto my-4 ">
      <table className="table w-full">
        <thead>
          <tr className="bg-amber-100">
            <th>Seller</th>
            <th>Image</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th className="flex justify-around">
              <button
                onClick={() => handleAccending(1)}
                className="btn btn-sm bg-purple-600 mr-2"
              >
                Ascending{" "}
              </button>
              <button
                onClick={() => handleAccending(-1)}
                className="btn bg-green-400 btn-sm"
              >
                Descending
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {mytoys.map((mytoy) => (
            <ToyCard
              key={mytoy._id}
              mytoy={mytoy}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            ></ToyCard>
          ))}
        </tbody>
      </table>
      {showModal && (
        <>
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <form onSubmit={handleSubmit} className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">update Price of toy</span>
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
                    rows={60}
                  />
                </div>
                <div className="form-control my-4">
                  <div className="form-control my-4">
                    <input
                      type="submit"
                      htmlFor="my-modal-6"
                      className="btn"
                      value="updated!"
                    />
                  </div>
                </div>
              </form>
              <div className="modal-action"></div>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default MyToys;
