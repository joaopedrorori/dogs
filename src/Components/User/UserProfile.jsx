import React from "react";
import Feed from "../Feed/Feed.jsx";
import { useParams } from "react-router-dom";
import Head from "../Helper/Head.jsx";

const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className="container mainSection">
      <Head title={user} description={`${user}'s profile`} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
