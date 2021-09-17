import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function Posts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //Get all posts

  let getPosts = async () => {
    const { data } = await axios.get(url); //for posts api
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    console.log(users);
    setPosts(data);
    setUsers(users);
  };

  //createPost operation:

  let createPosts = async () => {
    const { data: post } = await axios.post(url, {
      userId: userId,
      title: title,
      body: body,
    });
    let tempPosts = [...posts];
    console.log(post);
  };

  //component Did Mount ();

  useEffect(() => {
    console.log("Mounted");
    getPosts();
  }, []);

  //delele operation:
  let deletePost = async (id) => {
    const { data } = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    console.log(data);
    let tempPosts = [...posts];
    tempPosts = tempPosts.filter((post) => {
      return post.id !== id;
    });
    setPosts(tempPosts);
  };

  //handle change()
  let handleChange = ({ target: { name, value } }) => {
    if (name === "userId") setUserId(value);
    if (name === "title") setTitle(value);
    if (name === "body") setBody(value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    // if(id==="")createPost();
  };

  return (
    <>
      <div className="container">
        <p className="display-3 text-center font-weight-bold">
          All Posts
          <button
            type="button"
            className="btn btn-success mx-4"
            data-toggle="modal"
            data-target="#mymodal"
          >
            Add Post
          </button>
        </p>

        <div className="modal fade bg-danger" id="mymodal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title">
                  <h4 className="font-weight-bold">Create or Update Post</h4>
                </div>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="userId"
                      value={userId}
                      onChange={handleChange}
                    >
                      {users.map((user) => {
                        return (
                          <option key={user.id} value={user.id}>
                            {user.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Title: </label> <br />
                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      value={title}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label> Body :</label>
                    <br />
                    <textarea
                      className="form-control"
                      name="body"
                      value={body}
                      rows={5}
                      cols={25}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                  <button className="btn btn-danger ml-3" data-dismiss="modal">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {posts.map((post) => {
            return (
              <div
                className="card col-md-5 mx-auto mx-md-9 my-4 card-data"
                style={{ width: "400px" }}
              >
                <div className="card-body">
                  <div className="card-title">
                    <b>Card:</b>
                    {post.id}
                  </div>
                  <h3>{post.title}</h3>
                  <h5>
                    <b>Body</b>
                  </h5>
                  <p className="text-muted">{post.body}</p>
                </div>
                <div className="card-footer row">
                  <button
                    className="btn btn-danger col-lg-3 my-2 mx-auto"
                    onClick={() => deletePost(post.id)}
                  >
                    Delete
                  </button>
                  {/* <button
                    className="btn btn-outline-info col-lg-3 my-2 mx-auto"
                    data-toggle="modal"
                    data-target="#mymodal"
                    onClick={() => updateform(post)}
                  >
                    Update
                  </button>  */}
                  <Link
                    to={`/posts/${post.userId}`}
                    className="btn col-lg-3 my-2 btn-outline-dark mx-auto"
                  >
                    Comments
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
