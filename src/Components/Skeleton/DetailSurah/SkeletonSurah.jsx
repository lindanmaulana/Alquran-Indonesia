import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonSurah = ({ number }) => {
  return (
      <div className="h-full w-96">
        <Skeleton className="w-full h-6" baseColor="#343A40" highlightColor="" count={number} />
      </div>
  );
};

export default SkeletonSurah;
