import axios from "axios";
import React from "react";

export const getLandingDetails = async () => {
  const response = await axios.get("/api/landing");
  const responseData = await response.data;
  return responseData;
};
