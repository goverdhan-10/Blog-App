import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block max-w-xs mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
        {/* Image Section */}
        <div className="w-full h-56 sm:h-64 lg:h-72 overflow-hidden rounded-t-xl">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 truncate hover:text-blue-600 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-2">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
