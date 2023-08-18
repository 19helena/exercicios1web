let listaTarefas = []
        let lista = document.querySelector('ul')
        let botao = document.querySelector('button')
        let tarefa = document.querySelector('#idTarefa')

        botao.addEventListener('click', function(){
            listaTarefas.push(tarefa.value)
            console.log(listaTarefas);
            lista.innerHTML = ''
            listaTarefas.forEach((item, i)=>{
                lista.innerHTML += `<li>${item}<button onclick="apagar('${i}')">x</button></li>`
            })
        })

        function apagar(i){
            listaTarefas.splice(i, 1)
            lista.innerHTML = ''
            listaTarefas.forEach((item, i)=>{
                lista.innerHTML += `<li>${item}<button onclick="apagar('${i}')">x</button></li>`
            })
        }