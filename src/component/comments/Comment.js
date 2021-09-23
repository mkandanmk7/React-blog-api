// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export const Comment = ({ match }) => {
//   console.log(match);

//   const url = "https://jsonplaceholder.typicode.com";
//   const [user, setUser] = useState([]);
//   const [post, setPost] = useState([]);
//   const [comments, setComments] = useState([]);

//   let fetchData = async () => {
//     const { data: userData } = await axios.get(
//       `${url}/users/${match.params.id}`
//     );
//     const { data: postData } = await axios.get(
//       `${url}/posts/${match.params.id}`
//     );
//     const { data: commentsData } = await axios.get(
//       `${url}/posts/${match.params.id}/comments`
//     );
//     setUser(userData);
//     setPost(postData);
//     setComments(commentsData);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       {/* userDatails container */}
//       <div className="card profile">
//         <div className="card-body">
//           <div className="usericon">
//             <i className="fas fa-user-secret"></i>
//           </div>
//           <div className="userdata">
//             <b>Name: </b> {user.name}
//           </div>
//           {/* <div className="userdata">
//             <b>city: </b> {user.address.city}
//           </div> */}
//           {/* <div className="userdata">
//             <b>Company : </b> {user.company.name}
//           </div> */}
//           {/* <div className="userdata">
//             <b>Company:</b>
//             {user.company ? user.company.name : ""}
//           </div> */}
//           <div className="userdata">
//             <b>Email:</b> {user.email}
//           </div>
//           <div className="userdata">
//             <b>Contact :</b> {user.phone}
//           </div>
//           <div className="userdata">
//             <b>website :</b> {user.website}
//           </div>
//         </div>
//       </div>
//       <div className="content container">
//         <h1>{post.title}</h1>
//         <p>{post.body}</p>
//       </div>
//       <div className="comments">
//         <h1 className="text-center">Comments</h1>
//         <div className="list-group">
//           {comments.map((com) => {
//             return (
//               <div key={com.id} className="list-group-item">
//                 <p>
//                   <b>Name:</b>
//                   <span className="ml-3">{com.name}</span>
//                 </p>
//                 <p>
//                   <b>Email:</b>
//                   <span className="ml-3">{com.email}</span>
//                 </p>
//                 <p>
//                   <b>Comment:</b>
//                   <span className="ml-3">{com.body}</span>
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";

export const Comment = () => {
  return (
    <div>
      <h2>WElcome</h2>
    </div>
  );
};
