import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Accessorizing: A Complete Guide',
      excerpt: 'Learn how to elevate your outfit with the perfect accessories. From statement pieces to subtle accents, we cover everything you need to know.',
      image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80',
      date: '2024-02-20',
      readTime: '5 min read',
      category: 'Style Guide',
    },
    {
      id: 2,
      title: 'Behind the Scenes: Creating Our Crystal Collection',
      excerpt: 'Take a peek into our workshop and discover the intricate process of hand-placing crystals on our signature socks.',
      image: 'https://images.unsplash.com/photo-1459501462159-97d5bded1416?auto=format&fit=crop&q=80',
      date: '2024-02-15',
      readTime: '8 min read',
      category: 'Behind the Scenes',
    },
    // Add more blog posts...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Featured Post */}
      <div className="mb-16">
        <div className="relative h-[60vh] rounded-xl overflow-hidden">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-3xl">
                <div className="flex items-center text-white mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h1>
                <p className="text-gray-200 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-white space-x-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
          <article key={post.id} className="group">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-gray-600">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-gray-500 space-x-4 mb-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  {post.readTime}
                </div>
              </div>
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-black hover:text-gray-600"
              >
                Read More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 bg-gray-100 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our blog for the latest fashion tips, behind-the-scenes content, and exclusive offers.
        </p>
        <form className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-l-lg border-y border-l focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button className="bg-black text-white px-6 py-2 rounded-r-lg hover:bg-gray-800">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blog;