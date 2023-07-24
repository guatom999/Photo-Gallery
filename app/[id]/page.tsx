import React from 'react'
import { NextPage } from 'next'
import Image from "next/image"
import { getGalleryById } from '@/services/gallery'

interface PageProps {
    params: {
        id: number
    }
}


const page: NextPage<PageProps> = async ({ params }) => {

    const post = await getGalleryById({ id: params.id })

    return (
        <div className="container mx-auto max-w-3xl	">
            {post && (
                
                <div className="mt-5 ">
                    <div>
                    </div>
                    <Image
                        className='rounded-xl w-full '
                        src={post.photo.url}
                        width={0}
                        height={0}
                        sizes="100"
                        alt="test"
                    />
                    <div className="pt-5">
                        <div className='font-bold text-lg truncate'>
                            {post.photo.id} . {post.photo.title}
                        </div>
                        <div className='pt-2'>
                            {post.photo.description}
                        </div>
                    </div>

                </div>
            )
            }
        </div>


    )
}

export default page