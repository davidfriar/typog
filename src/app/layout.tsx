import type { Metadata } from "next"
import "./globals.css"
import {
  alegreya,
  alegreyaSans,
  urbanist,
  sourceCode,
  sourceSans,
  sourceSerif,
  merriweather,
  merriweatherSans,
  inter,
  manrope,
  spaceGrotesk,
  playfair,
  firaSans,
  piazzolla,
  piazzollaSC,
  bitter,
  lato,
  crimson,
  nimbusSans,
  literata,
} from "./fonts"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const fontClassNames = [
    alegreya,
    alegreyaSans,
    urbanist,
    sourceSerif,
    sourceSans,
    sourceCode,
    merriweather,
    merriweatherSans,
    inter,
    manrope,
    spaceGrotesk,
    playfair,
    firaSans,
    piazzolla,
    piazzollaSC,
    bitter,
    lato,
    crimson,
    nimbusSans,
    literata,
  ]
    .map((f) => f.variable)
    .join(" ")
  return (
    <html lang="en" className={fontClassNames}>
      <body>{children}</body>
    </html>
  )
}
