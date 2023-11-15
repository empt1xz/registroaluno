const registro = [];
const registrar = document.querySelector('input#register')
const resultado = document.getElementById('res')
const buscar = document.getElementById('search')
// Registro

registrar.addEventListener('click', () => {
    
    let input = document.querySelector('input#aluno') 

    if(input.value.length == 0){
        resultado.innerHTML = 'Digite um nome válido'
    } else {

    const nome = document.getElementById('aluno').value;
    registro.push(nome)

    resultado.innerHTML = 'Registrado Com Sucesso'
    $('#res').css({color: 'green'})
    }

});


// Busca

 buscar.addEventListener('click', () =>{
    resultado.innerHTML = '';
    $('#res').css({color: '#3d3d3d'})

    const alunoBusca = document.getElementById('aluno').value;

        if(registro.includes(alunoBusca)){
            resultado.innerHTML = 'Aluno está Registrado'
        } else {
            resultado.innerHTML = 'Aluno não encontrado'
        }
 });