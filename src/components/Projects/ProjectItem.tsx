import Link from "next/link";

import { AiOutlineRightCircle } from "react-icons/ai";

import { ProjectContainer } from "./styles";

interface ProjectProps {
  title: string
  type: string
  slug: string
  img: string
}



export default function ProjectItem({title, type, slug, img}: ProjectProps) {
  return (
    <ProjectContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />

        <div className="text">
          <h1>{title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={slug}>
          Ver mais
          <AiOutlineRightCircle/>
        </Link>
      </button>
    </ProjectContainer>
  )
}