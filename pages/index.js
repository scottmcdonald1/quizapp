import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <main>

      <div className="flex flex-col justify-center items-center w-screen h-screen">

        <div className="border border-orangeVif rounded mx-4 p-8">
          <h1 className="font-bebasNeue text-5xl text-ombreNaturelle31 font-bold hover:underline">
            Quiz<span className="text-vert59">App</span>
          </h1>
        </div>
        <div className="border border-orangeVif rounded m-4 p-8">
          <form className="flex flex-col">

            <label className="block">
              <span class="block text-sm font-medium text-ombreNaturelle31/75">Name</span>
              <input type="text" className="rounded m-1 peer"></input>
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm"></p>
            </label>

            <button className="hover:ring-1 hover:ring-vert59 text-vert59 m-1 py-2 px-3 border border-ombreNaturelle31 rounded transition-all">Let's Get Quizzy</button>
          </form>
        </div>

      </div>

    </main>
  )
}
