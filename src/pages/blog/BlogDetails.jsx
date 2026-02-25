import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { blogs } from "./data";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // find blog by id
  const blog = blogs.find((b) => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-gray-600" style={
        {
          fontFamily:'"playfair display",serif'
        }
      }>
        Blog not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative h-100 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/blog")}
          className="absolute top-8 left-8 bg-white text-[#172e4e] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Blog Title */}
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" 
          style={{
             fontFamily:'"playfair display",serif'
          }}>{blog.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-2"
            style={{
              fontFamily:'"Poppins",sans-serif'
            }}>
              <User size={16} />
              {blog.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {blog.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg">
          <p className="text-xl text-gray-700 leading-relaxed mb-6"
          style={{
            fontFamily:'"Poppins",sans-serif'
          }}>
            {blog.excerpt}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">{blog.content}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{blog.content}</p>
          <p className="text-gray-600 leading-relaxed">{blog.content}</p>
        </div>

        <button
          onClick={() => navigate("/blog")}
          className="mt-12 bg-[#172e4e] text-white px-8 py-3 rounded-lg hover:bg-[#172e4e] transition-all duration-300 flex items-center gap-2" style={
            {
              fontFamily:'"playfair display",serif'
            }
          }
        >
          <ArrowLeft size={20} />
          Back to All Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
