import prompt from "prompt-sync";
import menuPrincipal from "../index.js";

function cadastrarLivro() {
    const titulo = input("| *Titulo: ");
    const autor = input("| * Autor: ");
    const editora = input("| * Editora: ");
    const emprestado = false;
    menuLivros.push({ id, titulo, autor, editora, emprestado });
    console.log("+----------------------------------------+");
    console.log("| Livro cadastrado com sucesso!          |");
    console.log("+----------------------------------------+");
}

function editarLivros() {
    console.log("+----------------------------------------+");
    console.log("| Editar Livro                            ");
    console.log("+----------------------------------------+");
    const id = input("| * ID do livro: ");
    const index = livros.findIndex(livro => livro.id === id);
    if (index >= 0) {
        const titulo = input("| * Tiulo: ");
        const autor = input("| Autor: ");
        const editora = input("| * Editora: ")
        livros[index] = { ...livros[index], titulo, autor, editora };
        console.log("+-----------------------------------+");
        console.log("| Livro editado com sucesso!        |");
        console.log("+-----------------------------------+");
    } else {
        console.log("+-----------------------------------+")
        console.log("| Livro não encontrado!             |")
        console.log("+-----------------------------------+")
    }
}
function listarTodosLivros() {
}

function menuLivros() {
    const input = prompt();
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
        default:
            menuPrincipal();
    }
}

export default menuLivros;


// {
//     id: 1;
//     titulo: "Harry Potter";
//     autor: "J.K. Rowling";
//     editora: "Rocco";
//     emprestado: false
// }