import React from "react";
import posts from "../constant/posts";

const Home = () => {
  return (
    <>
      {posts.map((item) => {
        return (
          <div
            key={item.id}
            className="card-container flex justify-center items-center gap-36 mr-24 ml-24 border border-red-500 mt-8"
          >
            <div className="left">
              <h1 className="text-3xl font-semibold mb-4">{item.title}</h1>
              <p className="mb-6">{item.description}</p>
              <button className="border border-orange-400 p-2">
                <span className="text-sm text-orange-300">Read More</span>
              </button>
            </div>
            <div className="right">
              <img
                src={item.image}
                className="h-48 w-96 object-cover"
                alt="post's image"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
