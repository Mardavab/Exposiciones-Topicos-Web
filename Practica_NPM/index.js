#!/usr/bin/env node

const { Command } = require("commander");
const chalk = require("chalk");

const program = new Command();

function generarPassword(longitud = 10, opciones = {}) {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%&*()_+-=[]{}|;:,.<>?";

  let caracteres = letras;

  if (opciones.numbers) {
    // Solo números + letras (sin símbolos)
    caracteres = letras + numeros;
  } else if (opciones.noSymbols) {
    // Sin símbolos (letras + números)
    caracteres = letras + numeros;
  } else {
    // Por defecto: todo incluido
    caracteres = letras + numeros + simbolos;
  }

  let password = "";
  for (let i = 0; i < longitud; i++) {
    const random = Math.floor(Math.random() * caracteres.length);
    password += caracteres[random];
  }
  return password;
}

program
  .name("password-generator-cli")
  .description("Generador de contraseñas seguras")
  .argument("<longitud>", "Longitud de la contraseña")
  .option("--numbers", "Incluir solo números y letras (sin símbolos)")
  .option("--no-symbols", "Excluir símbolos especiales")
  .option("--only-numbers", "Generar contraseña solo con números")
  .option("--uppercase", "Usar solo letras mayúsculas")
  .action((longitud, opciones) => {
    const len = parseInt(longitud);

    if (isNaN(len) || len <= 0) {
      console.log(chalk.red("Error: La longitud debe ser un número positivo."));
      process.exit(1);
    }

    const pass = generarPassword(len, opciones);

    console.log(chalk.green("✔ Contraseña generada:"), chalk.yellow.bold(pass));
    console.log(chalk.gray(`Longitud: ${len} | Opciones: ${JSON.stringify(opciones)}`));
  });

program.parse();