import React from "react";
import styles from "./PhotoContent.module.css";
import { Link } from "react-router-dom";
import PhotoComents from "./PhotoComents";

const PhotoContent = ({ data }) => {
  const { photo, coments } = data;
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p>
            <Link to={`/profile/${photo.author}`}>@{`${photo.author}`}</Link>
            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            {photo.idade >= 1 ? (
              <li>{photo.idade} yo</li>
            ) : (
              <li>{photo.idade} mon</li>
            )}
          </ul>
        </div>
      </div>
      <PhotoComents id={photo.id} comments={photo.comments} />
    </div>
  );
};

export default PhotoContent;
