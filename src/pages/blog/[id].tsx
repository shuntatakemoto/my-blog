import { Badge, Typography } from '@supabase/ui';
import { client } from '../../libs/client';

export default function BlogId({ blog }: any) {
  return (
    <main>
      <Typography.Title level={1}>{blog.title}</Typography.Title>
      <Typography.Text>{blog.publishedAt}</Typography.Text>
      <Badge color='blue' size='large'>
        {blog.category && `${blog.category.name}`}
      </Badge>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content: { id: any }) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: any } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
