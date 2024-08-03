import { MdDisplaySettings } from "react-icons/md";

const JuzEl = () => {
  return (
    <div className="flex items-center justify-center w-full h-80">
      <h2 className="flex items-center gap-3 text-center text-primary">
        <span>Sorry, this page is still under maintenance</span>{" "}
        <MdDisplaySettings className="text-4xl" />
      </h2>
    </div>
  );
};

export default JuzEl;
