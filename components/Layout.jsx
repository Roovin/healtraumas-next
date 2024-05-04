import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { useRouter } from 'next/router';

export default function Layout({ children, dir }) {
  const { locales } = useRouter();
  return (
    <>
        <Header locales={locales} />
        <main dir={dir}>
            { children }
        </main>
        <Footer />
    </>
  )
}
