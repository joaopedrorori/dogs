import React from "react";
import useFetch from "../../Hooks/useFetch.jsx";
import { PHOTO_GET } from "../../api.jsx";
import Error from "../Helper/Error.jsx";
import Loading from "../Helper/Loading.jsx";
import PhotoContent from "../Photo/PhotoContent.jsx";
import styles from "./FeedModal.module.css";

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
