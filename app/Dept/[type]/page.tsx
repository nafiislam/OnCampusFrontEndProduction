import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/authOptions/authOptions";
import POST from "@/server_actions/POST";
import AllPosts from "@/components/AllPosts";

const Dept = async ({ params }: { params: { type: string } }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <>
        <div>Not authorized</div>
      </>
    );
  }
  const res = await POST("post/getPosts/Dept/", {
    type: params.type,
  });
  if (res) {
    const { posts, user } = res;
    return (
      <>
        {res ? <AllPosts posts={posts} user={user} type={params.type} /> : ""}
      </>
    );
  } else {
    return <div>Post not found</div>;
  }
};

export default Dept;
