import { ReactNode } from 'react';

import { Container } from './styles';
import Link from 'next/link';

interface ProjectItemProps {
  title: string
  type: string
  imgUrl: string
  slug: string
}

export function ProjectItem({ title, type, imgUrl, slug }: ProjectItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href="/">
        <div className="overlay" />
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
      </Link>
    </Container>
  );
}
