import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [lposts, setlPosts] = useState([]);
  useEffect(() => {
    const fetchedposts = async () => {
      const request = await fetch(
        "https://myfacebook1-df16b-default-rtdb.firebaseio.com/posts.json"
      );
      const response = await request.json();
      const loadedposts = [];
      for (const key in response) {
        loadedposts.push({
          id: key,
          name: response[key].name,
          comment: response[key].comment,
          logo: response[key].logo,
          like: response[key].like,
          share: response[key].share,
          image: response[key].image,
          date: response[key].date,
          message: response[key].message,
        });
      }
      setlPosts(loadedposts);
    };
    fetchedposts();
  }, []);
  return (
    <div>
      {lposts.map((user) => (
        <Post
          key={user.id}
          name={user.name}
          comment={user.comment}
          message={user.message}
          logo={user.logo}
          share={user.share}
          date={user.date}
          like={user.like}
          image={user.image}
        />
      ))}
    </div>
  );
};

export default Posts;
