'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract all h2 and h3 headings from the blog content
    const elements = document.querySelectorAll('.blog-content h2, .blog-content h3');
    const items: TOCItem[] = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent || '',
      level: parseInt(element.tagName.charAt(1)),
    }));
    setHeadings(items);

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden lg:block">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h3 className="text-lg font-serif font-bold text-slate mb-4">Table of Contents</h3>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => handleClick(heading.id)}
                className={`text-left w-full transition-colors duration-200 text-sm ${
                  heading.level === 3 ? 'pl-4' : ''
                } ${
                  activeId === heading.id
                    ? 'text-[#C9A34A] font-semibold'
                    : 'text-gray-600 hover:text-[#C9A34A]'
                }`}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
