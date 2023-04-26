import { SectionTitle } from '../SectionTitle';
import ExperienceItem from './ExperienceItem';

import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title='# 10 Anos' description="de experiencia" />

      <section>
        <ExperienceItem year="2020" job="frontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eveniet repellendus dolorum quasi quod! Voluptatem, velit, quia libero vitae iusto quisquam sapiente quod illum illo autem mollitia doloremque repellat fugiat?" />
        <ExperienceItem year="2021" job="frontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eveniet repellendus dolorum quasi quod! Voluptatem, velit, quia libero vitae iusto quisquam sapiente quod illum illo autem mollitia doloremque repellat fugiat?" />
        <ExperienceItem year="2022" job="frontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eveniet repellendus dolorum quasi quod! Voluptatem, velit, quia libero vitae iusto quisquam sapiente quod illum illo autem mollitia doloremque repellat fugiat?" />
        <ExperienceItem year="2023" job="frontEnd" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A eveniet repellendus dolorum quasi quod! Voluptatem, velit, quia libero vitae iusto quisquam sapiente quod illum illo autem mollitia doloremque repellat fugiat?" />
      </section>
    </Container>
  );
}
