import React from "react";
import UserHeader from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import UserContext from "../../UserContext.jsx";
import NotFound from "../NotFound.jsx";
import Head from "../Helper/Head.jsx";

const User = () => {
  const { data } = React.useContext(UserContext);
  console.log(data);

  return (
    <section className="container">
      <Head title={`${data.username}'s space`} description="User's profile " />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
