import { MessageCircle, ThumbsUp } from "lucide-react";


const PopularBlogs = () => {
    const blogs = [
        {
            title:"My amazing blog title 1",
            name: "Jordan",
            likes: 142,
            comment: 44
        },
        {
            title: "My amazing blog title 2",
            name: "Jhon",
            likes: 132,
            comment: 30
        },
        {
            title: "My amazing blog title 3",
            name: "Riaj",
            likes: 180,
            comment: 53
        },
        {
            title: "My amazing blog title 4",
            name: "Sadia",
            likes: 156,
            comment: 47
        }
    ]
    return (
        <div className="bg-white p-4 w-[23rem] mt-4 border ml-5 rounded">
            <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>

            <ul>
                {blogs.map((blog, index)=>(
                    <li key={index} className="mb-4">
                        <div className="flex justify-between items-center">
                            <span className="font-bold mb-2">{blog.title}</span>
                        </div>
                        <span className="text-gray-600">Published By {blog.name}</span>
                        <div className="flex items-center mt-2">
                            <ThumbsUp size={16} />
                            <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>

                            
                            <MessageCircle size={16} />
                            <span className="text-gray-500 mr-2 ml-2">{blog.comment}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopularBlogs;