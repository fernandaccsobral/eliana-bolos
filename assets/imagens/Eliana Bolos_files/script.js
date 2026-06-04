const categorias = document.querySelectorAll(".produto-item");

categorias.forEach(categoria => {

    categoria.addEventListener("click", () => {

        const produtoSelecionado =
            categoria.dataset.produto;

        document
            .querySelectorAll(".produto")
            .forEach(produto => {

                produto.classList.add("inativo");

            });

        document
            .querySelectorAll(".produto-item")
            .forEach(item => {

                item.classList.remove("ativo");

            });

        document
            .getElementById(produtoSelecionado)
            .classList.remove("inativo");

        categoria.classList.add("ativo");

    });

});