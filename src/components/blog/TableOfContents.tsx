import Link from 'next/link';

interface TableOfContentsProps {
  headings: Array<{
    id: string;
    text: string;
    level: number;
  }>;
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (!headings || headings.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <Link
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm hover:text-[#C9A34A] transition-colors ${
              heading.level === 1 
                ? 'font-medium text-gray-900' 
                : heading.level === 2 
                ? 'text-gray-700 ml-4' 
                : 'text-gray-600 ml-8'
            }`}
          >
            {heading.text}
          </Link>
        ))}
      </nav>
    </div>
  );
}
