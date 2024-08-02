import React from "react";
import Post from "./Post";

const posts = [
  // Example posts
  {
    id: 1,
    content:
      "Hey guys, I interviewed at Oracle and my first 2 round of interview went well...",
    time: "1h",
    university: "Kalinga institute of industrial technology",
  },
  {
    id: 2,
    content:
      "HI Everyone. I hold a Master Degree in Biotech and actively looking for jobs in pharma...",
    time: "4h",
    university: "Krista jayanti college",
  },
  // Add more posts as needed
];

const Content = () => {
  return (
    <main className="flex-1 p-4">
      {posts.map((post) => (
        <Post
          key={post.id}
          content={post.content}
          time={post.time}
          university={post.university}
        />
      ))}
    </main>
  );
};

export default Content;
