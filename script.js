fetch('https://gutendex.com/books/')
    .then(response => response.json())
    .then(data => {
        const lista = document.getElementById('lista-livros');

        data.results.slice(0, 5).forEach(livro => {
            const item = document.createElement('li');

            item.textContent = `${livro.title} - ${livro.authors[0]?.name ?? 'Autor Desconhecido'}`;

            lista.appendChild(item);
        });
    })
    .catch(error => console.error('Erro ao buscar os livros:', error));