import React from "react";
import Head from 'next/head'
import Footer from "./footer";

export default function Layout({children}) {
    return (
      <div className="px-8">

        {children}
        
        <Footer />
      </div>
    )
}