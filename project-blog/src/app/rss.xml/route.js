import RSS from 'rss';

import { BLOG_TITLE, BLOG_DESCRIPTION } from '@/constants';
import { getBlogPostList } from '@/helpers/file-helpers';

export async function GET() {
  const feed = new RSS({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
  });

  const blogPosts = await getBlogPostList();

  blogPosts.forEach(({ title, abstract, publishedOn, slug }) => {
    feed.item({
      title,
      description: abstract,
      date: publishedOn,
      url: `http://some-website.com/${slug}`,
    });
  });

  return new Response(fedd.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}