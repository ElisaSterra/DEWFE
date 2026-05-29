let contador = 0;

function adicionarTarefa() {
    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById('mensagem');

    let tarefa = inputElement.value;

    if (tarefaValida(tarefa)) {
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;

        const listaTarefas = document.getElementById("lista_tarefas");
        listaTarefas.appendChild(novaTarefa);

        mensagemElement.textContent = "Adicionado com sucesso!";
        mensagemElement.style.color = 'green';

        contador++;
        atualizarVisibilidadeBotao();   
    } else {
        mensagemElement.textContent = "Tarefa inválida, redigite";
        mensagemElement.style.color = 'red';
    }

    inputElement.value = "";
    inputElement.focus();
}

function tarefaValida(tarefa) {
    return tarefa.trim().length >= 5;
}

function excluirTodos() {
    const listaTarefas = document.getElementById("lista_tarefas");

    if (contador === 0) {
        alert("Não há tarefas para excluir!");
        return;
    }

    if (confirm("Tem certeza que deseja excluir TODAS as tarefas?")) {
        listaTarefas.innerHTML = "";
        contador = 0;
        
        const mensagemElement = document.getElementById('mensagem');
        mensagemElement.textContent = "Todas as tarefas foram excluídas.";
        mensagemElement.style.color = 'red';

        atualizarVisibilidadeBotao();   
    }
}

function atualizarVisibilidadeBotao() {
    const botaoExcluir = document.getElementById('btn_excluir_todos');
    
    if (contador > 0) {
        botaoExcluir.style.display = 'block';   
    } else {
        botaoExcluir.style.display = 'none';   
    }
}