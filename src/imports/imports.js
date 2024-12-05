// Importando imagens

// Cabeçalho - imagens que estão em todas as telas
import logo from '../assets/logoSenac.png';
import perfil from '../assets/perfilIcon.png';

// Imagens da Home
import Aluno from '../assets/Home_Img/ImgAdAluno.png';
import cursoDev from '../assets/Home_Img/dev.png';
import cursoLog from '../assets/Home_Img/Logis.png';
import linha from '../assets/Home_Img/Linha1.png';
import iconLaranja from '../assets/Home_Img/IconLocalLaranja.png';
import iconVermelho from '../assets/Home_Img/Sede.png';
import beneficios from '../assets/Home_Img/Group 42 (1).png';
import mediotec from '../assets/Home_Img/MediotecImg.png';

// Imagens do Footer - Redes Sociais e Ícones
import RedesLink from '../assets/Footer/linkedin.png';
import RedesYout from '../assets/Footer/youtube.png';
import RedesInsta from '../assets/Footer/instagram.png';
import RedesFace from '../assets/Footer/Facebook.png';
import Topo from '../assets/Footer/Botão de Subir.png';
import telefone from '../assets/Footer/telefone.png';
import parceria from '../assets/Footer/Parceria.png';

// Decoração da página de login e cadastro
import triangulo from '../assets/Login_Registration/triangulo.png';
import decoracaoInfer from '../assets/Login_Registration/DecoracaoInfer.png';

// Imagens de login
import professor from '../assets/Login_Registration/professor.png';
import coordenador from '../assets/Login_Registration/coordenador.png';
import aluno from '../assets/Login_Registration/aluno.png';

// Imagens do Boletim
import decTitle from '../assets/Bulletin/H1Triangulo.png';
import dec from '../assets/Bulletin/dec.png';

// Imagens do HeaderSite
import iconPerfil from '../assets/Header/PerfilJanela.png';
import iconConfiguracao from '../assets/Header/config.png';
import iconSair from '../assets/Header/sair.png';
import notificacao from '../assets/Header/Notificacao.png';
import IconBoletim from '../assets/Header/menu/IconBoletim.png';
import IconBiblioteca from '../assets/Header/menu/IconBiblioteca.png'
import IconCalendario from '../assets/Header/menu/IconCalendario.png';
import IconFrequencia from '../assets/Header/menu/IconFrequencia.png';
import IconPainel from '../assets/Header/menu/IconUser.png';
import IconTurmas from '../assets/Header/menu/IconTurmas.png';
import IconPerfilMenu from '../assets/Header/menu/IconPerfilMenu.png';
import IconSairLateral from '../assets/Header/menu/IconSair.png';
import Lixeira from '../assets/Header/lixeira.png';

// Imagens das Turmas
import TurmaDecoracaoSuperior from '../assets/Classes/decoraçãoRedonda.png';
import adicionar from '../assets/Classes/AdicionarTurma.png';
import quantidadeAlunosIcon from '../assets/Classes/IconColaboradores.png';
import fundoImg from '../assets/Classes/turmaTeste/YOUTZ-MATEMATICA-ENEM.jpg';
// import ImgProfessor from '../assets/Classes/turmaTeste/12161378-m.jpg';
import cancelarModel from '../assets/Classes/image 30.png';

// Imagens Biblioteca
import fundoCards from '../assets/Library/Group 63.png'
import capaLivro from '../assets/Library/71ATk7TzxQL._AC_UF1000,1000_QL80_.jpg'

// Componentes
import HeaderHome from '../componentes/Header/cHeader';
import HeaderSite from '../componentes/HearderSite/hearderSite';
import CourseCard from '../componentes/Couser/cCouser';
import Mapa from '../componentes/Mapa/cMapa';
import Footer from '../componentes/Footer/cFooter';
import TitleRegistrationLogin from '../componentes/TitleRegistrationLogin/cTitle';
import Button from '../componentes/Button/cButton';
import Cards from '../componentes/LibraryCards/cCards'
import CardsClasse from '../componentes/ClassesCard/cClasseCard'

// import Notificacao from '../componentes/notificacao/notificacao';




export {
  // Componentes principais da aplicação
  Cards,                // componente de cards de livros
  CourseCard,           // Componente de cartão de curso
  HeaderHome,           // Componente de cabeçalho para a Home
  HeaderSite,           // Componente de cabeçalho para o site
  Mapa,                 // Componente para exibição de mapa
  Footer,               // Componente do rodapé
  TitleRegistrationLogin,   // Componente de título para cadastro e login
  Button,               // Componente de botão para cadastro e login
  // Notificacao,          // Componente de notificação
  CardsClasse,

  // Imagens do cabeçalho - visíveis em todas as telas
  logo,                 // Logotipo do Senac
  perfil,               // Ícone de perfil padrão

  // Imagens da Home
  Aluno,                // Imagem de adição de aluno
  cursoDev,             // Imagem do curso de desenvolvimento
  cursoLog,             // Imagem do curso de logística
  linha,                // Linha de separação decorativa
  iconLaranja,          // Ícone de localização laranja
  iconVermelho,         // Ícone de sede vermelha
  beneficios,           // Imagem de benefícios oferecidos
  mediotec,             // Imagem do programa Mediotec

  // Imagens do rodapé (footer) - redes sociais e ícones
  RedesLink,            // Ícone do LinkedIn
  RedesYout,            // Ícone do YouTube
  RedesInsta,           // Ícone do Instagram
  RedesFace,            // Ícone do Facebook
  Topo,                 // Ícone para subir ao topo da página
  telefone,             // Ícone de telefone para contato
  parceria,             // Imagem de parceria

  // Decoração da página de login e cadastro
  triangulo,            // Imagem decorativa triangular
  decoracaoInfer,       // Imagem decorativa inferior

  // Imagens da página de login
  professor,            // Imagem do ícone para perfil de professor
  coordenador,          // Imagem do ícone para perfil de coordenador
  aluno,                // Imagem do ícone para perfil de aluno

  // Imagens do boletim
  decTitle,             // Imagem decorativa do título do boletim
  dec,                  // Imagem decorativa adicional do boletim

  // Imagens do HeaderSite
  iconPerfil,           // Ícone do perfil na janela de navegação
  iconConfiguracao,     // Ícone de configurações
  iconSair,             // Ícone de logout
  notificacao,          // Ícone de notificação
  IconBoletim,          // Ícone para boletim
  IconBiblioteca,       // Ícone para a biblioteca
  IconCalendario,       // Ícone de calendário
  IconFrequencia,       // Ícone de frequência
  IconPainel,           // Ícone do painel do usuário
  IconTurmas,           // Ícone de turmas
  IconPerfilMenu,       // Ícone do perfil no menu lateral
  IconSairLateral,      // Ícone de logout no menu lateral
  Lixeira,              // Ícone de lixeira

  // Imagens das turmas
  TurmaDecoracaoSuperior, // Imagem decorativa superior para a seção de turmas
  adicionar,              // Ícone para adicionar uma nova turma
  quantidadeAlunosIcon,   // Ícone sobre a quantidade de alunos         
  fundoImg,
  // ImgProfessor,
  cancelarModel,

  //Biblioteca
  fundoCards,
  capaLivro
};
