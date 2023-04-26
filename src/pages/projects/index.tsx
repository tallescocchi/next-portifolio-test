import Head from "next/head";

import { Header } from "@/components/Header";
import { ProjectItem } from "@/components/ProjectItem";

import { Container } from "./styles"

export default function Projects() {
  return (
    <>
      <Head>
        <title>Meu portifólio | Projetos</title>
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
      <Container>
        <Header />
        <main className="container">
          <ProjectItem  
            title="Projeto 01"
            type="Website"
            slug="Test"
            imgUrl="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
          <ProjectItem  
            title="Projeto 02"
            type="Website"
            slug="Test"
            imgUrl="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
          <ProjectItem  
            title="Projeto 03"
            type="Website"
            slug="Test"
            imgUrl="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
          <ProjectItem  
            title="Projeto 04"
            type="Website"
            slug="Test"
            imgUrl="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
        </main>
      </Container>
    </>
  )
}
