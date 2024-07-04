import "./BlogComments.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function BlogComments({ posts }) {
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const [comments, setComments] = useState(null);
  const { id } = useParams();

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/locations/${id}/comments`);
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  //   function getPostId() {
  //     for (const post of posts) {
  //       console.log(post);
  //       const postId = post.id;
  //       return postId;
  //     }
  //   }

  //   getPostId();
  //   console.log(postId);

  useEffect(() => {
    fetchComments();
  }, []);

  //   return (
  //     <>
  //       {comments
  //         .filter((comment) => comment.post_id === postId)})
  //         .map((comment) => {
  //           return (
  //             <article className="comments">
  //               <div className="comments__info">
  //                 <p className="comments__name"></p>
  //                 <p className="comments__date"></p>
  //               </div>
  //               <p className="comments__text"></p>
  //             </article>
  //           );
  //         })}
  //     </>
  //   );
}
