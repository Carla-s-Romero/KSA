// Home.js
import { Link } from "react-router-dom";

import { 
  logo,
  perfil,
  Aluno,             
  cursoDev,            
  cursoLog,             
  linha, 
  iconLaranja,
  iconVermelho, 
  beneficios,
  mediotec, 
  CourseCard,
  Mapa,
  Footer
} from '../../imports/imports'; 



import './home.css';




function Home() {
  
  return (
    <main className="Home">
             <header className="header-app">
            <img src={logo} className="App-logo" alt="logo" />
            <nav className='nav-home'>
                <img src={perfil} className="perfil-icon" alt="perfil-icon"/> 
                <div className="opcao-login">
                    <a href="#a" id="portalLogin">Portal do aluno</a>
                    <Link to="/login" id="acessar">Acesse sua conta</Link> 
                </div>
            </nav>
        </header>

        <section>
        <img src={mediotec} className="imgMediotec" alt="logo" /> 

        <article className="adMediotec">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="decoracaoAd"></div>
          ))}
        </article>

        <section className="container">
          <div className="content">
            <h1>Já imaginou fazer o Ensino Médio junto com um curso técnico, sair preparado para o Enem e ter certificações para começar logo uma carreira profissional?</h1>
          </div>
          <img src={Aluno} id="imgAluno" alt=""/>        
        </section>
        </section>


      {/* Características dos cursos disponíveis */}
      <section className="cursos">
        <h2>Cursos Disponíveis do Mediotec</h2>
        <p>Com o Mediotec, você conquista o futuro com uma formação de excelência: Ensino Médio integrado à qualificação técnica, preparando você com as habilidades que o mercado exige e o reconhecimento da marca Senac no seu currículo!</p>

        <section className="cardCursos Dev">
          <article className="cardDev">
            <CourseCard 
              image={cursoDev}
              image2={linha}
              title="Técnico em Desenvolvimento de Sistemas" 
              paragrafo="Conhecimentos em:"
              topics={[
                "Lógica de Programação", 
                "Algoritmos", 
                "Estruturas de Dados", 
                "Banco de Dados", 
                "Desenvolvimento Web", 
                "Programação Orientada a Objetos", 
                "Redes de Computadores", 
                "Sistemas Operacionais", 
                "Manutenção de Computadores", 
                "Segurança da Informação", 
                "Desenvolvimento de Aplicações", 
                "Design de Interfaces"
              ]}
            />
          </article>
          <article className="cardDev">
            <CourseCard 
              image={cursoLog} 
              image2={linha}
              title="Técnico em Logística" 
              paragrafo="Conhecimentos em:"
              topics={[
                "Gestão de Logística ", 
                "Gestão de Estoques", 
                "Logística de Transporte ", 
                "Armazenagem", 
                "Gestão da Cadeia de Suprimentos", 
                "Planejamento Logístico", 
                "Gestão de Recursos", 
                "Legislação e Normas", 
                "Tecnologia da Informação na Logística", 
                "Gestão de Qualidade", 
                "Processos Logísticos", 
                "Sustentabilidade e Logística Verde "
              ]}
            />
          </article>
        </section>
      </section>

      {/* Benefícios do curso */}
      <section className="beneficiosCurso">
        <img src={beneficios} id="imgAluno" alt=""/>
      </section>

      {/* Localização */}
      <section className="ContainerLocalizacao">
        <h4>Descubra a Localização do Senac Mediotec</h4>
        <div className="Localizacao">
          <article className="LocalizacaoInfor">
            <h6>Recife - PE</h6>
            <div className="localEspecifico">
              <img src={iconLaranja} alt=""/>
              <p>Av. João de Barros, 523 
                <br /> Soledade - Mediotec</p>
            </div>
            <div className="localEspecifico">
              <img src={iconVermelho} alt=""/>
              <p>Av. Visc. de Suassuna, 500 
                <br /> Santo Amaro - Faculdade</p>
            </div>
            <h6>Paulista - PE</h6>
            <div className="localEspecifico">
              <img src={iconLaranja} alt=""/>
              <p>R. Oitenta e Dois, 30 
                <br /> Jardim Paulista - Mediotec</p>
            </div>
            <h6>Caruaru - PE</h6>
            <div className="localEspecifico">
              <img src={iconLaranja} alt=""/>
              <p>Av. Maria José Lyra, 140 
                <br /> Indianópolis - Mediotec</p>
            </div>
            <h6>Petrolina - PE</h6>
            <div className="localEspecifico">
              <img src={iconLaranja} alt=""/>
              <p>R. Dona Justina Freire de 
                <br /> Souza, 650 - Mediotec</p>
            </div>
            <Link to="https://www.google.com/maps/search/senac/@-8.041115,-34.891654,12z?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D">Ver mais</Link>
          </article>

          <div className="mapa">
            <Mapa />
          </div>
        </div>
      </section>

     <Footer /> 

    </main>
  );
}

export default Home;
