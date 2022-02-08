import { Badge } from '@supabase/ui';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '~/libs/client';

export default function Home({ blog, category }: any) {
  return (
    <>
      <div className='flex'>
        {category.map((category: any) => (
          <Link key={category.id} href={`/category/${category.id}`} passHref>
            <div className='my-8 mx-1 cursor-pointer'>
              <Badge color={category.color} size='large'>
                {category.name}
              </Badge>
            </div>
          </Link>
        ))}
      </div>
      <div className=''>
        {blog.map(
          (blog: any) =>
            blog.thumbnail && (
              <Link key={blog.id} href={`/blog/${blog.id}`} passHref>
                <div className='flex my-4 w-full cursor-pointer'>
                  <Image
                    key={blog.id}
                    src={`${JSON.stringify(blog.thumbnail.url).replace(/"/g, '')}`}
                    alt=''
                    width='144'
                    height='144'
                    objectFit='cover'
                  />
                  <div className='pl-4'>
                    <p>{blog.createdAt}</p>
                    <p className='py-4 text-2xl font-bold'>{blog.title}</p>
                    <p>{blog.subTitle}</p>
                  </div>
                  {console.log(blog)}
                </div>
              </Link>
            ),
        )}
      </div>
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
