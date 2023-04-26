import Image from 'next/image';
import imageHero from '../../assets/pessoa.webp'
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

export function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <Image src={imageHero} alt="" priority />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Eu sou o Talles</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className='comment'>// Minha apresentação</span>
            <span className='purple'>Infos</span> {'\u007B'}
            <div>
              Nome: <span className='blue'>Talles,</span>
            </div>
            <div>
              Sobrenome: <span className='blue'>Cocchi</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className='purple'>Cargo</span> {'\u007B'}
            <div>
              Função: <span className='blue'>Front-End Developer</span>
            </div>
            <div>
              Empresa: <span className='blue'>Atos</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
