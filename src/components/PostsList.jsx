import Post from "./Post";

import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  // function addPostHandler(postData) {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   // setPosts((existingPosts) => [postData, ...existingPosts]);

  //   console.log(posts);
  // }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => {
            return (
              <Post
                key={Math.random()}
                id={post.id}
                author={post.author}
                body={post.body}
              />
            );
          })}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center" }}> No posts yet</div>
      )}
    </>
  );
}

export default PostList;
