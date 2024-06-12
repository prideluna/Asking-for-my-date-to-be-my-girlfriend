document.getElementById('botao').addEventListener('click', function() {
    var mensagem = document.getElementById('mensagem');
    var botoesResposta = document.getElementById('botoes-resposta');
    
    mensagem.classList.toggle('oculto');
    botoesResposta.classList.toggle('oculto');
});

document.getElementById('sim').addEventListener('click', function() {
    //alert('Você clicou em "Sim"! Que maravilha!');
    var coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.innerHTML = '💜<br><span>Te amo</span>';
    document.body.appendChild(coracao);
});

document.getElementById('nao').addEventListener('mouseover', function() {
    this.style.display = 'none';
});
