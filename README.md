# Portfólio — Alan de Magalhães Raimundo Junior

Portfólio profissional responsivo com direção editorial escura, narrativa de estudos de caso, filtros por categoria e um sistema de movimento baseado em GSAP, ScrollTrigger e View Transitions com fallback. Textos em português e imagens **deliberadamente não definidas**, conforme solicitado.

## Executar localmente

Instale Node.js 20.19+ ou 22+, e na pasta do projeto execute:

```bash
npm install
npm run dev
```

No Windows, você também pode clicar em `INICIAR_PORTFOLIO.bat` para iniciar ou `GERAR_BUILD.bat` para gerar a versão de produção.

Abra o endereço informado pelo Vite. Para gerar produção:

```bash
npm run build
npm run preview
```

No Netlify: build `npm run build`, diretório `dist`. Já inclui `netlify.toml` para as rotas do React Router.

## Funcionalidades presentes

- Home editorial: apresentação profissional, destaques, especialidades e tecnologias.
- Página `/projetos`: 14 cases e filtro por categoria.
- Página `/projetos/:id`: narrativa de case com contexto, desafio, solução, fluxo conceitual, funcionalidades, stack e contribuições.
- Página `/sobre`: apresentação profissional provisória.
- Navegação mobile, contatos (e-mail, WhatsApp, LinkedIn), transições entre rotas, animações com GSAP/ScrollTrigger e suporte a movimento reduzido.
- Cards com arte abstrata própria e nome do projeto exibido uma única vez, sem fotografias ou telas fictícias.
- Separação de conteúdo e interface em TypeScript para fácil manutenção.

## Gestão de conteúdo

O arquivo `src/data/projects.ts` contém todos os estudos de caso em um único array tipado `projects`. Para editar um projeto, localize seu `id` e altere os campos. O texto foi redigido de forma cautelosa: nenhuma porcentagem de melhoria/ganho é inventada.

**Imagens:** Coloque arquivos aprovados em `public/images/` e adicione `image: '/images/arquivo.webp'` no projeto correspondente. Antes disso, a interface exibe arte abstrata explicitamente marcada como visual em preparação — não são capturas falsas de sistemas.

### Revisões editoriais importantes

1. Validar a contribuição específica de Alan em cada projeto colaborativo antes de publicar autoria individual ou cargos.
2. Validar se a menção pública à Embraer e sistemas internos de manutenção está autorizada; não publicar dados reais, credenciais, nomes de contratadas ou capturas sensíveis.
3. Confirmar stack e escopo exatos de **Contas a Pagar**; atualmente as tecnologias específicas não são afirmadas.
4. No **Alovia**, o fluxo de conexão oficial Meta/WhatsApp estava em validação; não informar implementação concluída até verificação.
5. Dados mensuráveis (economia de horas, taxas de assertividade, redução de retrabalho) ficam fora até possuir medições validadas.
6. Atualizar a biografia de `/sobre` com formação, experiências e vínculos autorizados por Alan.
7. Confirmar cada case presente nas páginas internas do Google Sites: a página Home pública foi verificada, mas o menu interno não estava integralmente acessível na recuperação externa. Os projetos detalhados também refletem contexto fornecido na conversa.

## Stack do portfólio

React 19, Vite, TypeScript, React Router, GSAP + ScrollTrigger, lucide-react, CSS responsivo. Esta é a stack **do portfólio**, independente das stacks exibidas nos cases.

## Organização

```text
src/
  components/   Header, Footer, ProjectCard, PreviewArt, ScrollEffects
  data/         projects.ts  <- catálogo editável
  pages/        Home, Projects, ProjectDetail, About, NotFound
  styles/       global.css
public/images/  <- imagens futuras
netlify.toml
```

## Fontes e direitos

- Conteúdo-base: https://sites.google.com/view/portifolioalanmrj/home
- Referência visual: https://cristophermartins.com/
- Não copiar arquivos, imagens, identidade, código-fonte ou elementos proprietários do site de referência sem licença/autorização. A composição implementada utiliza identidade visual própria.
