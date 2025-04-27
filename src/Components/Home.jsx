import React from "react";
import Feed from "./Feed/Feed.jsx";
import Loading from "./Helper/Loading.jsx";
import Head from "./Helper/Head.jsx";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Posts" description="Dogs's feed" />
      <Feed />
    </section>
  );
};

export default Home;
