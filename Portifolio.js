/* criar a função que esta sendo chama no form para validação
1)Palavra function + ()nome da função sem parâmeto
2)Abra a função->{}
3)Obtenção de valores(criar variaveis) dos campos inseridos nos pelo usuários:
4)Impedir o envio do form, caso o usuário dixe algum campo vazio...(if)*/

//Ontenção de valores inserido pelo usuário nos campos do form
function validar(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome == ""){
        alert('Por favor, digite seu nome');
        return false;//Impede o envio do formulário
}

if (email == ""){
    alert('Por favor, digite seu nome');
    return false;//Impede o envio do formulário
}

if (mensagem == ""){
    alert('Por favor, digite seu nome');
    return false;//Impede o envio do formulário
}
//Gravar os cookies codificados
document.cookie = `nome=${encodeURIComponent(nome)}`;
document.cookie = `email=${encodeURIComponent(email)}`;
document.cookie = `mensagem=${encodeURIComponent(mensagem)}`;


// Enviar o form validado
return true

}
