import React, {useState} from "react";
import {Container, PostCard} from '../components'
import appwriteService from "../appwrite/config"
import { useEffect } from "react";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
      appwriteService.getPosts([]).then((posts) => {
        if (posts) setPosts(posts.documents);
      });
    }, []);
  
    return (
      <div className="w-full py-8 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <div key={post.$id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
  export default AllPosts
  