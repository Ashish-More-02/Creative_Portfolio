import React from "react";

const ReviewCard = () => {
  return (
    <div className="h-[350px] w-[260px] bg-slate-400 rounded-xl p-4 m-4">
      {/* user profile */}
      <div className="flex ">
        <div className="bg-slate-100 rounded-full size-16 mr-6"></div>
        <p>Jhon doe</p>
      </div>
      <div className="mt-6">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        animi laboriosam qui facere deleniti ratione sequi in cumque illum
        maxime sit esse libero placeat earum, quibusdam nesciunt suscipit
        laudantium quisquam."
      </div>
    </div>
  );
};

export default ReviewCard;
