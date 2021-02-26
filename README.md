# desafio_pi-code

## Aplicação MLPR
### Melhores livros para lembrar

Nessa aplicação é possível listar seus livros favoritos pré-cadastrados,
cadastrar novos livros, procurar pelos seus livros favoritos e remover seus livros da lista.

[Deploy do frontend](https://serene-colden-18f7d3.netlify.app)

OBS: Está sem as funcionalidades, somente o visual.

### Para rodar a aplicação e testar as funcionalidades é necessário seguir os passos abaixo.

## Instruções para rodar o backend do app

### Entre na pasta backend

### Execute o comando
> yarn
#### ou
> npm install

### Crie um container postgres no docker.
> docker run --name desafio-picode -e POSTGRES_PASSWORD=root -p 5434:5432 -d postgres

### Rode a migration com o comando:
> yarn typeorm migration:run

### Rode a aplicação com:
> yarn dev:server


## Instruções para rodar o frontend do app

### Entre na pasta frontend

### Execute o comando
> yarn
#### ou
> npm install

### Rode a aplicação com:
> yarn start
