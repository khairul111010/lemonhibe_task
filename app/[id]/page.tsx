"use client";

import { client } from "@/lib/ApoloClient";
import { GET_SINGLE_CONFERENCE } from "@/lib/Queries";
import Image from "next/image";
import { useState } from "react";

const Page = ({ params }: any) => {
  const [data, setData] = useState(null);
  const [sidebar, setSidebar] = useState([
    { name: "Organizer", isActive: true },
    { name: "Speakers", isActive: false },
    { name: "Schedule", isActive: false },
    { name: "Sponsors", isActive: false },
  ]);

  client
    .query({
      query: GET_SINGLE_CONFERENCE,
      variables: { id: params.id },
    })
    .then((result) => setData(result.data.conference));

  console.log(data);

  const handleActive = (name: string) => {
    setSidebar((prevState) => {
      // Create a copy of the state to avoid mutation
      const updatedSidebar = [...prevState];

      // Find the index of the clicked item
      const clickedItemIndex = updatedSidebar.findIndex(
        (item) => item.name === name
      );

      // If the item is found, toggle its isActive flag
      if (clickedItemIndex !== -1) {
        updatedSidebar[clickedItemIndex].isActive =
          !updatedSidebar[clickedItemIndex].isActive;
      }

      // Set all other items to inactive
      updatedSidebar.forEach((item) => (item.isActive = false));

      // Set the clicked item to active again (optional, depending on desired behavior)
      if (clickedItemIndex !== -1) {
        updatedSidebar[clickedItemIndex].isActive = true;
      }

      return updatedSidebar;
    });
  };

  return (
    <div className="container">
      <div className="md:text-5xl text-primary font-bold md:mt-24 mt-12 text-2xl">
        {data?.name}
      </div>
      <div className="md:text-xl text-base font-normal text-primary/80 mt-4">
        {data?.slogan}
      </div>

      <div className="hidden md:grid grid-cols-4 my-14 gap-12">
        <div className="col-span-1 flex flex-col gap-8">
          {sidebar.map((item: any, index: number) => {
            return (
              <div
                key={index}
                onClick={() => handleActive(item.name)}
                className={`cursor-pointer border rounded-lg flex items-center gap-10 p-2 group hover:bg-secondary hover:shadow ${
                  item.isActive ? "bg-secondary shadow" : ""
                }`}
              >
                <div
                  className={`p-4 rounded-[3px] ${
                    item.isActive ? "bg-white" : "bg-secondary/10"
                  } group-hover:bg-white w-fit`}
                >
                  <Image
                    src={"/updown.svg"}
                    alt="Up down"
                    width={25}
                    height={22}
                  />
                </div>
                <div
                  className={`font-bold text-xl ${
                    item.isActive ? "text-white" : "text-primary"
                  }  group-hover:text-white`}
                >
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-span-3 bg-[#F9FAFB] p-14 rounded-lg">
          {sidebar[0].name === "Organizer" && sidebar[0].isActive && (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
