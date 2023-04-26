import { SectionTitle } from '../SectionTitle'
import Form from './Form';

import { Container } from './styles'

export function FormContact() {
  return (
    <Container>
      <SectionTitle 
        title="# Precisa dos meus serviços?" 
        description="Preenha o formulário abaixo e irei retornar em breve"
      />

      <Form />
    </Container>
  );
}
