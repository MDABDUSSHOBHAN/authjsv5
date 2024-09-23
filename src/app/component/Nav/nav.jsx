import Link from 'next/link';
import React from 'react';

const nav = () => {
    return (
        <header className='bg-gray-600 text-gray-100'>
<nav className='flex justify-between items-center w-full px-10 py-4'>


    <div>My Site</div>
    <div className='flex gap-10'>
        <Link href="/">Home</Link>
        <Link href="/createUser">Create User</Link>
        <Link href="/clientMember">Client Member</Link>
        <Link href="/Mumber">Member</Link>
        <Link href= "/Public">Public</Link>


    </div>
</nav>

        </header>
    );
};

export default nav;