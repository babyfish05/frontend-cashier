import React from 'react'
import Link from 'next/link'

const MainHeader = () => {
    return(
        <div className='bg-red-500'>
            MainHeader
            <ul>
                <Link href="/">
                <li>Home</li>
                </Link>
                <Link href="/about">
                <li>About</li>
                </Link>
                <Link href="/category">
                <li>Category</li>
                </Link>
                <Link href="/product">
                <li>produk</li>
                </Link>
            </ul>
        </div>
    );
}

export default MainHeader;