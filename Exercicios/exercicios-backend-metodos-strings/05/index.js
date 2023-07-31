
function criptoCartao (cartao) {
    return cartao.slice(0,4) + cartao.slice(-4).padStart(12,'*');
}

const numeroCartao = '1111222233334444';

console.log(criptoCartao(numeroCartao));