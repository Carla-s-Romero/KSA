import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { 
  TurmaDecoracaoSuperior,
  adicionar,
  HeaderSite,
  Footer,
  fundoImg,
  CardsClasse,
  cancelarModel
} from '../../imports/imports';
import './turmas.css';

function Turma() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    codigo: '',
    materia: '',
    turno: '',
    sala: '',
    professores: []
  });

  // Estado para armazenar as turmas
  const [turmas, setTurmas] = useState([]);

  // Função para abrir o modal
  const openModal = () => {
    setShowModal(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Função para lidar com mudanças no formulário
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = async e => {
    e.preventDefault();
    
    try {
      // Adiciona a nova turma ao estado de turmas
      setTurmas([
        ...turmas,
        { 
          nome: formData.nome,
          codigo: formData.codigo,
          materia: formData.materia,
          turno: formData.turno,
          sala: formData.sala,
          professores: formData.professores, // Corrigi para usar o nome correto no campo "professores"
          quantidadeAlunos: '0', // Exemplo de quantidade de alunos, você pode atualizar conforme necessário
        }
      ]);

      // Limpar os dados do formulário
      setFormData({
        nome: '',
        codigo: '',
        materia: '',
        turno: '',
        sala: '',
        professores: [],
      });

      alert('Turma criada com sucesso!');
      closeModal(); // Fechar o modal após o envio
    } catch (error) {
      alert('Erro ao criar a turma');
    }
  };

  return (
    <main className="Turma">
      <HeaderSite />
      <img src={TurmaDecoracaoSuperior} alt='decoração' id='decoracaoTurma' />

      {/* Espaçamento entre Header e Conteúdo */}
      <section className="turmas-content">
        <div className="turmas-header">
          <h2 className="turmas-title">Turmas</h2>
          <button className="add-turma-button" onClick={openModal}><img src={adicionar} alt='adicionar'/></button>
        </div>
        <hr className='Linha-Header' />
      </section>

      <section className='turmas'>
        {/* Mapeia todas as turmas e as exibe como cards */}
        {turmas.map((turma, index) => (
          <CardsClasse
            key={index}
            imgFundo={fundoImg}
            turma={turma.nome} // Exibe o nome da turma do formulário
            turno={turma.turno}
            materia={turma.materia}
            professor={turma.professores.join(', ')} // Exibe os professores, caso haja mais de um
            quantidadeAlunos={turma.quantidadeAlunos}
          />
        ))}
      </section>

      {/* Modal para adicionar nova turma */}
      {showModal && (
        <section className="modal-overlay">
          <div className="modal-content">
            <button type="button" onClick={closeModal} id='CancelarModel'>
              <img src={cancelarModel} alt='Botão de cancelar' id='CancelarModelImg' />
            </button>
            <div className='title-modal'>
              <h3>Criar Turma</h3>
              <small>Preencha os dados abaixo para criar uma nova turma</small>
            </div>

            <form onSubmit={handleSubmit} className='from-Turma'>
              <label>Nome da Turma:</label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Nome da turma"
                name='nome'
                value={formData.nome}
                required
              />

              <label>Turno:</label>
              <select name='turno' onChange={handleChange} value={formData.turno}>
                <option value='Manhã'>Manhã</option>
                <option value='Tarde'>Tarde</option>
              </select>

              <label>Matéria:</label>
              <select name='materia' id='SelectMateria' onChange={handleChange} value={formData.materia}>
                <option value='Português'>Português</option>
                <option value='Matemática'>Matemática</option>
                <option value='História'>História</option>
              </select>

              <label>Código da Turma:</label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Código da turma"
                name='codigo'
                value={formData.codigo}
              />

              <div className="modal-buttons">
                <button type="submit" id='AdicionarTurma'>Salvar</button>
              </div>
            </form>
          </div>
        </section>
      )}

      <Footer id="footer-Turmas" />
    </main>
  );
}

export default Turma;
