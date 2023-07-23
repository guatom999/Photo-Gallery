import Image from 'next/image'
import React from "react"
import { getGalleryList } from '../services/gallery'
import Link from "next/link";

const page = async () => {

  const posts = await getGalleryList({ limit: 30, offset: 1 })
  return (
    <main className="mt-5 container mx-auto">
    <div className="my-5 text-3xl font-bold text-center">Photo Gallery</div>
    <div className="grid grid-cols-fluid ">
      {posts?.photos.map((item, index) => {
        return (
          <div
            key={index}
            className="m-5 border rounded-md overflow-hidden transition duration-150 hover:scale-110"
          >
            <Link href={`/${item.id}`}>
              <div>
                <Image
                  src={item.url}
                  alt={item.title}
                  width={500}
                  height={500}
                  sizes="100"
                />
                <div className="p-4">
                  <div className="text-lg font-semibold truncate">
                    {item.title}
                  </div>
                  <div className="text-sm truncate">{item.description}</div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  </main>
  )
}

export default page

