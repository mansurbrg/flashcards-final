function  criarCartao(categoria, pergunta, resposta) {
    let container =document.getElementById(container)
    let cartao = document.createElement(article)
    cartao.className = cartao
    let respostaEstaVisivel = false
    function viraCartao () {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toogle('active', respostaEstaVisivel)
        }
        cartao.addEventListener('click', viraCartao)
}
cartao.innerHTML = `
<div "class="cartao__conteudo">
<h3>${categoria}</h3>
<div "class="cartao_conteudo_pergunta">
<p>${pergunta}</p>
</div>
<div "class="cartao_conteudo_resposta">
<p>${resposta}</p>
</div>
</div>
`
container.appendChild(cartao)