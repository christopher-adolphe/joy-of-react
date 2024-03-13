import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { loadBlogPost } from '@/helpers/file-helpers';

import BlogHero from '@/components/BlogHero';
import CodeSnippet from '@/components/CodeSnippet';

import styles from './postSlug.module.css';

export async function generateMetadata({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);

  return {
    title: blogPost.frontmatter.title,
    description: blogPost.frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={ blogPost.frontmatter.title }
        publishedOn={ blogPost.frontmatter.publishedOn }
      />
      <div className={styles.page}>
        <MDXRemote
          source={ blogPost.content }
          components={ {
            pre: CodeSnippet,
          } }
        />
      </div>
    </article>
  );
}

export default BlogPost;
