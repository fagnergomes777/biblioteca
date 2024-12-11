import prompt from "prompt-sync";
import menuPrincipal from "../index.js";
import { dados } from "../../data/livros.js";

const input = prompt();

const livros = dados;

function listarTodosLivros() {
    console.log("+-----------------------------------+");
    console.log("| Lista de Livros                   |");
    console.log("+-----------------------------------+");
    livros.forEach(livro => {
        console.log(`| Id: ${livro.id} - Título: ${livro.titulo}`)
    });
    console.log("+-----------------------------------+");
}

function menuLivros() {
    const opcoes = [
        "+-----------------------------------+",
        "| Menu Livros                       |",
        "+-----------------------------------+",
        "| 1 - Cadastar Livro                |",
        "| 2 - Editar Livro                  |",
        "| 3 - Excluir Livro                 |",
        "| 4 - Listar todos os livros        |",
        "| 5 - Buscar livro por ID           |",
        "| 0 - Retornar ao menu principal    |",
        "+-----------------------------------+",
    ]
    const menu = opcoes.join("\n");
    console.log(menu);
    let opcao = input("* Digite a opção desejada: ");
    console.clear();
    switch (opcao) {
        case "0":
            menuPrincipal();
            break;
        case "1":

            break;
        case "4":
            listarTodosLivros();
            menuLivros();
            break;
        default:
            menuLivros();
    }
}

export default menuLivros;