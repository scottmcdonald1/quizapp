import React from "react";
import Footer from "./footer";

export default function Layout({children}) {
    return (
      <div className="px-8">
        <main>
          {children}
        </main>
        
        <Footer />
      </div>
    )
}