// Personal Finance Blog Posts - Main Export File
import { ContentfulBlogPost } from '@/lib/contentful/types';
import { finance_post_1 } from './unclaimed-money';
import { finance_post_2 } from './voter-id-registration';
import { finance_post_3 } from './wrong-upi-transaction';
import { finance_post_4 } from './auto-sweep-facility';
import { finance_post_5 } from './voter-id-address-change';
import { finance_post_6 } from './union-bank-account';

export const personalFinancePosts: ContentfulBlogPost[] = [
  finance_post_1,
  finance_post_2,
  finance_post_3,
  finance_post_4,
  finance_post_5,
  finance_post_6,
];
