"use clinet";
import { SessionProvider } from 'next-auth/react'
//this one is a higher order component so we can wrap amy components under this one.
const Provider = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Provider