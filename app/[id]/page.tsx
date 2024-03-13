"use client";

import { client } from "@/lib/ApoloClient";
import { GET_SINGLE_CONFERENCE } from "@/lib/Queries";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SideBarCard = dynamic(() => import("@/components/SideBarCard"), {
  ssr: false,
});

const Page = ({ params }: any) => {
  const [data, setData] = useState(null);
  const [sidebar, setSidebar] = useState([
    { id: 1, name: "Organizer", isActive: true },
    { id: 2, name: "Speakers", isActive: false },
    { id: 3, name: "Schedule", isActive: false },
    { id: 4, name: "Sponsors", isActive: false },
  ]);

  useEffect(() => {
    client
      .query({
        query: GET_SINGLE_CONFERENCE,
        variables: { id: params.id },
      })
      .then((result) => setData(result.data.conference));
  }, [params]);

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

  const getPosition = (id: number) =>
    sidebar.findIndex((position) => position.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setSidebar((sidebar) => {
      const originalPos = getPosition(active.id);
      const newPos = getPosition(over.id);
      return arrayMove(sidebar, originalPos, newPos);
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
        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          <div className="col-span-1 flex flex-col gap-8">
            <SortableContext
              items={sidebar}
              strategy={verticalListSortingStrategy}
            >
              {sidebar.map((item: any) => {
                return (
                  <SideBarCard
                    id={item.id}
                    item={item}
                    key={item.id}
                    onSelect={(res: any) => console.log("hello")}
                  />
                );
              })}
            </SortableContext>
          </div>
        </DndContext>

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
