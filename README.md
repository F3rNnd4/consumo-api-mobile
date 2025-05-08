# Animes Populares 🎥🗾

Este projeto é uma aplicação mobile desenvolvida em **React Native** que consome APIs para exibir informações sobre animes populares. Ele utiliza bibliotecas modernas como **Axios**, **Moti** e **React Native Reanimated** para criar uma experiência fluida e visualmente atraente.

## 📋 Funcionalidades

- Exibição de uma lista de animes populares consumindo a API do [Jikan](https://jikan.moe/).
- Skeleton loading animado para melhorar a experiência do usuário durante o carregamento.
- Cartões estilizados com informações detalhadas sobre cada anime.
- Design responsivo e otimizado para dispositivos móveis.

## 🚀 Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile.
- **Expo**: Ferramenta para simplificar o desenvolvimento e deploy de apps React Native.
- **Axios**: Biblioteca para requisições HTTP.
- **Moti**: Biblioteca para animações simples e performáticas.
- **React Native Reanimated**: Biblioteca para animações avançadas.
- **Jikan API**: API para informações sobre animes.

## 🌐 APIs Utilizadas

- **Jikan API**: https://jikan.moe/

## Como rodar o projeto

- Clone o repositório:
```
git clone https://github.com/seuusuario/consumo-api-anime.git
cd consumo-api-anime
```

- Instale as dependências:
```
npm install
```

- Inicie o app:
```
npx expo start
```

## 📂 Estrutura do projeto

```
.
├── app/
│   └── index.js              # Tela inicial (lista de animes)
├── components/
│   ├── AnimeCard.js          # Componente visual dos animes
│   └── SkeletonCard.js       # Skeleton animado para loading
├── assets/                   # (opcional) imagens e ícones
├── package.json
└── README.md
```