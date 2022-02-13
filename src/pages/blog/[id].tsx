import { Badge } from '@supabase/ui';
import Image from 'next/image';
import Link from 'next/link';
import { Blog } from 'api/types';
import { createOgImage } from '~/components/CustomImage';
import { Layout } from '~/components/Layout';
import { client } from '~/libs/client';

type Props = {
  blog: Blog;
};

export default function BlogId({ blog }: Props) {
  const { ogImageUrl } = createOgImage(blog.ogpImage.url, blog.title);
  console.log('ogImageUrl', ogImageUrl);

  return (
    <Layout image={ogImageUrl}>
      <main className='pt-8'>
        <h1 className='py-2 text-3xl font-bold'>{blog.title}</h1>
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
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: Blog }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
