'use client';

import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';

interface TableOfContentsProps {
  headings: Array<{
    id: string;
    text: string;
    level: number;
  }>;
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  // Filter out FAQ questions (H3 headings that come after an FAQ H2 heading)
  const filteredHeadings = useMemo(() => {
    if (!headings || headings.length === 0) return [];
    
    // Debug: Log all headings
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.log('🔍 All headings:', headings.map(h => ({ level: h.level, text: h.text })));
    }
    
    // First, identify which H2 headings are FAQ sections
    const faqSectionIndices = new Set<number>();
    
    headings.forEach((heading, index) => {
      if (heading.level === 2) {
        const headingText = heading.text.toLowerCase().trim();
        // Check for various FAQ patterns - be very explicit
        const isFAQ = headingText === 'frequently asked questions' ||
                     headingText.includes('frequently asked questions') || 
                     headingText.includes('faq') ||
                     headingText.startsWith('frequently asked') ||
                     (headingText.includes('question') && headingText.includes('frequently'));
        
        if (isFAQ) {
          faqSectionIndices.add(index);
          if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
            console.log(`✅ Found FAQ section at index ${index}: "${heading.text}"`);
          }
        }
      }
    });
    
    // Now filter: keep FAQ H2 headings, but remove H3 headings that come after FAQ H2
    const filtered = headings.filter((heading, index) => {
      // Keep all H2 headings (including FAQ sections)
      if (heading.level === 2) {
        return true;
      }
      
      // For H3 headings, check if they come after an FAQ section
      if (heading.level === 3) {
        // Find the most recent H2 heading before this H3
        let foundFAQ = false;
        for (let i = index - 1; i >= 0; i--) {
          if (headings[i].level === 2) {
            // If the previous H2 is an FAQ section, filter out this H3
            if (faqSectionIndices.has(i)) {
              foundFAQ = true;
              if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
                console.log(`❌ Filtering out H3 at index ${index}: "${heading.text}" (comes after FAQ section)`);
              }
            }
            break;
          }
        }
        // Filter out H3 if it comes after FAQ section
        if (foundFAQ) {
          return false;
        }
      }
      
      // Keep all other headings (H1, etc.)
      return true;
    });
    
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.log('📋 Filtered headings:', filtered.map(h => ({ level: h.level, text: h.text })));
    }
    
    return filtered;
  }, [headings]);

  useEffect(() => {
    if (!filteredHeadings || filteredHeadings.length === 0) return;

    const observerOptions = {
      rootMargin: '-20% 0% -70% 0%',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    filteredHeadings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Set first heading as active by default
    if (filteredHeadings.length > 0) {
      setActiveId(filteredHeadings[0].id);
    }

    return () => {
      filteredHeadings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [filteredHeadings]);

  // Early return after all hooks
  if (!headings || headings.length === 0 || filteredHeadings.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without scrolling
      window.history.pushState(null, '', `#${id}`);
      setActiveId(id);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 sticky top-8 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Index</h3>
      <nav className="space-y-1">
        {filteredHeadings.map((heading) => {
          const isActive = activeId === heading.id;
          const isH2 = heading.level === 2;
          const isH3 = heading.level === 3;

          return (
            <Link
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`block text-sm transition-all duration-200 relative pl-3 py-1.5 rounded ${
                isActive
                  ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-600'
                  : isH2
                  ? 'text-gray-800 hover:text-[#C9A34A] hover:bg-gray-50'
                  : isH3
                  ? 'text-gray-600 hover:text-[#C9A34A] hover:bg-gray-50 ml-4'
                  : 'text-gray-500 hover:text-[#C9A34A] hover:bg-gray-50 ml-8'
              }`}
            >
              {heading.text}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
