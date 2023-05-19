import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ToyCard from "./ToyCard/ToyCard";
import Swal from "sweetalert2";
const MyToys = () => {
  const [mytoys, setMyToys] = useState([]);
  const { user } = useContext(AuthContext);
  //   console.log(user?.email);
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  useEffect(() => {
    fetch(`http://localhost:5000/alltoys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (user) {
          setMyToys(data);
        }
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

  if (!user) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div className="overflow-x-auto my-4">
      <table className="table w-full">
        <thead>
          <tr className="bg-amber-100">
            <th>Seller</th>
            <th>Image</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {mytoys.map((mytoy) => (
            <ToyCard
              key={mytoy._id}
              mytoy={mytoy}
              handleDelete={handleDelete}
            ></ToyCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
