import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import type BlogPostPaginatorType from '@theme/BlogPostPaginator';
import type {WrapperProps} from '@docusaurus/types';

import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import CommentSection from '@site/src/components/CommentSection/CommentSection';

type Props = WrapperProps<typeof BlogPostPaginatorType>;

export default function BlogPostPaginatorWrapper(props: Props): JSX.Element {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { frontMatter, slug, title } = metadata;
  const { enableComments } = frontMatter;

  return (
    <>
      <BlogPostPaginator {...props} />
      {((enableComments != false) && isBlogPostPage) && (
        <CommentSection />
      )}
    </>
  );
}
