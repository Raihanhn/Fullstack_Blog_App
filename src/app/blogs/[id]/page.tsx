import Comments from "@/components/Comments";
import React from "react";

const BlogDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Post one</h1>
      <p className="">Written by: john doe</p>
      <div className="mt-4 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eos
        voluptates odio sed, dicta magnam numquam iure reiciendis esse ipsam?
      </div>
      <Comments />
    </div>
  );
};

export default BlogDetailPage;
