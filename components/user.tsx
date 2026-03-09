'use client';
import React from "react";
import { UserProps } from "@/types/types";

const User: React.FC<UserProps> = ({ userName, userType }) => {
  return (
    <div>
      <h3> {userName} </h3>
      <p>User Type: {userType}</p>
    </div>
  );
};
export default User;