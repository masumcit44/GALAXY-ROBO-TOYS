import React from "react";

const Blog = () => {
  return (
    <div className="md:max-w-6xl flex flex-col gap-4  mx-auto">
      <div className="bg-orange-200 p-10 rounded">
        <h2 className="text-2xl font-bold ">
          Question - 1 : What is an access token and refresh token? How do they
          work and where should we store them on the client-side?
        </h2>
        <p className="text-base">
          <span className=" font-bold text-lg">Answer : </span> access token is
          used to verify authorized user to get data from backend , refresh
          token is used generate new access to token when current access token
          gets expired . we can store access token and refresh token on client
          side local storage or http only cookie
        </p>
      </div>
      <div className="bg-slate-100 p-10 rounded">
        <h2 className="text-2xl font-bold ">
          Question - 2 : Compare SQL and NoSQL databases?
        </h2>
        <p className="text-base">
          <span className=" font-bold text-lg">Answer : </span> SQL database are
          known as relational database , they follows tabular structure to store
          data . Otherhand, NoSQL databases use various data models, such as
          key-value pairs, documents, columnar, or graph-based structures,
          depending on the specific database.
        </p>
      </div>
      <div className="bg-green-200 p-10 rounded">
        <h2 className="text-2xl font-bold ">
          Question - 3 :What is express js? What is Nest JS ?
        </h2>
        <p className="text-base">
          <span className=" font-bold text-lg">Answer : </span> Express.js is a
          popular web application framework for Node.js, which gives a simple
          and flexible way to build web applications and APIs. <br />
          Nest JS is also Node.js framework for building scalable and efficient
          server-side applications
        </p>
      </div>
      <div className="bg-yellow-200 p-10 rounded">
        <h2 className="text-2xl font-bold ">
          Question - 4 : What is MongoDB aggregate and how does it work ?
        </h2>
        <p className="text-base">
          <span className=" font-bold text-lg">Answer : </span>
          MongoDB's aggregate is a method which is used for data analysis and
          manipulation operations on collections.
          <br />
          MongoDB's aggregate works by processing data through a sequence of
          stages. it uses pipelining method where the output of a stage become
          input of another stage . Each stage performs a specific operation on
          the data, such as filtering, grouping, or calculating aggregate values
          .
        </p>
      </div>
    </div>
  );
};

export default Blog;
