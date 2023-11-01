# Fullstack Challenge 🏅 Space X API - Frontend

Projeto de Frontend elaborado como prova de conhecimentos para Coodesh, sendo complementado pelo projeto de backend o qual possui os dados que alimentam este projeto de frontend.
- Exibe os graficos dos dados onde estão os foguetes da Space X organizados por numero de lançamentos no grafico de pizza e o numero de lançamentos por ano de cada foguete organizado no grafico de barras.
- Um campo de pesquisa para filtrar os resultados exibidos na tabela
- Uma tabela descritiva sobre os dados dos lançamentos.
- Link da apresentação: https://www.loom.com/embed/10d9e7eecf6848aeb84f9e9248a8aac1
# Foram usados:
- ReactJS https://react.dev/
- react-chartjs-2 para os graficos https://react-chartjs-2.js.org/
- react-paginate https://github.com/AdeleD/react-paginate
- typescript-plugin-css-modules https://www.npmjs.com/package/typescript-plugin-css-modules

# instalação

Após clonar o repósitório utilizar o comando
```shell
  npm install
  npm start
```
Ou Utilizando o Docker, no diretório do Dockerfile executar os comandos
```shell
docker build . -t [nome da imagem que deseja criar]
docker run [nome da imagem que deseja criar]
```
No arquivo .env na raiz adicionar a variável REACT_APP_BACKEND_URL com a url do backend

