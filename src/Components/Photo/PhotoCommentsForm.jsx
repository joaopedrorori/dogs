import React from "react";
import Sent from "../../Assets/enviar.svg?react";
import useFetch from "../../Hooks/useFetch.jsx";
import Error from "../Helper/Error.jsx";
import { COMMENT_POST } from "../../api.jsx";
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ single, id, setComments }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comment here..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.btn}>
        <Sent />
      </button>
      <Error error={error && "Fill in with a value before send."} />
    </form>
  );
};

export default PhotoCommentsForm;
