import menuLivros from "./livros/livros.js";
import prompt from "prompt-sync"

function menuPrincipal() {
    const input = prompt();
    const opcoes = [
        "1 - Menu Livros",
        "2 - Menu Usuarios",
        "3 - Menu Emprestimos",
        "0 - Sair"
    ]
    const Menu = opcoes.join("\n")
    console.log(Menu);
    let opcao = input("Digite a opção desejada: ");
    switch (opcao) {
        case "1":
            menuLivros();
            break;
        default:
            menuPrincipal();
    }
}

export default menuPrincipal;

menuPrincipal();