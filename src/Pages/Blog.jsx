import React from 'react';

const Blog = () => {
  const posts = [
    { title: "The Future of React", date: "Jan 04, 2026", cat: "Tech" },
    { title: "Scaling Your Startup", date: "Dec 28, 2025", cat: "Business" },
    { title: "UI Design Trends 2026", date: "Dec 15, 2025", cat: "Design" },
    { title: "Remote Work Culture", date: "Nov 30, 2025", cat: "Lifestyle" },
  ];

  return (
    <div className="page blog-page">
      <header className="page-header">
        <div className="container">
          <h1>Our Blog</h1>
          <p>Insights, thoughts, and trends from our team.</p>
        </div>
      </header>

      <div className="container section">
        <div className="category-filter">
          <span className="active">All</span>
          <span>Tech</span>
          <span>Business</span>
          <span>Design</span>
        </div>

        <div className="grid-2">
          {posts.map((post, idx) => (
            <article key={idx} className="card blog-card">
              <div className="blog-img-placeholder"></div>
              <div className="blog-content">
                <span className="meta">{post.date} | {post.cat}</span>
                <h3>{post.title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                <button className="btn-link">Read More &rarr;</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;