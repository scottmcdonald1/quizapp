import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
      <footer>
        <div className="flex flex-col flex-1 justify-center items-center py-8 border-t border-vert59/25">
          <div className="border border-vert59/50 rounded p-2 mb-2">
              <Image src="/logo.png" alt="Trash Can Doodle" width={40} height={40} />
          </div>
          <p className="font-abel text-orangeVif">Scott McDonald 2021</p>
        </div>
      </footer>
    )
}