import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Clock } from "lucide-react";
import { blogs } from "./data";

const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white"
    >
      <style jsx>{
        `              @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap');
`}
      </style>

      {/* Banner Section */}
      <div className="relative h-126  overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6077091/pexels-photo-6077091.jpeg"
          alt="Law related image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in " style={
              {
                fontFamily:'"Playfair display",serif'
              }
            }>
              Our Blog
            </h1>
            {/* <p className="text-xl md:text-2xl opacity-90" 
            style={
              {
                fontFamily:'"Poppins",sans-serif'
              }
            }>
              Discover stories, insights, and the art of fine spirits
            </p> */}
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              onClick={() => navigate(`/blog/${blog.id}`)}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Image */}
              <div className="relative h-66 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#172e4e] mb-3 group-hover:text-[#172e4e] transition-colors duration-300" style={

                {
                  fontFamily:'"playfair display",serif'
                }
                }>
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2" 
                style={
                  {
                    fontFamily:'"Poppins",sans-serif'
                  }
                }>
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {blog.readTime}
                  </span>
                </div>

                <div className="mt-4 flex items-center text-[#172e4e] font-semibold group-hover:gap-2 transition-all duration-300"
                style={{
                  fontFamily:'"playfair display",serif'
                }}>
                  Read More
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Blog;
