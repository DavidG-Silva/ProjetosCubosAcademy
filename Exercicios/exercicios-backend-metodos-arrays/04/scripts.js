function filaAtendimento (listaPacientes, tipoOperacao, nomePaciente = null) {
    
    if (tipoOperacao === 'agendar' && nomePaciente !== null) {
        listaPacientes.push(nomePaciente);
    } else if (tipoOperacao === 'atender') {
        listaPacientes.shift();
    } else {
        console.log('Informe uma operacao valida!')
    }

    console.log('Fila de atendimento:',listaPacientes.join(', '));
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const operacao = 'atender';
const paciente = 'Carlos';

console.log('Fila inicial:', pacientes);

filaAtendimento(pacientes, operacao);
