import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HeaderHome,
  Footer,
  TitleRegistrationLogin,
  decoracaoInfer,
  triangulo,
  Button,
  professor,
  aluno,
  coordenador
} from '../../imports/imports'; 
import './login.css';

function Login() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Função para alternar a visibilidade da senha
  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Função para lidar com o login
  const handleLogin = async () => {
    if (!email || !senha) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);

    const backendUrl = 'https://back-end-mediotec.onrender.com/api';
    try {
      const response = await fetch(`${backendUrl}/auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        navigate('/turmas');
      } else {
        setErrorMessage(data.message || 'Erro no login. Tente novamente.');
      }
    } catch (error) {
      setErrorMessage('Erro na conexão com o servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  // Função para selecionar um card
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setErrorMessage('');
  };

  // Função para exibir o formulário de login
  const handleNextButtonClick = () => {
    if (!selectedCard) {
      setErrorMessage('Por favor, selecione um perfil para continuar.');
      return;
    }
    setShowLoginForm(true);
  };

  return (
    <div className="login">
      <HeaderHome />
      <img src={triangulo} alt="decoracao" id="decInferior" />

      {!showLoginForm ? (
        <>
          <TitleRegistrationLogin 
            title="Olá, Seja bem-vindo!!"
            paragrafo="Selecione um perfil para continuar o login"
          />

          <section className="ContainerSquare">
            <div className="Square">
              {['Professor', 'Aluno', 'Coordenador'].map((role, index) => (
                <button 
                  key={index}
                  type="button" 
                  className={`new-square ${selectedCard === role ? 'selected' : ''}`}
                  onClick={() => handleCardClick(role)}
                >
                  <img 
                    src={role === 'Professor' ? professor : role === 'Aluno' ? aluno : coordenador} 
                    alt={role} 
                  />
                  <h2>{role}</h2>
                  <p className="description">
                    {role === 'Professor' && 'Responsável por planejar e orientar os alunos.'}
                    {role === 'Aluno' && 'Busca aprendizado e desenvolvimento.'}
                    {role === 'Coordenador' && 'Planeja e supervisiona atividades e equipes.'}
                  </p>
                </button>
              ))}
            </div>
          </section>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="button-container">
            <button 
              className="button-next" 
              onClick={handleNextButtonClick} 
              disabled={!selectedCard}
            >
              Próximo
            </button>
          </div>
        </>
      ) : (
        <>
          <TitleRegistrationLogin 
            title="Bem-vindo de volta!"
            paragrafo="Preencha os dados para acessar sua conta"
          />

          <section className="forms-login">
            <div className="login-form">
              <label>Email:</label>
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

        <div className='passwordInput'>
          <label>Senha:</label>
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
           
              
              <a id='EsquecSenha'>Esqueci a senha</a>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <Button 
              title ="Entrar"
                type="button" 
                onClick={handleLogin} 
                disabled={isLoading}
              >
                
                {isLoading ? 'Entrando...' : 'Login'}
              </Button>
             
            </div>

          
          </section>
        </>
      )}

      <img src={decoracaoInfer} alt="decoracao" id="decInferior" />
      <Footer />
    </div>
  );
}

export default Login;
