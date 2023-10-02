
function calculaIdade() {
    // Obter os valores das datas de nascimento e data atual
    var dataNascimento = new Date(document.getElementById("dataNascimento").value);
    var dataAtual = new Date(document.getElementById("dataAtual").value);

    // Calcular a diferença em milissegundos entre as datas
    var diferencaEmMilissegundos = dataAtual - dataNascimento;

    // Calcular a idade em dias
    var idadeEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    // Calcular a idade em semanas
    var idadeEmSemanas = Math.floor(idadeEmDias / 7);

    // Calcular a idade em meses
    var dataNascimentoMes = dataNascimento.getMonth() + 1; // Adiciona 1 porque os meses são indexados a partir de 0
    var dataAtualMes = dataAtual.getMonth() + 1;
    var idadeEmMeses = (dataAtual.getFullYear() - dataNascimento.getFullYear()) * 12 + (dataAtualMes - dataNascimentoMes);

    // Exibir o resultado na div de resultado
    var nome = document.getElementById("nome").value
    var idadeEmAnos = diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365)
    var numeroSemVirgula = parseInt(idadeEmAnos)
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Nome: " + nome + "<br>Idade em anos: " + numeroSemVirgula + "<br>Idade em dias: " 
                            + idadeEmDias + "<br>Idade em semanas: " + idadeEmSemanas + 
                            "<br>Idade em meses: " + idadeEmMeses;
}

function carregaData(){
    const hoje = new Date()
    hoje.toISOString().split('T')[0]
    //console.log(hoje.toISOString().split('T')[0])
    document.getElementById('dataAtual').value = hoje.toISOString().split('T')[0]

}
