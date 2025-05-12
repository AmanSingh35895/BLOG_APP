import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import defaultImg from "../assets/images/2.jpg";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;
  console.log(cat);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/v1/posts${cat}`);
        console.log("Response: ", res.data); // response object handling eg: res.data[0].title
        setPosts(res.data);
      } catch (err) {
        console.log("Error: ", err.response.data);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    <>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="card-container flex justify-center items-center gap-36 mr-24 ml-24 border border-red-500 mt-8"
          >
            <div className="left">
              <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
              <p className="mb-6">{getText(post.desc)}</p>
              <Link to={`/post/${post.id}`}>
                <button className="border border-orange-400 p-2">
                  <span className="text-sm text-orange-300">Read More</span>
                </button>
              </Link>
            </div>
            <div className="right">
              <img
                src={post.img}
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
