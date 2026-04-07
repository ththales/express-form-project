// Importando dependências
import express from "express"; // Express.js
import { dirname } from "path"; // Caminho relativo
import { fileURLToPath } from "url"; // URL
import bodyParser from "body-parser"; // Middleware
import fs from "fs"; // File system
import bcrypt from "bcrypt"; // Hashes

const app = express(); // Criando o app Express
const port = 3000; // Definindo a porta do servidor
const __dirname = dirname(fileURLToPath(import.meta.url)); // Caminho relativo do projeto

app.use(bodyParser.urlencoded({ extended: true })); // Interpretar os dados enviados no corpo de requisição do form

// GET - Retornando página index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// POST - Formulário
app.post("/submit", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const passwordHash = await bcrypt.hash(password, 10);
    const data = `Username: ${username}\nPassword (Hash): ${passwordHash}\n`;

    // Escrevendo os dados em um arquivo
    fs.appendFile("log.txt", data, (err) => {
        if (err) {
            console.error(err);
            return res.send("Erro ao salvar.");
        }
    });

    res.send("Resposta recebida!");
})

// Escutando porta 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});