import Head from "next/head"
import IconFacebook from "../components/icons/IconFacebook"
import IconGitHub from "../components/icons/IconGitHub"
import IconInstagram from "../components/icons/IconInstagram"
import IconLinkedIn from "../components/icons/IconLinkedIn"
import IconTwitter from "../components/icons/IconTwitter"
import { getRGBColor, getAccessibleColor } from "../utils"

export default function Home() {
  const primaryColor = getRGBColor("#6231af", "primary")
  const a11yColor = getRGBColor(getAccessibleColor("#6231af"), "a11y")

  return (
    <>
      <Head>
        <title>NodCard Example</title>
        <style>:root {`{${primaryColor} ${a11yColor}}`}</style>
      </Head>
      <div className="min-h-screen grid content-center place-content-center bg-gray-100 bg-edit-dots">
        <div className="bg-white w-[500px] text-center rounded-2xl px-5 pb-5 shadow-xl">
          <div className="w-28 h-28 bg-gray-300 rounded-full mx-auto -mt-14" />
          <div className="m-5">
            <p className="m-2 font-extrabold text-3xl tracking-tight text-skin-primary">
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
              <li key={i}>
                <a
                  href={link.href}
                  target="_blank"
                  className="h-12 grid w-12 place-content-center rounded-lg border border-opacity-40 focus:ring-2 focus:ring-offset-2  bg-skin-primary bg-opacity-30 text-skin-primary hover:bg-opacity-100 hover:text-skin-a11y border-skin-primary focus:ring-skin-primary"
                  rel="noreferrer"
                >
                  <link.icon className="h-5 w-5" />
                </a>
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
    href: "https://twitter.com",
  },
  {
    icon: IconGitHub,
    href: "https://github.com",
  },
  {
    icon: IconInstagram,
    href: "https://instagram.com",
  },
  {
    icon: IconFacebook,
    href: "https://facebook.com",
  },
  {
    icon: IconLinkedIn,
    href: "https://linkedin.com",
  },
]
