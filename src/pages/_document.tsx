import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class SpecialDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <meta
                  name='viewport'
                  content='width=device-width, initial-scale=1'
               />
            </Head>
            <body
               id='body'
               className="bg-primary text-black dark:bg-darkPrimary dark:text-white font-['Quicksand',_sans-serif]">
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default SpecialDocument;
