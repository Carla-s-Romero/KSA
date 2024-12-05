import {
    decTitle,
    dec,
    Button,
    Footer,
    HeaderSite
} from '../../imports/imports';
import { useBoletim } from './script/boletim';
import './boletim.css';

function Boletim() {
    const {
        dados,
        activeTab,
        underlinePosition,
        handleTabClick,
        handleInputChange,
        handleSave
    } = useBoletim();

    return (
        <div className="boletim">
            <HeaderSite />
            <img src={dec} alt="decoração quadrados e triangulos" id='decoracao' />

            <section>
                <div className='titleBoletim'>
                    <img src={decTitle} alt="triangulo" />
                    <h1>Boletim</h1>
                </div>

                <div className="selectButton">
                    <button className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Unidade 1</button>
                    <button className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Unidade 2</button>
                    <button className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>Unidade 3</button>

                    <div className="underline">
                        <div style={{ transform: `translateX(${underlinePosition}%)` }}></div>
                    </div>
                </div>
            </section>

            <div className="content">
                {activeTab === 1 && (
                    <section> 
                        <div className='select'> 
                            <div className='Disciplina-select'>
                                <h2>Disciplinas</h2>
                                <select className='options2' id="options2">
                                    <option value="">Selecione uma disciplina</option>
                                    <option value="opcao1">Português</option>
                                    <option value="opcao2">Matemática</option>
                                    <option value="opcao3">História</option>
                                </select>
                            </div>
                            <div className='Turmas-select'>
                                <h2>Turmas</h2>
                                <select className='options2' id="options2">
                                    <option value="">Selecione uma turma</option>
                                    <option value="opcao1">1 Ano</option>
                                </select>
                            </div>
                        </div>

                        {/* Tabela Semestre 1 */}
                        <section className='boletim-tabela'>
                            <div className="tabela-container">
                                <table className="boletim-tabela" border="1" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th rowSpan="2">Aluno</th>
                                            <th colSpan="5">Senac Mediotec Boletim 1º Unidade</th>
                                        </tr>
                                        <tr>
                                            <th>AV 1</th>
                                            <th>AV 2</th>
                                            <th>Menção da unidade</th>
                                            <th>NOA</th>
                                            <th>Situação Final</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dados.map((linha, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'tabela-par' : 'tabela-impar'}>
                                                <td>
                                                    <div className="aluno-info">
                                                        {linha.imagem && <img src={linha.imagem} alt={linha.aluno} className="aluno-imagem" />}
                                                        {linha.aluno}
                                                    </div>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.av1}
                                                        onChange={(e) => handleInputChange(index, 'av1', e.target.value)}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.av2}
                                                        onChange={(e) => handleInputChange(index, 'av2', e.target.value)}
                                                        disabled={!linha.av2Enabled}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.mencao}
                                                        onChange={(e) => handleInputChange(index, 'mencao', e.target.value)}
                                                        disabled
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.noa}
                                                        onChange={(e) => handleInputChange(index, 'noa', e.target.value)}
                                                        disabled
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.situacao}
                                                        onChange={(e) => handleInputChange(index, 'situacao', e.target.value)}
                                                        disabled
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                    
                        <section className='legenda'>
                            <p id='TitleLegenda'>Legendas:</p>
                            <p> A - Atendido </p>
                            <p>PA - Parcialmente Atendido</p>
                            <p> NA - Não Atendido</p>
                            <p> D - Desenvolvido </p>
                            <p>ND - Não Desenvolvido </p>
                            <p>NOA - Novas oportunidades de aprendizado</p>
                        </section>

                        <Button
                            id="buttonBoletim"
                            title="Salvar"
                            onClick={handleSave}
                        />
                    </section>
                )}

                {activeTab === 2 && (
                    <section>
                           <div className='select'> 
                            <div className='Disciplina-select'>
                                <h2>Disciplinas</h2>
                                <select className='options2' id="options2">
                                    <option value="">Selecione uma disciplina</option>
                                    <option value="opcao1">Português</option>
                                    <option value="opcao2">Matemática</option>
                                    <option value="opcao3">História</option>
                                </select>
                            </div>
                            <div className='Turmas-select'>
                                <h2>Turmas</h2>
                                <select className='options2' id="options2">
                                    <option value="">Selecione uma turma</option>
                                    <option value="opcao1">1 Ano</option>
                                </select>
                            </div>
                        </div>
                        {/* Tabela Semestre 2 */}
                        <section className='boletim-tabela'>
                            <div className="tabela-container">
                                <table className="boletim-tabela" id='unidade2' border="1" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th rowSpan="2">Aluno</th>
                                            <th colSpan="5">Senac Mediotec Boletim 2º Unidade</th>
                                        </tr>
                                        <tr>
                                            <th>AV 1</th>
                                            <th>AV 2</th>
                                            <th>Menção da unidade</th>
                                            <th>NOA</th>
                                            <th>Situação Final</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dados.map((linha, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'tabela-par' : 'tabela-impar'}>
                                                <td>
                                                    <div className="aluno-info">
                                                        {linha.imagem && <img src={linha.imagem} alt={linha.aluno} className="aluno-imagem" />}
                                                        {linha.aluno}
                                                    </div>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.av1}
                                                        onChange={(e) => handleInputChange(index, 'av1', e.target.value)}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.av2}
                                                        onChange={(e) => handleInputChange(index, 'av2', e.target.value)}
                                                        disabled={!linha.av2Enabled}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.mencao}
                                                        onChange={(e) => handleInputChange(index, 'mencao', e.target.value)}
                                                        disabled
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.noa}
                                                        onChange={(e) => handleInputChange(index, 'noa', e.target.value)}
                                                        disabled
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.situacao}
                                                        onChange={(e) => handleInputChange(index, 'situacao', e.target.value)}
                                                        disabled
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                        
                    </section>
                )}

                {activeTab === 3 && (
                    <section>
                           <div className='select'> 
                            <div className='Disciplina-select'>
                                <h2>Disciplinas</h2>
                                <select className='options2' id="options2">
                                    <option value="">Selecione uma disciplina</option>
                                    <option value="opcao1">Português</option>
                                    <option value="opcao2">Matemática</option>
                                    <option value="opcao3">História</option>
                                </select>
                            </div>
                            <div className='Turmas-select'>
                                <h2>Turmas</h2>
                                <select className='options2' id="options2">
                                    <option value="">Selecione uma turma</option>
                                    <option value="opcao1">1 Ano</option>
                                </select>
                            </div>
                        </div>
                        {/* Tabela Semestre 3 */}
                        <section className='boletim-tabela'>
                            <div className="tabela-container">
                                <table className="boletim-tabela" id='unidade3' border="1" cellSpacing="0">
                                    <thead>
                                        <tr> 
                                            <th rowSpan="2">Aluno</th>
                                            <th colSpan="5">Senac Mediotec Boletim 3º unidade</th>
                                        </tr>
                                        <tr>
                                            <th>AV 1</th>
                                            <th>AV 2</th>
                                            <th>Menção da unidade</th>
                                            <th>NOA</th>
                                            <th>Situação Final</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dados.map((linha, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'tabela-par' : 'tabela-impar'}>
                                                <td>
                                                    <div className="aluno-info">
                                                        {linha.imagem && <img src={linha.imagem} alt={linha.aluno} className="aluno-imagem" />}
                                                        {linha.aluno}
                                                    </div>
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.av1}
                                                        onChange={(e) => handleInputChange(index, 'av1', e.target.value)}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.av2}
                                                        onChange={(e) => handleInputChange(index, 'av2', e.target.value)}
                                                        disabled={!linha.av2Enabled}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.mencao}
                                                        onChange={(e) => handleInputChange(index, 'mencao', e.target.value)}
                                                        disabled
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.noa}
                                                        onChange={(e) => handleInputChange(index, 'noa', e.target.value)}
                                                        disabled
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={linha.situacao}
                                                        onChange={(e) => handleInputChange(index, 'situacao', e.target.value)}
                                                        disabled
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </section>
                )}
            </div>

            <Footer id="footerBoletim" />
        </div>
    );
}

export default Boletim;
