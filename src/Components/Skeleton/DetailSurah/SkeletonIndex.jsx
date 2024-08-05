import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonDetailSurah = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-screen gap-2 bg-bgPrimary">
      <div className="w-full ">
        <Skeleton baseColor="#343A40" className="w-full h-12 mb-2" count={2} />
      </div>
      <div className="w-3/12">
        <Skeleton baseColor="#343A40" className="w-full h-16" />
      </div>
    </div>
  );
};
export default SkeletonDetailSurah;
