import React, { useState } from 'react';
import { 
  HeaderHome,
  TurmaDecoracaoSuperior
} from '../../imports/imports'; 
import './comunicado.css';

function Comunicado() {
  const [activeTab, setActiveTab] = useState(1); // Aba ativa
  const [text, setText] = useState(''); // Estado para o texto do input
  const [style, setStyle] = useState({ bold: false, italic: false, underline: false }); // Estado para os estilos
  const [searchTerm, setSearchTerm] = useState(''); // Estado para o campo de pesquisa
  const [alunos, setAlunos] = useState([
    { id: 1, nome: 'Guilherme Domingues' },
    { id: 2, nome: 'Anna Carolina' },
    { id: 3, nome: 'Eric Fernandes' },
  ]);

  // Função para alternar entre abas
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  // Função para excluir um aluno
  const handleDelete = (id) => {
    setAlunos(alunos.filter(aluno => aluno.id !== id));
  };

  // Filtra os alunos com base na pesquisa
  const filteredAlunos = alunos.filter(aluno =>
    aluno.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Função para alternar estilos (negrito, itálico, sublinhado)
  const toggleStyle = (type) => {
    setStyle({ ...style, [type]: !style[type] });
  };

  const underlinePosition = (activeTab - 1) * 100;

  return (
    <div className="comunicado">
      <HeaderHome />
      <img src={TurmaDecoracaoSuperior} alt='decoração' id='decoracaoTurma'/>
      
      <div className="comunicado-header">
        <h2 className="comunicado-title">Matemática</h2>
      </div>

      <div className="selectButtonMural">
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
        > Comunicados 
        </button>

        <button
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
        > Pessoas
        </button>

        <div className="underline">
          <div
            style={{
              transform: `translateX(${underlinePosition}%)`,
              transition: 'transform 0.3s ease',
            }}
          ></div>
        </div>
      </div>

      <div className="contentMural">
        {/* Aba Comunicados */}
        {activeTab === 1 && (
          <div className="comunicados-content">
            <div className='ContainerMural'>
              <h3 id='TitleMural'>Comunicado</h3>
            </div>

            <div className='InputsMural'>
              <div className='Input-Img'>
                <img src={''} id='ImgProfessorMural'/>
                <div>
                  <h5>Marcos Roberto</h5>
                  <textarea
                    className="text-area"
                    placeholder="Escreva um aviso para a turma"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{
                      fontWeight: style.bold ? 'bold' : 'normal',
                      textDecoration: style.underline ? 'underline' : 'none',
                      fontStyle: style.italic ? 'italic' : 'normal',
                    }}
                  />
                </div>
              </div>

              <div className="toolbar">
                <button onClick={() => toggleStyle('bold')}><b>B</b></button>
                <button onClick={() => toggleStyle('underline')}><u>U</u></button>
                <button onClick={() => toggleStyle('italic')}><i>I</i></button>
              </div>

              <button className="send-button">Enviar</button>
            </div>
          </div>
        )}

        {/* Aba Pessoas */}
        {activeTab === 2 && (
          <div className="pessoas-content">
            <div className="search-bar">

            <input
            type="text"
             placeholder="Pesquisar alunos"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                />
            </div>

            {/* Lista de alunos filtrados */}
            {filteredAlunos.map((aluno) => (
              <div  className="InputsMural2" key={aluno.id}>
                <div className="aluno-info">
                  <div className="aluno-avatar"></div>
                  <span>{aluno.nome}</span>
                </div>
                <button className="delete-button" onClick={() => handleDelete(aluno.id)}>Excluir</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comunicado;
