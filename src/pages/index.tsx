import { Badge } from '@supabase/ui';
import Link from 'next/link';
import { Blog, Category } from 'api/types';
import { Card } from '~/components/Card';
import { client } from '~/libs/client';

type Props = {
  blog: Blog[];
  category: Category[];
};

export default function Home({ blog, category }: Props) {
  return (
    <>
      <div className='flex'>
        {category.map((category: Category) => (
          <Link key={category.id} href={`/category/${category.id}`} passHref>
            <div className='my-8 mx-1 cursor-pointer'>
              <Badge color={category.color} size='large'>
                {category.name}
              </Badge>
            </div>
          </Link>
        ))}
      </div>
      <Card blog={blog} />
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const categoryData = await client.get({ endpoint: 'categories' });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};
