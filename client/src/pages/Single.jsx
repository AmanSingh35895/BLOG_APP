import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Single = () => {
  const [post, setPost] = useState({});
  const { currentUser } = useContext(AuthContext);

  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/v1/posts/${postId}`);
        setPost(res.data[0]);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchData();
  }, [postId]);

  console.log(post);
  // console.log(postId);
  console.log(post.userImg);
  return (
    <>
      <div className="single">
        <div className="top-image">
          <img src={post.img} alt="" />
        </div>
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="userImg" />}
          <div className="userInfo">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {/* currentUser.username === post.username && ( */}
          {/*   <div className="edit"></div> */}
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default Single;
