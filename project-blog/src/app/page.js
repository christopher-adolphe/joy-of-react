import React from 'react';

import { BLOG_TITLE, BLOG_DESCRIPTION } from '@/constants';
import { getBlogPostList } from '@/helpers/file-helpers';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';

export const metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
};

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      {
        // blogPosts.map(({ slug, title, abstract, publishedOn }) => (
        //   <BlogSummaryCard
        //     key={ slug }
        //     slug={ slug }
        //     title={ title }
        //     abstract={ abstract }
        //     publishedOn={ publishedOn }
        //   />
        // ))

        // Using the rest operator to collect delegated prop
        blogPosts.map(({ slug, ...delegated }) => (
          <BlogSummaryCard
            key={ slug }
            slug={ slug }
            { ...delegated }
          />
        ))
      }
    </div>
  );
}

export default Home;
