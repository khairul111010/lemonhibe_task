"use client";

import { client } from "@/lib/ApoloClient";
import ConferenceCard from "./ConferenceCard";
import { GET_CONFERENCE } from "@/lib/Queries";
import { useEffect, useState } from "react";

const Conference = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    client
      .query({
        query: GET_CONFERENCE,
      })
      .then((result) => setList(result.data.conferences));
  }, []);

  return (
    <section className="mt-44 mb-24 max-w-[1088px] mx-auto flex flex-col items-center justify-center">
      <div className="md:text-5xl text-2xl text-primary font-bold pb-8">
        Conferences{" "}
      </div>
      <div className="my-8">
        {list.length > 0 &&
          list.map((item: any, index: number) => {
            return <ConferenceCard align={index + 1} key={index} item={item} />;
          })}
      </div>
    </section>
  );
};

export default Conference;
