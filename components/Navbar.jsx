import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            Navbar --
            <Link href="/">
                Home
            </Link>
            {" --  "}
            <Link href="/about">
                About us
            </Link>
        </div>
    )
}

export default Navbar