import Image from 'next/image';
import { urlFor } from '@/lib/sanity/imageBuilder';
import { SanityImage } from '@/types/sanity';

interface Author {
  name: string;
  credentials?: string;
  bio?: string;
  image?: SanityImage;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

interface AuthorCardProps {
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readingTime?: number;
}

export default function AuthorCard({ author, publishedAt, updatedAt, readingTime }: AuthorCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 border border-gray-200 mb-8">
      <div className="flex items-start space-x-4">
        {/* Author Image */}
        <div className="flex-shrink-0">
          {author.image ? (
            <Image
              src={urlFor(author.image).width(80).height(80).url()}
              alt={author.name}
              width={80}
              height={80}
              className="rounded-full"
            />
          ) : (
            <div className="w-20 h-20 bg-gradient-to-br from-[#C9A34A] to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {author.name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <div className="mb-2">
            <h3 className="text-lg font-bold text-slate">{author.name}</h3>
            {author.credentials && (
              <p className="text-sm text-[#C9A34A] font-medium">{author.credentials}</p>
            )}
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(publishedAt)}
            </span>
            {readingTime && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min read
              </span>
            )}
            {updatedAt && updatedAt !== publishedAt && (
              <span className="text-xs text-gray-500">
                Updated: {formatDate(updatedAt)}
              </span>
            )}
          </div>

          {/* Bio */}
          {author.bio && (
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {author.bio}
            </p>
          )}

          {/* Social Links */}
          {author.social && (
            <div className="flex space-x-3">
              {author.social.linkedin && (
                <a
                  href={author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#C9A34A] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
              {author.social.twitter && (
                <a
                  href={author.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#C9A34A] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
