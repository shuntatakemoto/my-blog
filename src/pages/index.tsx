import { Badge, Typography, Card } from '@supabase/ui';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '../libs/client';

export default function Home({ blog, category }: any) {
  return (
    <div>
      {category.map((category: any) => (
        <Link key={category.id} href={`/category/${category.id}`} passHref>
          <div>
            <Badge color='blue' size='large'>
              {category.name}
            </Badge>
          </div>
        </Link>
      ))}

      <ul>
        {blog.map((blog: any) => (
          <div key={blog.id}>
            <li>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
            {blog.thumbnail && (
              <Image
                src={`${JSON.stringify(blog.thumbnail.url).replace(/"/g, '')}`}
                alt=''
                width='600'
                height='315'
              />
            )}
          </div>
        ))}
      </ul>
    </div>
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
