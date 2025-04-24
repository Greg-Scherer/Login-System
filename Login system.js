/* Sistema de notas

let nota = 7;

const ps = require('prompt-sync');
const prompt = ps();
let number = parseInt(prompt('Escreva a nota do aluno: '));

if (number >= 7) {
    console.log('aprovado');
}
else {
    console.log('reprovado');
}

*/ 
/* lado dos triangulos e verificador

const ps = require('prompt-sync');
const prompt = ps();

let lado = parseInt(prompt('Digite o primeiro lado: '));
let lado2 = parseInt(prompt('Digite o segundo lado: '));
let lado3 = parseInt(prompt('Digite o terceiro lado: '));

if (lado + lado2 > lado3 && lado + lado3 > lado2 && lado2 + lado3 > lado) {
    if (lado === lado2 && lado2 === lado3) {
        console.log("Triângulo equilátero");
    }
    else if (lado === lado2 || lado2 === lado3 || lado === lado3) {
        console.log("Triângulo isósceles");
    }
    else {
        console.log("Triângulo escaleno");
    }
} else {
        console.log("Não é um triângulo");
    } 

/* 
*/ 
const ps = require('prompt-sync');
const prompt = ps();

let usuario = "Administrador"
let senha = "tungsahur"
let usuario2 = "Editor"
let senha2 = "tungsahurEdita"
let usuario3 = "Usuario"
let senha3 = "tungsahurusuario"

let usuarioDigitado = prompt("Digite o usuário: ");
let senhaDigitada = prompt("Digite a senha: ");

if (usuarioDigitado === usuario && senhaDigitada === senha) {
    console.log("Bem-vindo, Administrador!");
} else if (usuarioDigitado === usuario2 && senhaDigitada === senha2) {
    console.log("Bem-vindo, Editor!");
} else if (usuarioDigitado === usuario3 && senhaDigitada === senha3) {
    console.log("Bem-vindo, Usuário!");
} else {
    console.log("Usuário inexistente ou senha incorreta.");

    
}  
