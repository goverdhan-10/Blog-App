import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-16 mt-8 text-center bg-gray-50">
        <Container>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
              No Posts Found
            </h1>
            <p className="text-gray-600 text-lg">
              Login to explore and read amazing posts from our community.
            </p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8 bg-gray-50">
      <Container>
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Featured Posts
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <div key={post.$id} className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
