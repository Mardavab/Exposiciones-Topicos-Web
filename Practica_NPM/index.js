#!/usr/bin/env node

const { Command } = require("commander");
const chalk = require("chalk");

const program = new Command();

function generarPassword(longitud = 10) {
    const caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

    let password = "";

    for (let i = 0; i < longitud; i++) {
        const random = Math.floor(Math.random() * caracteres.length);
        password += caracteres[random];
    }

    return password;
}

program
  .argument("<longitud>", "longitud de la contraseña")
  .action((longitud) => {
      const pass = generarPassword(longitud);
      console.log(chalk.green("Contraseña generada:"), pass);
  });

program.parse();