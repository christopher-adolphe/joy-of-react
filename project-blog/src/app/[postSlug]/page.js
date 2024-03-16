import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { loadBlogPost } from '@/helpers/file-helpers';

import BlogHero from '@/components/BlogHero';
import CodeSnippet from '@/components/CodeSnippet';
import DivisionGroupsDemo  from '@/components/DivisionGroupsDemo';
import CircularColorsDemo from '@/components/CircularColorsDemo';

import styles from './postSlug.module.css';

export async function generateMetadata({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);

  return {
    title: blogPost.frontmatter.title,
    description: blogPost.frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title }
        publishedOn={frontmatter.publishedOn }
      />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={ {
            pre: CodeSnippet,
            DivisionGroupsDemo,
            CircularColorsDemo,
          } }
        />
      </div>
    </article>
  );
}

export default BlogPost;
