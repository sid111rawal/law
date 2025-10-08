import Image from 'next/image';
import { urlFor } from '@/lib/sanity/imageBuilder';
import { PortableTextComponents } from '@portabletext/react';

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={450}
            className="rounded-xl w-full h-auto"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-600 mt-2 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    table: ({ value }) => {
      if (!value?.rows) return null;
      return (
        <div className="my-8 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              {value.rows.map((row: any, rowIndex: number) => (
                <tr key={rowIndex} className={rowIndex === 0 ? 'bg-gray-50' : ''}>
                  {row.cells?.map((cell: string, cellIndex: number) => {
                    const Tag = rowIndex === 0 ? 'th' : 'td';
                    return (
                      <Tag
                        key={cellIndex}
                        className="border border-gray-300 px-4 py-2 text-left"
                      >
                        {cell}
                      </Tag>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
    callout: ({ value }) => {
      const typeStyles = {
        info: 'bg-blue-50 border-blue-200 text-blue-800',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
        tip: 'bg-green-50 border-green-200 text-green-800',
        important: 'bg-red-50 border-red-200 text-red-800',
      };
      
      const icons = {
        info: 'ℹ️',
        warning: '⚠️',
        tip: '💡',
        important: '❗',
      };

      const style = typeStyles[value.type as keyof typeof typeStyles] || typeStyles.info;
      const icon = icons[value.type as keyof typeof icons] || icons.info;

      return (
        <div className={`my-6 border-l-4 rounded-lg p-4 ${style}`}>
          <div className="flex items-start space-x-3">
            <span className="text-2xl">{icon}</span>
            <div>
              {value.title && (
                <h4 className="font-semibold mb-2">{value.title}</h4>
              )}
              <p className="text-sm leading-relaxed">{value.content}</p>
            </div>
          </div>
        </div>
      );
    },
    code: ({ value }) => {
      return (
        <div className="my-6">
          {value.filename && (
            <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm rounded-t-lg font-mono">
              {value.filename}
            </div>
          )}
          <pre className={`bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto ${value.filename ? 'rounded-t-none' : ''}`}>
            <code className="text-sm font-mono">{value.code}</code>
          </pre>
        </div>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-serif font-bold text-slate mt-12 mb-6 scroll-mt-20" id={children?.toString().toLowerCase().replace(/\s+/g, '-')}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-serif font-bold text-slate mt-8 mb-4 scroll-mt-20" id={children?.toString().toLowerCase().replace(/\s+/g, '-')}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-slate mt-6 mb-3 scroll-mt-20" id={children?.toString().toLowerCase().replace(/\s+/g, '-')}>
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#C9A34A] pl-6 my-6 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-6 my-6 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 my-6 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-lg leading-relaxed pl-2">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-lg leading-relaxed pl-2">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-slate">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const target = value?.blank ? '_blank' : undefined;
      const rel = value?.blank ? 'noopener noreferrer' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-[#C9A34A] hover:text-yellow-600 underline transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};
