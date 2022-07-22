# To Do List com ReactJS

## Descrição do projeto

Nesse projeto utilizei o mesmo To Do List de um projeto anterior: https://github.com/carolineambar/todolist, porém com a biblioteca ReactJS para as funcionalidades com o intuito de aprender e aplicar o que aprendi sobre essa tecnologia. Abaixo segue as instruções para rodar a aplicação onde será necessário rodar no seu terminal o JSONServer como servidor e o React.

## Tecnologias usadas:

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="40" height="40" />



Esse projeto foi criado com React [Create React App] (https://github.com/facebook/create-react-app).

## Começando com JSON Server 

Para rodar o projeto em sua máquina é necessário utilizar um servidor, como sugestão poderá utilizar o Json Server. Abaixo segue as instruções para instalar e iniciar o Json Server a partir do seu terminal para rodar a aplicação:

Install JSON Server

```
npm install -g json-server
```

Create a db.json file with some data

```
{
  "notes": [
    {
      "value": "Tarefa 1",
      "id": 1
    },
    {
      "value": "Tarefa 2",
      "id": 2
    }
  ]
}
```

Start JSON Server

```
json-server --watch db.json
```

Now if you go to http://localhost:3000/notes, you'll get

```
[
  {
    "value": "Tarefa 1",
    "id": 1
  },
  {
    "value": "Tarefa 2",
    "id": 2
  }
]
```

## Começando com React

Você precisa ter [NPM](https://nodejs.org/en/) ou [Yarn](https://yarnpkg.com/pt-BR/) instalado para rodar essa aplicação.

#### Clone esse projeto

```
  git clone https://github.com/carolineambar/todolistreact
```

#### Entre na pasta

```
  cd todolistreact
```

#### Instale dependencias

```
  yarn
```

or

```
  npm install
```

#### Para rodar!

```
  yarn start
```

or

```
  npm start
```

## Estrutura do projeto

```shell
|-- public
|---- favicon.ico
|---- index.html
|---- logo192.png
|---- logo512.png
|---- manifest.json
|---- robots.txt
|-- src
|---- api
|------ config.js
|---- assets
|------ pencil.png
|------ plus.png
|------ trash.png
|---- components
|------ Form
|-------- Form.css
|-------- Form.js
|------ Item
|-------- Item.css
|-------- Item.js
|------ List
|-------- List.js
|------ Title
|-------- Title.css
|-------- Title.js
|---- App.css
|---- App.js
|---- index.js
|---- logo.svg
|---- reset.css
|---- variables.css
|-- db.json
|-- package-lock.json
|-- package.json
```

Na pasta ```public``` estão as configurações do React.

Na pasta ```src``` estão as pastas de ```api``` onde está as configurações do backend, a ```assets``` onde estão os ícones utilizados nos botões e ```components``` onde estão os componentes da aplicação subdivididos com documentos js para funcionalidade e css para os estilos além dos arquivos de configurações de estilo, funcionalidade e o arquivo ```App.js``` onde ficou a aplicação principal.

Os demais arquivos são de configuração do Servidor como o ```db.json```.

## Futuras melhorias 

Atualmente para rodar o projeto é necessário rodar um servidor em sua máquina, como o JSON Server, porém como futura melhoria irei desenvolver o BackEnd desse projeto.
