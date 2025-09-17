import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center ">
      <Loader2 className=" animate-spin w-6 h-6 mr-2 " />
      <span className=" text-h4-clamp font-medium "> Please Wait!! </span>
    </div>
  );
};

export default Loader;
