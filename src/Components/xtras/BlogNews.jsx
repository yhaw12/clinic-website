import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import branchOpening from '../../assests/blog/branch.jpg';
import staffAppreciation from '../../assests/blog/staff.jpg';
import healthFair from '../../assests/blog/health-fair.jpg';
import diagnosticEquipment from '../../assests/blog/diagnostic.jpg';
import outreachProgram from '../../assests/blog/outreach.jpg';

const BlogNews = () => {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const dragging = useRef(false);

  const posts = [
    { id: 1, date: '15 Jul 24', title: 'Health Outreach Program', image: outreachProgram },
    { id: 2, date: '19 Dec 24', title: 'New Diagnostic Equipment', image: diagnosticEquipment },
    { id: 3, date: '09 Dec 24', title: 'Community Health Fair', image: healthFair },
    { id: 4, date: '10 Oct 24', title: 'Staff Appreciation Day', image: staffAppreciation },
    { id: 5, date: '05 Sep 24', title: 'New Branch Opening', image: branchOpening },
  ];

  const total = posts.length;

  const desktopSlice = () => {
    const slice = [];
    for (let i = 0; i < 4; i++) {
      slice.push(posts[(current + i) % total]);
    }
    return slice;
  };

  const handlePrevDesktop = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const handleNextDesktop = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const handleMouseDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const diff = startX.current - e.clientX;
    if (Math.abs(diff) > 50) {
      setCurrent((prev) => (diff > 0 ? (prev + 1) % total : (prev - 1 + total) % total));
      dragging.current = false;
    }
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const diff = startX.current - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      setCurrent((prev) => (diff > 0 ? (prev + 1) % total : (prev - 1 + total) % total));
      startX.current = e.touches[0].clientX;
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold text-[#0FE6CB] mb-6 px-8 lg:px-16">
        Latest News & Blogs
      </h2>

      <section className="w-full bg-[#d9fbf7] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative">
          {/* Desktop Prev Button */}
          <button
            onClick={handlePrevDesktop}
            className="hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 hover:opacity-80 z-10"
            aria-label="Previous posts"
          >
            <ChevronLeft className="m-auto h-8 w-8 text-gray-800" />
          </button>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
            {desktopSlice().map((post) => (
              <article
                key={post.id}
                className="flex flex-col bg-white h-full overflow-hidden cursor-pointer"
              >
                <div className="h-56 w-full overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between p-5 bg-[#d9fbf7]">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Desktop Next Button */}
          <button
            onClick={handleNextDesktop}
            className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 hover:opacity-80 z-10"
            aria-label="Next posts"
          >
            <ChevronRight className="m-auto h-8 w-8 text-gray-800" />
          </button>

          {/* Mobile Carousel */}
          <div
            className="lg:hidden relative flex items-center justify-center overflow-hidden select-none cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {[posts[(current - 1 + total) % total], posts[current], posts[(current + 1) % total]].map((post, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 ${
                  idx === 1 ? 'w-3/4 scale-100' : 'w-1/4 scale-90 opacity-50'
                } mx-2 overflow-hidden transition-all duration-500 ease-out`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-[#d9fbf7]">
                  <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                  <h3 className="text-base font-medium text-gray-800 line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogNews;
