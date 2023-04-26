import { useEffect } from "react";
import Aos from 'aos'
import Head from "next/head";

import { Experiences } from "@/components/Experiences";
import { Footer } from "@/components/Footer";
import { FormContact } from "@/components/FormContact";
import { Header } from "@/components/Header";
import { HomeHero } from "@/components/HomeHero";
import { Knowledges } from "@/components/Knowledges";
import { Projects } from "@/components/Projects";

import { HomeContainer } from "@/styles/HomeStyles";
import 'aos/dist/aos.css'

export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <>
      <Head>
        <title>Meu portifólio | Home</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <HomeContainer>
        <Header />
        <main className="container">
          <HomeHero />
          <Experiences />
          <Projects />
          <Knowledges />
          <FormContact />
        </main>
          <Footer />
      </HomeContainer>
    </>
  )
}
