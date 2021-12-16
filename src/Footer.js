import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
      <footer>
        <div className="flex flex-col flex-1 justify-center items-center py-8 border-t border-vert59/25">
          <GitHubLink src="/logo.png" />
          {/* <div className="border border-vert59/50 p-2 mb-2 hover:rounded hover:border-vert59 cursor-pointer transition-all">
              <Image src="/logo.png" alt="Trash Can Doodle to GitHub Link" width={40} height={40} />
          </div> */}
          <p className="font-abel text-orangeVif">Scott McDonald 2021</p>
        </div>
      </footer>
    )
}

function GitHubLink(props) {
  const link = "https://github.com/scottmcdonald1/quizapp"
  return (
    <a href={link} target="blank">
      <div className="border border-vert59/50 p-2 mb-2 hover:rounded hover:border-vert59 cursor-pointer transition-all">
        <Image src={props.src} alt="Trash Can Doodle to GitHub Link" width={40} height={40} />
      </div>
    </a>
  )
}