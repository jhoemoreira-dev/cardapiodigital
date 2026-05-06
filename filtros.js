const botoes = document.querySelectorAll('.filtro-btn');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const categoria = botao.getAttribute('data-categoria');
    filtrar(categoria);
  });
});

function filtrar(categoria){
  const itens = document.querySelectorAll('.item');

  itens.forEach(item => {
    const cat = item.getAttribute('data-categoria');

    if(categoria === 'todas' || cat === categoria){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


