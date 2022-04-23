<h1 align="center">
  <img alt="IgNews" title="IgNews" src="https://user-images.githubusercontent.com/79451027/164893893-60ddf749-ba88-4f30-baa8-d63209e46901.svg" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="IgNews" src="https://user-images.githubusercontent.com/79451027/164893743-200753fe-944f-44cc-bb10-a646a65d8898.png" width="100%">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Projeto

O "IgNews" é um blog de tecnologia aonde o usuário necessita de uma assinatura ativa para poder ter acesso completo aos conteúdos publicados. Caso contrário, o usuário será impedido de ler os artigos até o final devido ao paywall implementado. Um dos principais objetivos desse projeto foi construir uma aplicação serverless.

Foram implementados:

- A autenticação através de login social do NextAuth.
- Utilizado o FaunaDB como banco de dados.
- Utilizado a API do Stripe para o processamento de pagamentos e monitoramento dos webhooks caso a assinatura do usuário sofra alteração.


## 🚀 Como executar

- Clone o repositório
- Instale as dependências com `yarn`
- Inicie o servidor com `yarn dev`

Agora você pode acessar [`localhost:3000`](http://localhost:3000) do seu navegador.

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
