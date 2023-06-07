"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
// useSession retives the users informtion,  If a session exists, the provider information is extracted from the session object.
const Nav = () => {
    const isUserLoggedIn = false;
    const [providers, setProviders] = useState(null);
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            //setting the useState Value
            setProviders(response);
        }
        //calling the above function setProviders
        //then we can sign from google authentication
        setProviders();
    }, [])
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link className='flex gap-2 flex-center' href="/">
                <Image src="/assets/images/logo.svg" width={30} height={30} alt='Promptopia' className='object-container' />
                <p className='hidden font-satoshi font-semibold text-lg text-black tracking-wide md:flex'>Promptopia</p>
            </Link>
            {/* Desktop Navigation */}
            <div className='hidden sm:flex'>
                {isUserLoggedIn ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href="/create-prompt" className='black_btn'>Create Post
                        </Link>
                        <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
                        <Link href="/profile">
                            <Image src="/assets/images/logo.svg" alt="User Profile" width={37} height={37} />
                        </Link>
                    </div>
                ) : (
                    <>

                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav