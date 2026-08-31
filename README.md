# Landing Page Imobiliária

Landing page em React + Vite com painel administrativo para demonstração.

## Tecnologias

- React
- Vite
- Lucide React
- CSS responsivo
- GitHub Actions + GitHub Pages

## Executar localmente

```bash
npm install
npm run dev
```

Depois acesse o endereço mostrado pelo Vite, normalmente `http://localhost:5173/`.

## Build de produção

```bash
npm run build
npm run preview
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `imobiliaria`.
2. Envie todos os arquivos deste projeto para a branch `main`.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment → Source**, selecione **GitHub Actions**.
5. Faça um novo `git push` para `main` ou execute o workflow manualmente em **Actions → Deploy para GitHub Pages → Run workflow**.
6. Após o workflow terminar, o GitHub mostrará o endereço publicado.

O `vite.config.js` usa `base: './'`, permitindo que o build seja servido em uma URL de projeto, como:

`https://SEU-USUARIO.github.io/imobiliaria/`

## Painel administrativo

O painel está disponível pelo botão **Painel** no site. A senha da demonstração é:

`123456`

### Importante

Esta versão é para demonstração. Os imóveis são armazenados no `localStorage` do navegador e as fotos cadastradas no painel são URLs externas. Para produção, substitua a autenticação de demonstração e o armazenamento local por uma API, banco de dados e armazenamento de imagens.

## WhatsApp

Edite a constante `WA` em `src/main.jsx` para colocar o número real do corretor no formato internacional, sem `+`, espaços ou símbolos.

Exemplo:

```js
const WA = '5567999999999'
```
