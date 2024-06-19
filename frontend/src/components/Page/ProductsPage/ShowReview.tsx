import { AiOutlineLike, AiTwotoneDislike } from "react-icons/ai";

const ShowReview = () => {
  return (
    <div className="w-full mt-7">
      <div className="border rounded">
        <div className="flex items-center  gap-2 p-2">
          <h1 className="size-12 rounded-full border"></h1>
          <div>
            <h1>Md Rakib Islam</h1>
            <h1>Rating</h1>
          </div>
        </div>
        <hr />
        <div>
          <p className="px-3 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            error?
          </p>
          <div className="flex justify-end  gap-3 pr-2 py-1">
            <button>
              <AiOutlineLike className="size-5" />
            </button>
            <button>
              <AiTwotoneDislike className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
