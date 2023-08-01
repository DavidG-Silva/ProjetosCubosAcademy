const agendarPaciente = (listaPacientes, paciente) => {
    listaPacientes.push(paciente);
    console.log(listaPacientes.join(', '))
}

const atenderPaciente = (listaPacientes) => {
    listaPacientes.shift();
    console.log(listaPacientes.join(', '));

}

const cancelarAtendimento = (listaPacientes, paciente) => {
    listaPacientes.splice(listaPacientes.indexOf(paciente), 1);
    console.log(listaPacientes.join(', '));

}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const paciente1 = 'Carlos';
const paciente2 = 'Ana';

console.log(pacientes);

console.log('Agendando o paciente', paciente1);
agendarPaciente(pacientes, paciente1);

console.log('Atendendo um paciente');
atenderPaciente(pacientes);

console.log('Cancelando o paciente', paciente2);
cancelarAtendimento(pacientes, paciente2);
