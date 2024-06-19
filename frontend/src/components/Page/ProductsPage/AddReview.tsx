"use client";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import {
  Rating,
  RoundedStar,
} from "@smastrom/react-rating";

const includedShapesStyles = [
  RoundedStar,
].map((itemShapes) => ({
  itemShapes,
  activeFillColor: "#f59e0b",
  inactiveFillColor: "#ffedd5",
}));

const AddReview = () => {
  const [rating, setRating] = useState<number>(0);
  return (
    <form className="space-y-3">
      <h1 className="text-xl">Add a review</h1>
      <h1>
        Your email address will not be published. Required fields are marked *
      </h1>
      <div>
        <h1 className="mb-1">Your rating</h1>
        {includedShapesStyles.map((itemStyles, index) => (
          <Rating
            style={{maxWidth:100}}
            key={`shape_${index}`}
            value={rating}
            onChange={setRating}
            itemStyles={itemStyles}
          />
        ))}
      </div>
      <div className="w-full grid grid-cols-6 grid-rows-2 gap-3">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="w-full col-span-3 row-span-1 px-3 py-2 rounded border outline-none focus:border focus:border-[#11569F]"
        />

        <textarea
          name="message"
          id="message"
          placeholder="Write your review here"
          className="col-span-3 row-span-2 px-3 py-2 rounded border outline-none focus:border focus:border-[#11569F]"
        ></textarea>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full col-span-3 row-span-1 px-3 py-2 rounded border outline-none focus:border focus:border-[#11569F]"
        />
      </div>
      <button className="px-8 py-2 bg-gradient-to-t bg-[#17273B] from-[#105CAA] text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default AddReview;
