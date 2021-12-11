import React from "react";
import Footer from "./footer";
import Head from "next/head";


export default function Layout({children}) {
    return (
      <div className="px-8">

        {children}
        
        <Footer />
      </div>
    )
}