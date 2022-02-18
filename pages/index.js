import Head from "next/head"
import IconFacebook from "../components/icons/IconFacebook"
import IconGitHub from "../components/icons/IconGitHub"
import IconInstagram from "../components/icons/IconInstagram"
import IconLinkedIn from "../components/icons/IconLinkedIn"
import IconTwitter from "../components/icons/IconTwitter"

export default function Home() {
  return (
    <>
      <Head>
        <title>NodCard Example</title>
      </Head>
      <div className="min-h-screen grid content-center place-content-center bg-gray-100 bg-edit-dots">
        <div className="bg-white w-[500px] text-center rounded-2xl px-5 pb-5 shadow-xl">
          <div className="w-28 h-28 bg-gray-300 rounded-full mx-auto -mt-14" />
          <div className="m-5">
            <p className="m-2 font-extrabold text-3xl tracking-tight">
              Jane Cooper
            </p>
            <p className="m-2 font-medium text-xl text-gray-500">
              Person Title
            </p>
            <p className="m-2 font-light text-gray-400">
              An optional overview about this person as a quick bio.
            </p>
          </div>
          <ul className="flex m-5 justify-center space-x-3">
            {links.map((link, i) => (
              <li
                key={i}
                className="h-12 grid w-12 place-content-center rounded-lg
          bg-gray-700 text-white"
              >
                <link.icon className="h-5 w-5" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

const links = [
  {
    icon: IconTwitter,
  },
  {
    icon: IconGitHub,
  },
  {
    icon: IconInstagram,
  },
  {
    icon: IconFacebook,
  },
  {
    icon: IconLinkedIn,
  },
]
