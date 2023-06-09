import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class SpecialDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <meta charSet='utf-8' />
               <meta
                  name='viewport'
                  content='initial-scale=1.0, width=device-width'
               />
               <link
                  rel='shortcut icon'
                  href='favicon.ico'
                  type='image/x-icon'
               />
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link rel="preconnect" href="https://fonts.gstatic.com" />
               <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <body
               id='body'
               className="bg-primary text-black dark:bg-darkPrimary dark:text-white font-quicksand">
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default SpecialDocument;
