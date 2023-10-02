import { menu } from '@/data';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const MenuPage = () => {
    return ( 
        <div className='
            p-4
            lg:px-20
            xl:px-40
            h-full
            md:h-[100vh]
            flex
            flex-col
            md:flex-row
            items-center
        '>
            {menu.map((category) => (
                <Link href={`/menu/${category.slug}`} key={category.id} style={{backgroundImage:`url(${category.img})`}} 
                    className='
                        w-full
                        h-1/3
                        bg-cover
                        p-8
                        md:h-1/2
                        relative
                    '                        
                    >
                    <div className={clsx(`
                        w-1/2
                    `,
                        category.color == "black" ? "text-black" : "text-white"
                    )}
                    >
                        <h1 className="
                            uppercase
                            font-bold
                            text-3xl    
                        "
                        >
                            {category.title}
                        </h1>
                        <p className='
                            text-sm
                            my-8
                        '
                        >
                            {category.desc}
                        </p>
                        <button className={clsx(`
                            hidden
                            2xl:block
                            py-2
                            px-4
                            absolute
                            bottom-0
                            mb-8                            
                            rounded-md
                        `,
                            category.color === "black" ? "text-white" : "text-red-500"
                        ,
                            category.color === "black" ? "bg-black" : "bg-white"
                        )}
                        >
                            Explore
                        </button>
                    </div>
                </Link>
            ))}
        </div>
     );
}
 
export default MenuPage;