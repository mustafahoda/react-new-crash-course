import { Outlet } from "react-router-dom";
import { useState } from "react";

import PostList from "../components/PostsList";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
    console.log(modalIsVisible);
  }

  return (
    <>
      <Outlet></Outlet>

      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();

  return resData.posts;
}
