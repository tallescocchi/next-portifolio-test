import Link from 'next/link'

import { SectionTitle } from '../SectionTitle'
import ProjectItem from './ProjectItem'

import { Container } from './styles'

export function Projects() {
  return (
    <Container>
      <SectionTitle title="# Ultimos Projetos" />

      <section>
        <ProjectItem 
          title="Projeto 1"
          type="Website"
          img="https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          slug="/"
        />
        <ProjectItem 
          title="Projeto 2"
          type="App"
          img="https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          slug="/"
        />
        <ProjectItem 
          title="Projeto 3"
          type="Ecommerce"
          img="https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          slug="/"
        />
      </section>

      <button>
        <Link href="/projects">ver todos os projetos</Link>
      </button>
    </Container>
  )
}
