# AluraFlix

AluraFlix é um projeto desenvolvido como parte do curso de formação front-end da Alura. Este desafio integra o programa ONE, com o objetivo de colocar em prática todos os conhecimentos de React adquiridos ao longo do curso.

## Descrição do Projeto

AluraFlix é uma plataforma que permite listar, registrar, eliminar e atualizar vídeos. Os vídeos são categorizados em três categorias: front-end, back-end e mobile.

- Caso não haja vídeos cadastrados em uma categoria, essa categoria não será exibida na página inicial.
- É possível editar ou deletar qualquer vídeo cadastrado.

## Tecnologias Utilizadas

- **React**
- **Vite**
- **JSON Server** (para simular uma API com (`db.json`)

## Funcionalidades

- **Cadastro de vídeos:** Adicione novos vídeos com título, categoria, imagem, descrição e URL do vídeo.
- **Listagem de vídeos:** Os vídeos são exibidos na página inicial, separados por categoria.
- **Edição de vídeos:** Edite as informações de um vídeo existente.
- **Remoção de vídeos:** Delete um vídeo da lista.
- **Categorias Dinâmicas:** Categorias sem vídeos cadastrados não são exibidas.

## Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/aluraflix.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd aluraflix
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie o servidor JSON:
    ```bash
    npx json-server --watch db.json --port 8000
    ```

5. Execute o projeto:
    ```bash
    npm run dev
    ```

6. Acesse o projeto no navegador:
    ```
    http://localhost:3000
    ```

## Demonstração

Confira o projeto em funcionamento [aqui](https://alura-flix-olive.vercel.app).

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para a nova feature (`git checkout -b feature/nova-feature`)
3. Commit as mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça o push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
