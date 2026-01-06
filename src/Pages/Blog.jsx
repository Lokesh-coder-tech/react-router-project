import React from 'react';
import react from '../assets/react.jpg'
import startup from '../assets/startup.jpg'
import uiuxtrends from '../assets/uiuxtrends.jpg'
import remote from '../assets/remote.jpg'

const Blog = () => {
  const posts = [
    { title: "The Future of React", date: "Jan 04, 2026", cat: "Tech", details: "React in 2026 focuses on performance, server components, and a smoother developer experience.", img: react },
    { title: "Scaling Your Startup", date: "Dec 28, 2025", cat: "Business", details: "Learn how smart technology, cloud tools, and data-driven strategies help startups grow efficiently without compromising quality.", img:startup  },
    { title: "UI Design Trends 2026", date: "Dec 15, 2025", cat: "Design", details: "Minimal layouts, smooth animations, and accessibility-first design are shaping modern UI experiences in 2026.", img:uiuxtrends  },
    { title: "Remote Work Culture", date: "Nov 30, 2025", cat: "Lifestyle", details: "Remote work improves flexibility, productivity, and global collaboration, becoming the new standard for modern teams.", img:remote  },
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
              <div className="blog-img-placeholder"><img src={post.img} alt={post.title} /></div>
              <div className="blog-content">
                <span className="meta">{post.date} | {post.cat}</span>
                <h3>{post.title}</h3>
                <p>{post.details}</p>
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