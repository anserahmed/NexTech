import React from "react";

export default function ServiceCard(props) {
  return (
    <div class="container flex">
      {/* card  */}
      <div class="card ">
        {/* front  */}
        <div class="front backdrop-blur-sm ">
          {/* img  */}
          <div className="">
            <img src={props.frontpic} alt="" />
          </div>
          {/* para  */}
          <p class="front-heading text-black flex flex-wrap justify-center font-bold text-2xl">
            {props.title}
          </p>
        </div>

        {/* back  */}
        <div class="p-6 back flex justify-between items-start backdrop-blur-sm">
          {/* para  */}
          <p>{props.bio}</p>
          {/* button  */}
          <button className="hover:animate-ping px-3 py-1 rounded-md  transition ease-in  text-whiteborder border-white border  bg-transparent">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
