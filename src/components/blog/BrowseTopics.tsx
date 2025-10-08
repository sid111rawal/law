import Link from 'next/link';

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  color?: string;
  postCount: number;
}

interface BrowseTopicsProps {
  categories: Category[];
}

export default function BrowseTopics({ categories }: BrowseTopicsProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-6">
      <h3 className="text-lg font-serif font-bold text-slate mb-4">Browse by Topics</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/resources/blogs/category/${category.slug.current}`}
            className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 hover:bg-[#C9A34A] hover:text-white transition-colors duration-200 text-sm font-medium text-gray-700"
          >
            {category.title}
            <span className="ml-2 text-xs opacity-70">({category.postCount})</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
