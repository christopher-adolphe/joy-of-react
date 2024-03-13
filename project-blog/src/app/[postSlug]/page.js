import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { loadBlogPost } from '@/helpers/file-helpers';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';

async function BlogPost({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);
  console.log('BlogPost: ', blogPost);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={ blogPost.frontmatter.title }
        publishedOn={ blogPost.frontmatter.publishedOn }
      />
      <div className={styles.page}>
        <MDXRemote source={ blogPost.content } />
      </div>
    </article>
  );
}

export default BlogPost;
