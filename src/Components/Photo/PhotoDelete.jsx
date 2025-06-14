import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleClick() {
    const confrim = window.confirm(
      "Are you sure that you want to delete this post?"
    );
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) {
        navigate("/");
        window.location.reload();
      }
    }
  }
  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          {" "}
          Deleting Post...{" "}
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          {" "}
          Delete Post{" "}
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
