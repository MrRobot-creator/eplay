/* eslint-disable prettier/prettier */
import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link title='Clique aqui para acessar a categoria de RPG' to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link title='Clique aqui para acessar a categoria de Ação' to="/categories#action">Ação</Link>
          </li>
          <li>
            <Link title='Clique aqui para acessar a categoria de Esportes' to="/categories#sports">Esportes</Link>
          </li>
          <li>
            <Link title='Clique aqui para acessar a categoria de Simulação' to="/categories#simulation">Simulação</Link>
          </li>
          <li>
            <Link title='Clique aqui para acessar a categoria de Luta' to="/categories#fight">Luta</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link title='Clique aqui para acessar as promoções' to="/#on-sale">Promoções</Link>
          </li>
          <li>
            <Link title='Clique aqui para acessar os jogos em breve' to="/#coming-soon">Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados.</p>
    </div>
  </Container>
)

export default Footer