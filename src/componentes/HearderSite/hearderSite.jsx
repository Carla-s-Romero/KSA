import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';
import {
  logo,
  perfil,
  iconPerfil,
  iconConfiguracao,
  iconSair,
  notificacao,
  IconBoletim,
  IconBiblioteca,
  IconCalendario,
  IconFrequencia,
  IconPainel,
  IconTurmas,
  IconPerfilMenu,
  IconSairLateral,
  Lixeira
} from '../../imports/imports';
import './hearderSite.css'; 

const HeaderSite = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const [notificacaoOpen, setNotificacaoOpen] = useState(false);
  const [menuLateralOpen, setMenuLateralOpen] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [novaNotificacao, setNovaNotificacao] = useState({
    mensagem: '',
    descricao: '',
    importancia: 'alta'
  });
  const [notificacoes, setNotificacoes] = useState([]);

  // Função para buscar notificações
  const fetchNotificacoes = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/notificacoes');
      if (!response.ok) {
        throw new Error('Erro ao buscar notificações');
      }
      const data = await response.json();
      // Processar os dados recebidos
    } catch (error) {
      console.error('Erro ao buscar notificações:', error);
    }
  };
  


  useEffect(() => {
    fetchNotificacoes(); 
  }, []);

  const toggleDropdown = () => setMenuOpen(!menuOpen);
  const toggleNotificacao = () => setNotificacaoOpen(!notificacaoOpen);
  const toggleMenuLateral = () => setMenuLateralOpen(!menuLateralOpen);

  const enviarNotificacao = async () => {
    const novaNotificacao = {
      mensagem: 'Sua mensagem aqui',
      descricao: 'Descrição da notificação',
      importancia: 'alta', // ou 'media', 'baixa', dependendo do que você precisa
      autor: 'Autor da notificação', // se necessário
    };
  
    console.log('Enviando notificação:', novaNotificacao); // Log da notificação a ser enviada
  
    try {
      const response = await fetch('http://localhost:5000/api/notificacoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaNotificacao),
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao criar notificação: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Notificação criada com sucesso:', data);
    } catch (error) {
      console.error('Erro ao enviar notificação:', error); // Log do erro
    }
  };

  const handleChange = (e) => {
    setNovaNotificacao({
      ...novaNotificacao,
      [e.target.name]: e.target.value
    });
  };

  const openNotificationModal = () => setShowNotificationModal(true);
  const closeNotificationModal = () => setShowNotificationModal(false);

  // Função para deletar uma notificação
const deleteNotificacao = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/notificacoes/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      // Atualiza a lista de notificações após a exclusão
      fetchNotificacoes();
    } else {
      console.error('Erro ao deletar notificação');
    }
  } catch (error) {
    console.error('Erro ao conectar com o servidor:', error);
  }
};

  return (
    <>
      <header className='headerSiteMenu'>
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <div className='perfil'>
            <img src={perfil} className="perfil-icon" alt="perfil-icon" />
            <div className='infor-perfil' onClick={toggleDropdown}>
              <div className='nome-usuario'>
                <span id='nomeUser'>Nome Temporario</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              <span id='nivelAcesso'>Nivel de acesso</span>
            </div>

            {menuOpen && (
              <>
                <div className="overlay" onClick={toggleDropdown}></div>
                <div className='JanelaPerfil'>
                  <svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 0 50 Q 50 0, 100 50" fill="white" />
                  </svg>
                  <ul>
                    <li className='icons-janela'>
                      <img src={iconPerfil} alt='icon-perfil' />
                      Acessar conta
                    </li>
                    <li className='icons-janela'>
                      <img src={iconConfiguracao} alt='icon-configuração' />
                      Configuração
                    </li>
                    <li className='icons-janela'>
                      <img src={iconSair} alt='icon-Sair' />
                      Sair da conta
                    </li>
                  </ul>
                </div>
              </>
            )}

            <section className='notificacao-icon' onClick={toggleNotificacao}>
              <img src={notificacao} alt='icon-notificao' />
            </section>

            {notificacaoOpen && (
              <section className="notificacao-dropdown">
                <h1 className="notificacao-header">Notificação</h1>
                <section className="notificacao-content">
                  <small id='Legenda-Notificacao'>Legenda</small>

                  <div className='legenda-Notificacao'>
                    <div className='notificacao-Cor-Import'> </div>
                    <small>Importante</small>

                    <div className='notificacao-Cor-NaoImport'> </div>
                    <small>Não tão importante</small>

                    <div className='adicionar-Notificacao'>
                      <button onClick={openNotificationModal}>+</button>
                    </div>
                  </div>
                  <hr />

              <div className="notificacao-list">
              {notificacoes.map((notificacao) => (
                
                <div className='card-notificacao'>
                <div key={notificacao.id} className={`notificacao-item `}>

                  <div className='notificacao-dados'>
                <div className={`importancia ${notificacao.importancia === 'alta' ? 'importante' : 'nao-importante'}`}></div>
              <div className='Notificacao-informacao'>
                <strong>{notificacao.mensagem}</strong>
                <small>    {new Date(notificacao.data).toLocaleString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
            second: '2-digit',
    })}</small>
              <p>{notificacao.descricao}</p>

            
              </div>
              <button onClick={() => deleteNotificacao(notificacao.id)}><img src={Lixeira} alt='icon lixeira'/></button> {/* Botão de deletar */}</div>
              </div>
            </div>
              ))}
            </div>

                </section>
              </section>
            )}

            {showNotificationModal && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <button type="button" onClick={closeModal} id='CancelarModel'><img src={cancelarModel} alt='Botão de cancelar' id='CancelarModelImg' /></button>

                  <h1>Criar Notificação</h1>

                  <form onSubmit={enviarNotificacao}>
                    <label>Nome do Evento:</label>
                    <input type="text" name="mensagem" value={novaNotificacao.mensagem} onChange={handleChange} placeholder="Nome do evento" required/>
                    <label>Descrição:</label>
                    <input
                      type="text"
                      name="descricao"
                      value={novaNotificacao.descricao}
                      onChange={handleChange}
                      placeholder="Descrição do evento"
                      required
                    />
                    <label>Importância:</label>
                    <select
                      name="importancia"
                      value={novaNotificacao.importancia}
                      onChange={handleChange}
                    >
                      <option value="alta">Alta</option>
                      <option value="media">Média</option>
                      <option value="baixa">Baixa</option>
                    </select>

                    <div className="modal-buttons">
                      <button type="submit">Criar</button>
                      <button type="button" onClick={closeNotificationModal}>Cancelar</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>

          <div className="menu-toggle" onClick={toggleMenuLateral}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>
      </header>

      <aside className={`menu-lateral ${menuLateralOpen ? 'open' : ''}`}>
        <section className='Topico-Menu'>
          <li>Semestre</li>
        </section>
        
        <section className='Opcaoes-Menu-Lateral'>
          <div className='Icon-Opcoes-Menu'>
            <img src={IconBoletim} alt='boletim-icon' />
            <a href='/boletim'><li>Boletim</li></a>
          </div>
          <div className='Icon-Opcoes-Menu'>
            <img src={IconBiblioteca} alt='boletim-icon' />
            <a href='/biblioteca'><li>Biblioteca</li></a>
          </div>
          <div className='Icon-Opcoes-Menu'>
            <img src={IconCalendario} alt='calendario-icon' />
            <a href='/'><li>Calendário</li></a>
          </div>
          <div className='Icon-Opcoes-Menu'>
            <img src={IconFrequencia} alt='frequencia-icon' />
            <a href='#a'><li>Frequência</li></a>
          </div>
          <div className='Icon-Opcoes-Menu'>
            <img src={IconPainel} alt='painel-icon' />
            <a href='#a'><li>Painel</li></a>
          </div>
          <div className='Icon-Opcoes-Menu'>
            <img src={IconTurmas} alt='turmas-icon' />
            <a href='/turma'><li>Turmas</li></a>
          </div>
        </section>

        <section className='Topico-Menu'>
          <li>Configuração</li>
        </section>

        <section className='Opcaoes-Menu-Lateral'>
          <div className='Icon-Opcoes-Menu'>
            <img src={IconPerfilMenu} alt='perfil-icon' />
            <a href='#a'><li>Perfil</li></a>
          </div>
          <div className='Icon-Opcoes-Menu'>
            <img src={IconSairLateral} alt='sair-icon' />
            <a href='#a'><li>Sair</li></a>
          </div>
        </section>
      </aside>
    </>
  );
}

export default HeaderSite;
