import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonMainMembacaContent = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Skeleton />
      <div className="flex items-center w-full gap-10 py-5">
        <Skeleton count={2} />
      </div>
      <Skeleton />
    </div>
  );
};

export default SkeletonMainMembacaContent;
