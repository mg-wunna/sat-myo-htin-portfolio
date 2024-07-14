import { BsStarFill } from "react-icons/bs";
import { MdOutlineArrowBackIos } from "react-icons/md";

function ReviewCard() {
  return (
    <div className="rounded-xl border-2 border-solid border-black p-4">
      <p className="font-bold text-red-500">Name</p>
      <div className="mb-3 mt-1 flex">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill className="text-gray-200" />
        <BsStarFill className="text-gray-200" />
      </div>
      <p className="text-xs text-gray-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta debitis
        nostrum eaque doloremque blanditiis, veritatis fugit. Nostrum saepe
        consectetur qui!
      </p>
    </div>
  );
}

function Reviews() {
  return (
    <>
      <div id="reviews" className="relative -top-20" />
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-gray-600">Reviews</p>
            <h1 className="text-3xl font-bold text-red-500">From You</h1>
          </div>
          <div className="my-2 flex gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
              <MdOutlineArrowBackIos className="h-4 w-4" />
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
              <MdOutlineArrowBackIos className="h-4 w-4 rotate-180" />
            </div>
          </div>
        </div>
        <div className="my-4 flex gap-4">
          <ReviewCard />
          <div className="hidden sm:block">
            <ReviewCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
