import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-12 bg-gray-50 min-h-screen">
            <Container>
                <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-3xl mx-auto">
                    {/* Image Section on top */}
                    <div className="w-full mb-6">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-2xl w-full h-full object-cover shadow-lg transition-transform transform hover:scale-105"
                        />
                    </div>

                    {/* Content Section below the image */}
                    <div className="space-y-6">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
                            
                        </div>
                        <div className="text-lg text-gray-800 space-y-4">
                            <div>{parse(post.content)}</div>
                        </div>

                        {isAuthor && (
                            <div className="flex justify-end space-x-4 mt-8">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500 hover:bg-green-600 text-white">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500 hover:bg-red-600 text-white" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    ) : (
        <div className="text-center py-8 text-gray-600">Loading...</div>
    );
}
