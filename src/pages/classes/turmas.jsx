import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import { 
  TurmaDecoracaoSuperior,
  adicionar,
  HeaderSite,
  Footer,
  fundoImg,
  CardsClasse,
  ImgProfessor,
  cancelarModel
} from '../../imports/imports';
import './turmas.css';


function Turma() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const [formData, setFormData] = useState({
    nome: '',
    codigo: '',
    materia: '',
    turno: '',
    sala: '',
    professores: []
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/turmas/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDUxYmYyMjI5YjZmYTZkODI2YTAzYSIsImlhdCI6MTcyODM5NTI1MCwiZXhwIjoxNzI4Mzk4ODUwfQ.LrMu6UDj3f3sONDx9CAH4J5fruWrebTrYx7AsNhgza4`,

        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar turma');
      }

      alert('Turma criada com sucesso!');
      setFormData({ nome: '', codigo: '', materia: '', turno: '', sala: '', professores: [], alunos: [] });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="Turma">
           <HeaderSite />
      <img src={TurmaDecoracaoSuperior} alt='decoração' id='decoracaoTurma'/>


      {/* Espaçamento entre Header e Conteúdo */}
      <section className="turmas-content">
        
        <div className="turmas-header">
          <h2 className="turmas-title">
            Turmas
              </h2>

          <button className="add-turma-button" onClick={openModal}><img src={adicionar} alt='adicionar'/></button>

        </div>
        <hr className='Linha-Header'></hr>
    </section>

 
  <section className='turmas'>
        <CardsClasse 
        imgFundo={fundoImg}
        imgProfessor={ImgProfessor} 
        turma= "1 ano"
        turno= "Tarde"
        materia= "Matemática"
        professor= "Marcos Roberto"
        quantidadeAlunos="40"
        />


    </section>

      {showModal && (
        <section className="modal-overlay">
          <div className="modal-content">
            <button type="button" onClick={closeModal} id='CancelarModel'><img src={cancelarModel} alt='Botão de cancelar' id='CancelarModelImg' /></button>
            <div className='title-modal'>
              <h3>Criar Turma</h3>
              <small>Preencha os dados a baixo para criar uma nova turma</small>
                </div>
              
           
            
        <form onSubmit={handleSubmit} className='from-Turma'>
         <label>Nome da Turma:</label>
              <input type="text" onChange={handleChange} placeholder="Nome da turma" name='nome' required />

          <section className='formTurmaContainerInput'>
          <section className='formTurmaInpust'>
                <label>Matéria:</label>
                <select name='Materia' onChange={handleChange}>
                      <option value='Manhã'>Manhã</option>
                      <option value='Tarde'>Tarde</option>
                    </select>
              
                <label>Professor:</label>
                <select name='Professor' onChange={handleChange}>
                      <option value='Manhã'>Manhã</option>
                      <option value='Tarde'>Tarde</option>
                    </select>
            </section>
            
            <section className='formTurmaInpust'>
                <label>Sala:</label>
                <select name='Sala' onChange={handleChange}>
                      <option value='Manhã'>Manhã</option>
                      <option value='Tarde'>Tarde</option>
                    </select>

                <label>Turno:</label>
                    <select name='Turno' onChange={handleChange}>
                      <option value='Manhã'>Manhã</option>
                      <option value='Tarde'>Tarde</option>
                    </select>
              </section>
          </section>

              <label>Código da Turma:</label>
              <input type="text" onChange={handleChange} placeholder="Código da turma" name='codigo' />
              
              <div className="modal-buttons">
                <button type="submit" id='AdicionarTurma'>Salvar</button>
              </div> 


            </form>
          </div>
        </section>
      )}

      <Footer id="footer-Turmas"/>
    </main>
  );
}

export default Turma;
