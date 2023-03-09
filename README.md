# Boilerplate para aplicações em NextJS

[_Instruction Manual (English Language)_](https://github.com/vini-cabral/boilerplate-darklight-nextjs#boilerplate-for-nextjs-applications)

Este é um projeto experimental, que oferece uma base de desenvolvimento Front-end em [NextJS](https://nextjs.org/), para a construção de telas com modo **dark/light**.

## Começando...

### Passo 1

Duplique o arquivo `.env.example` e renomeie a cópia para `.env.local`.

- Para o modo de cores da aplicação, em `NEXT_PUBLIC_COLORS_MODE` atribua o valor `app`. Veja como fazer:  
  `NEXT_PUBLIC_COLORS_MODE=app`

- Para o modo de cores protótipo (escala em cinza), em `NEXT_PUBLIC_COLORS_MODE` atribua qualquer valor diferente de `app`. Veja como fazer:  
  `NEXT_PUBLIC_COLORS_MODE=foo` ou `NEXT_PUBLIC_COLORS_MODE=`

### Passo 2

Baixe as dependências:

```bash
npm i
```

### Passo 3

Execute em modo de desenvolvimento:

```bash
npm run dev
```

**NOTA:**
Acesse a documentação oficial do NextJS: [https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started)

## Visão geral

O modo **dark/light** utiliza [_Context Api_](https://reactjs.org/docs/context.html) combinado com [_Styled Components_](https://styled-components.com/) e [_Sass_](https://sass-lang.com/).  
A parte lógica está encapsulada no seguinte provider: [ScreenModeProvider.tsx](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/src/context/ScreenModeProvider.tsx). Esse provider está aninhado em [AppProvider.tsx](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/src/context/AppProvider.tsx) que por sua vez envolve todas as [páginas/layout](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/src/pages/_app.tsx).  
As principais folhas de estilos estão centralizadas em [styles](https://github.com/vini-cabral/boilerplate-darklight-nextjs/tree/main/src/styles). Explore a vontade esses arquivos, porém **evite modificar** os arquivos em [**lib**](https://github.com/vini-cabral/boilerplate-darklight-nextjs/tree/main/src/styles/lib), pois os mesmos são essenciais para o correto funcionamento do modo **dark/light**.  
Em [\_app.tsx](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/src/pages/_app.tsx) o arquivo [preset.sass](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/src/styles/lib/preset.sass) deve ser a primeira folha de estilos a ser importada (`import "@/styles/lib/preset.sass";`).

### Modo de Cores

Se você não tiver um esquema de cores definido é possível utilizar um esquema em escala de cinza (Prototype Colors). Para isso, na [variável de ambiente](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/.env.example) atribua em `NEXT_PUBLIC_COLORS_MODE` qualquer valor diferente de `app` ou não atribua nada. Ao executar a aplicação será adotado um esquema de cores em cinza.  
Caso você atribua o valor `app`, (`NEXT_PUBLIC_COLORS_MODE=app`) será aplicado o modo de cores dos [Temas da Aplicação](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/src/styles/themes/index.ts).

### Dark/Light

Personalize os temas de sua aplicação em: [themes](https://github.com/vini-cabral/boilerplate-darklight-nextjs/tree/main/src/styles/themes)

# Boilerplate for NextJS applications

This is an experimental project, which provides a front-end development base in [NextJS](https://nextjs.org/), for building **dark/light** mode displays.

## Getting started...

### Step 1

Duplicate the `.env.example` file and rename the copy to `.env.local`.

- For the color mode of the application, in `NEXT_PUBLIC_COLORS_MODE` assign the value `app`. Here's how to do it:  
  `NEXT_PUBLIC_COLORS_MODE=app`

- For the prototype color mode (grayscale), in `NEXT_PUBLIC_COLORS_MODE` assign any value other than `app`. Here's how to do it:  
  `NEXT_PUBLIC_COLORS_MODE=foo` or `NEXT_PUBLIC_COLORS_MODE=`

### Step 2

Download the dependencies:

```bash
npm i
```

### Step 3

Run in development mode:

```bash
npm run dev
```

**NOTE:** Access the official NextJS documentation: [https://nextjs.org/docs/getting-started](https://nextjs.org/docs/getting-started)

## Overview

The dark/light mode uses [_Context Api_](https://reactjs.org/docs/context.html) combined with [_Styled Components_](https://styled-components.com/) and [_Sass_](https://sass-lang.com/).  
The logic part is encapsulated in the following provider: [ScreenModeProvider.tsx](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/src/context/ScreenModeProvider.tsx). This provider is nested in [AppProvider.tsx](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/src/context/AppProvider.tsx) which in turn wraps all [pages/layouts](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/src/pages/_app.tsx).  
The main style sheets are centrally located in [styles](https://github.com/vini-cabral/boilerplate-darklight-nextjs/tree/main/src/styles). Explore these files at your leisure, but **avoid modifying** the [**lib**](https://github.com/vini-cabral/boilerplate-darklight-nextjs/tree/main/src/styles/lib) files as they are essential for the correct functioning of **dark/light** mode.  
In [\_app.tsx](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/src/pages/_app.tsx) the file [preset.sass](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/src/styles/lib/preset.sass) must be the first stylesheet to be imported (`import "@/styles/lib/preset.sass";`).

### Colors Mode

If you do not have a color scheme defined you can use a grayscale color scheme (Prototype Colors). To do this, in the [environment variable](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/.env.example) assign `NEXT_PUBLIC_COLORS_MODE` any value other than `app` or do not assign anything. When running the application a gray color scheme will be adopted.  
If you assign the value `app`, (`NEXT_PUBLIC_COLORS_MODE=app`) the [Application's Themes](https://github.com/vini-cabral/boilerplate-darklight-nextjs/blob/main/src/styles/themes/index.ts) color mode will be applied.

### Dark/Light

Customize the themes of your application in: [themes](https://github.com/vini-cabral/boilerplate-darklight-nextjs/tree/main/src/styles/themes)
