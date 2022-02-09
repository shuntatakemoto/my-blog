import { Badge } from '@supabase/ui';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '~/libs/client';

export default function BlogId({ blog }: any) {
  return (
    <main className='pt-8'>
      <h1 className='py-2 font-mono text-3xl font-bold'>{blog.title}</h1>
      <div className='flex'>
        <p className='py-2 pr-4'>{new Date(blog.publishedAt).toLocaleDateString()}</p>
        <Link href={`/category/${blog.category.id}`} passHref>
          <div className='flex mx-1 mt-2 mb-8 w-16 cursor-pointer'>
            <Badge color={blog.category.color} size='large'>
              {blog.category && `${blog.category.name}`}
            </Badge>
          </div>
        </Link>
      </div>
      <Image
        key={blog.id}
        src={`${JSON.stringify(blog.thumbnail.url).replace(/"/g, '')}`}
        alt=''
        width='1200'
        height='630'
        objectFit='cover'
      />
      <div
        className='pt-8'
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
