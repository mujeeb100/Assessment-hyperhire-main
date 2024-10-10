"use-client";

import React, { useEffect, useState } from "react";
import Content from "./Content";
import Slider from "./Slider";
import Metrics from "./Metrics";
import { getLandingDetails } from "@/service/landingService";

function Landing() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const responseData = await getLandingDetails();
    if (responseData) {
      setData(responseData);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="py-8">
      <article className="grid grid-cols-1 lg:grid-cols-2 lg:px-36">
        <Content data={data} />
        <Slider />
      </article>
      <div className="lg:ps-36 py-10">
        <Metrics />
      </div>
    </section>
  );
}

export default Landing;
