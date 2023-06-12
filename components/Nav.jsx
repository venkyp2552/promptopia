"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
// useSession retives the users informtion,  If a session exists, the provider information is extracted from the session object.
const Nav = () => {
    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, settoggleDropdown] = useState(false)
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
        // bg-gradient-to-l from-[#eea5ba] to-[#8ca8e8] p-2 mt-2 rounded-lg shadow shadow-[#8ca8e8]
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
                        {/* we are checking if we have access to providers then we do following steps below */}
                        {providers && Object.values(providers).map(provider)(
                            <button className='black_btn' type='button' onClick={() => signIn(provider.id)} key={provider.name}>Sign In</button>
                        )}
                    </>
                )}
            </div>

            {/* Mobile Navigation */}
            <div className='sm:hidden flex relative'>
                {isUserLoggedIn ? (
                    <div className='flex'>
                        <Image onClick={() => settoggleDropdown((prev) => !prev)} src="/assets/images/logo.svg" alt="User Profile" width={37} height={37} />
                        {toggleDropdown && (
                            <div className='dropdown'>
                                <Link href="/profile" className='dropdown_link' onClick={() => settoggleDropdown(false)}>
                                    My Profile
                                </Link>
                                <Link href="/create-prompt" className='dropdown_link' onClick={() => settoggleDropdown(false)}>
                                    Create Prompt
                                </Link>
                                <button type="button" onClick={() => {
                                    settoggleDropdown(false)
                                    signOut()
                                }} className='w-full mt-5 black_btn'>Sign Out</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {/* we are checking if we have access to providers then we do following steps below */}
                        {providers && Object.values(providers).map(provider)(
                            <button className='black_btn' type='button' onClick={() => signIn(provider.id)} key={provider.name}>Sign In</button>
                        )}
                    </>
                )

                }
            </div>
        </nav>
    )
}

export default Nav