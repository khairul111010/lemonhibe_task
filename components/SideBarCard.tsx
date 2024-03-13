"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { FC } from "react";

type PositionProps = {
  id: number;
  item: any;
  onSelect: (res: any) => void;
};
const SideBarCard: FC<PositionProps> = ({ id, item, onSelect }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={`cursor-pointer border rounded-lg flex items-center gap-10 p-2 group hover:bg-secondary hover:shadow ${
        item.isActive ? "bg-secondary shadow" : ""
      }`}
    >
      <div
        className={`p-4 rounded-[3px] ${
          item.isActive ? "bg-white" : "bg-secondary/10"
        } group-hover:bg-white w-fit`}
      >
        <Image src={"/updown.svg"} alt="Up down" width={25} height={22} />
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
};

export default SideBarCard;
