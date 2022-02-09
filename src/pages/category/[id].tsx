import { Badge } from '@supabase/ui';
import { Blog, Category } from 'api/types';
import { Card } from '~/components/Card';
import { client } from '~/libs/client';

type Props = {
  blog: Blog[];
};

export default function CategoryId({ blog }: Props) {
  if (blog.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  return (
    <div>
      <p>
        <Badge color={blog[0].category.color} size='large'>
          {blog[0].category.name}
        </Badge>
        &nbsp;の記事一覧
      </p>
      <Card blog={blog} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'categories' });

  const paths = data.contents.map((content: Category) => `/category/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: Category) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: 'blog',
    queries: { filters: `category[equals]${id}` },
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};
