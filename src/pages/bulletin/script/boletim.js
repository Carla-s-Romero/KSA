import {useState } from 'react';

export const useBoletim = () => {
    const [dados, setDados] = useState([
        { imagem: '../../assets/perfilIcon.png', aluno: 'Anna Carolina', av1: '', av2: '', mencao: '', noa: '', situacao: '', av2Enabled: false },
        {  imagem: '../../assets/perfilIcon.png',aluno: 'Eric Fernandes', av1: '', av2: '', mencao: '', noa: '', situacao: '', av2Enabled: false },
        {  imagem: '../../assets/perfilIcon.png', aluno: 'Guilherme Domingues', av1: '', av2: '', mencao: '', noa: '', situacao: '', av2Enabled: false },
    ]);

    const [activeTab, setActiveTab] = useState(1);
    const [underlinePosition, setUnderlinePosition] = useState(0);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
        const tabCount = 3;
        setUnderlinePosition((tabNumber - 1) * (350 / tabCount)); // Adjust the position of the underline
    };

    const handleInputChange = (index, campo, valor) => {
        const novosDados = [...dados];
        novosDados[index][campo] = valor;
        setDados(novosDados);
    };

    const handleSave = () => {
        const novosDados = dados.map(item => ({
            ...item,
            av2Enabled: true,
        }));
        setDados(novosDados);
        alert('Dados salvos temporariamente! AV2 agora está habilitado.');
    };

    return {
        dados,
        activeTab,
        underlinePosition,
        handleTabClick,
        handleInputChange,
        handleSave,
    };
};
