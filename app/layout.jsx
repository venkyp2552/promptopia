import React, { children } from 'react';
import "@styles/global.css";

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
    return (
        <html Lang="en">
            <body>
                <div className='main'>
                    {/* However, it is important to remember that self-closing divs are not valid HTML. This means that you cannot use them in production websites. If you try to use a self-closing div in a production website, it will be treated as an unclosed tag and your website will not render correctly.      */}
                    <div className='gradient' />
                </div>
                {/* below line is the main part of our application */}
                <main className='app'>
                    {/* all the childrens we are going to render */}
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout