import { ItemContainer } from "./styles";

interface ExperienceItemProps {
  year: string
  job: string
  description: string
}

export default function ExperienceItem({year, job, description}: ExperienceItemProps) {
return (
  <ItemContainer data-aos="fade-up">
    <div>
      <h1>{year}</h1>
      <h2>{job}</h2>
      <p>{description}</p>
    </div>
  </ItemContainer>
)
}