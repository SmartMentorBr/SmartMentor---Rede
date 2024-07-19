# SmartMentor - Rede

Pretendemos atuar utilizando a tecnologia react, com backend em node e bd em Mongodb integrando recursos de AI via dialogflow, estrutura de machine learning com python e legado em PHP

## Requisitos

- Node
- React
- Grunt (NPM)
- Sass (Gem)

Preparação:

`> npm install -g grunt-cli`  -> Instala Grunt
`> gem install sass`          -> Instala o Sass

Dependencias:

Para instalar as dependencias (grunt):

Do diretório do projeto:
`> npm install`

## Distribuição

Todo o cógido é salvo em `_ativos_ui`, Use o grunt para compilar código para
distribuição (salvo em dist). O sistema automatiza compilação de Sass e ES6
e minifica CSS, JS e HTML.


Opções:

`> grunt`                 -> Complia e minifica tudo (html, js, Sass e Imgs)
`> grunt script`          -> Concatena, compila ES6 e minifica JS
`> grunt php`             -> Copia e minifica os documentos PHP.
                              NOTA: Minifica comm HTMLMIN
`> grunt css`             -> Compila e minifica Sass
`> grunt img`             -> Copia e comprime imagens

`> grunt watch`           -> Executa os comandos abaixo automaticamnete:
`> grunt watch:css`       -> Compila Sass automaticamente
`> grunt watch:php`       -> Copia
`> grunt watch:script`    -> Concatena, comipla e minifica scripts automaticamente

## Padrões

Para ver a biblioteca de padrões:

[Padrões](./_ativos_ui/_padroes.html)

Não pode ser vista pelo browser.

## CSS

O CSS usa o bootstrap, que é compilado de Sass e transformado com postcss para
compatibilidade com browsers antigos e minigicado

Edite os seguintes documentos:

- `src/scss/_custom.scss`         -> As variáveis relacionadas ao boostrap
- `src/scss/_smartmentor.scss`    -> Definições específicas ao SmartMentor


## Branching
Sempre ao se desenvolver alguma coisa, deve-se usar as sguintes convenções.

`ref = conjunto de letras que descreve uma determinada funcionalidade`

Exemploes:
`fix/ordem-topicos-pagina-empresa`

* `feat/ref` - Features novas a serem adicionadas no relatto.
* `fix/ref` - Correção de bugs.
* `rfc/ref` - Refactoring de código.
* `wip/ref` - Working In Progress, uma funcionalidade/correção/refact fora do escopo, partindo de uma iniciativa dos desenvolvedores e que pode demandar um tempo, a qual não possui deadline.

## Deploy para a produção.
Para uam determinada funcionaldiade/correçao/melhoria chegar a produção, ela deve seguir o seguinte flow:

* Criação da branch da funcionalidade/correção/melhoria a partir da branch `master`.
* Deploy no `nightly`, e esperar validação do P.O.
* Depois da validação do P.O, fazer merge da funcionalidade/correção/melhoria direto para a `master`.
* Após a validação em produção, apagar a branch da funcionalidade/correção/melhoria usando ` git branch -d branchname`.

## TODO:
* PEP-8-ficar o back-end.
* WIP: Criar uma API no back-end.
* WIP: Ações do relatto sem refresh.
* Criar padrões para o JavaScript.

## Requisitos

- Node
- React
- Grunt (NPM)
- Sass (Gem)

Preparação:

`> npm install -g grunt-cli`  -> Instala Grunt
`> gem install sass`          -> Instala o Sass

Dependencias:

Para instalar as dependencias (grunt):

Do diretório do projeto:
`> npm install`

## Distribuição

Todo o cógido é salvo em `_ativos_ui`, Use o grunt para compilar código para
distribuição (salvo em dist). O sistema automatiza compilação de Sass e ES6
e minifica CSS, JS e HTML.


Opções:

`> grunt`                 -> Complia e minifica tudo (html, js, Sass e Imgs)
`> grunt script`          -> Concatena, compila ES6 e minifica JS
`> grunt php`             -> Copia e minifica os documentos PHP.
                              NOTA: Minifica comm HTMLMIN
`> grunt css`             -> Compila e minifica Sass
`> grunt img`             -> Copia e comprime imagens

`> grunt watch`           -> Executa os comandos abaixo automaticamnete:
`> grunt watch:css`       -> Compila Sass automaticamente
`> grunt watch:php`       -> Copia
`> grunt watch:script`    -> Concatena, comipla e minifica scripts automaticamente

## Padrões

Para ver a biblioteca de padrões:

[Padrões](./_ativos_ui/_padroes.html)

Não pode ser vista pelo browser.

## CSS

O CSS usa o bootstrap, que é compilado de Sass e transformado com postcss para
compatibilidade com browsers antigos e minigicado

Edite os seguintes documentos:

- `src/scss/_custom.scss`         -> As variáveis relacionadas ao boostrap
- `src/scss/_smartmentor.scss`    -> Definições específicas ao SmartMentor
