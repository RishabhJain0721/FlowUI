import react from "react";

const Box = (props) => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div
      onClick={handleClick}
      className=" w-36 h-10 px-3 py-2 m-6 bg-gray-200 rounded-md border border-gray-400 text-center"
    >
      {props.name}
    </div>
  );
};

export default Box;
