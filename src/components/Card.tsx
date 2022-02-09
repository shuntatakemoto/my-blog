import { Badge } from '@supabase/ui';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  blog: any;
};

export const Card = ({ blog }: Props) => {
  return (
    <div className=''>
      {blog.map(
        (blog: any) =>
          blog.thumbnail && (
            <Link key={blog.id} href={`/blog/${blog.id}`} passHref>
              <div className='flex py-4 my-4 cursor-pointer'>
                <div className='w-1/3 xl:w-1/6'>
                  <Image
                    key={blog.id}
                    src={`${JSON.stringify(blog.thumbnail.url).replace(/"/g, '')}`}
                    alt=''
                    width='120'
                    height='120'
                    objectFit='cover'
                    className='rounded-md'
                  />
                </div>
                <div className='pl-4 w-2/3 xl:w-5/6'>
                  <p className='flex'>{new Date(blog.createdAt).toLocaleDateString()}</p>
                  <p className='pt-1 text-2xl font-bold xl:pt-2'>{blog.title}</p>
                  <p className='py-1 xl:py-2'>{blog.subTitle}</p>
                  <Badge color={blog.category.color} size='large'>
                    {blog.category.name}
                  </Badge>
                </div>
              </div>
            </Link>
          ),
      )}
    </div>
  );
};
