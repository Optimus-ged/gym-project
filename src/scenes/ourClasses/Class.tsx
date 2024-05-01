import { ClassType } from "@/shared/types";

type Props = {
  data: ClassType;
};

const Class = ({ data }: Props) => {
  return (
    <li className="relative mr-5 inline-block h-[350px] w-[450px]">
      <div
        className="absolute flex h-full w-full flex-col items-center 
      justify-center whitespace-normal bg-primary-500 p-5 text-center  
      text-white opacity-0 transition duration-500 hover:opacity-80"
      >
        <p className="text-2xl">{data.name}</p>
        <p className="mt-5">{data.description}</p>
      </div>
      <img className="h-full w-full" src={data.image} alt={`${data.image}`} />
    </li>
  );
};

export default Class;
