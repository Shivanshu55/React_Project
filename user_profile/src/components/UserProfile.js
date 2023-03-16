import { useContext } from "react";
import React from "react";
import { UserContext } from "./App";

const UserProfile = () => {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <>
      <h1 id="name">Name:- {user.name}</h1>
      <h1 id="age">Age:- {user.age}</h1>
    </>
  );
};

export { UserProfile };
