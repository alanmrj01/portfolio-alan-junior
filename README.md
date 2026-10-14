# Portfólio — Alan de Magalhães Raimundo Junior

Portfólio profissional responsivo com direção editorial escura, galeria horizontal de projetos, estudos de caso objetivos e um sistema de movimento baseado em GSAP, ScrollTrigger e View Transitions com fallback. Os textos estão em português e as fotografias contextuais possuem origem e licença documentadas.

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

- Home editorial na ordem Header → Hero → Latest Works → Stacks & Tools → Ecossistema → Sobre → Serviços → Contato → Footer.
- Carrossel autoral com escala, profundidade e continuidade visual, controlado por setas, teclado e gestos de toque.
- Página `/projetos`: 14 cases e filtro por categoria.
- Página `/projetos/:id`: abertura, desafio e solução, destaques técnicos, tecnologias, entregas e próximo projeto.
- Página `/sobre`: apresentação profissional provisória.
- Navegação mobile, contatos (e-mail, WhatsApp, LinkedIn), transições entre rotas, animações com GSAP/ScrollTrigger e suporte a movimento reduzido.
- Capas responsivas em WebP para os 14 projetos, com carregamento prioritário ou lazy loading conforme a posição.
- Separação de conteúdo e interface em TypeScript para fácil manutenção.

## Gestão de conteúdo

O arquivo `src/data/projects.ts` contém todos os estudos de caso em um único array tipado `projects`. Para editar um projeto, localize seu `id` e altere os campos. O texto foi redigido de forma cautelosa: nenhuma porcentagem de melhoria/ganho é inventada.

**Imagens:** cada projeto define `image`, `imageSmall`, `imageAlt`, `imagePosition` e `photoCredit`. As 28 variantes WebP estão em `public/images/projects/`; fontes, fotógrafos e licença ficam em [`public/images/projects/ATTRIBUTION.md`](public/images/projects/ATTRIBUTION.md). As fotografias são identificadas na interface como imagens contextuais, não como capturas dos sistemas.

### Revisões editoriais importantes

1. Validar a contribuição específica de Alan em cada projeto colaborativo antes de publicar autoria individual ou cargos.
2. Validar se a menção pública à Embraer e sistemas internos de manutenção está autorizada; não publicar dados reais, credenciais, nomes de contratadas ou capturas sensíveis.
3. Confirmar stack e escopo exatos de **Contas a Pagar**; atualmente as tecnologias específicas não são afirmadas.
4. No **Alovia**, o fluxo de conexão oficial Meta/WhatsApp estava em validação; não informar implementação concluída até verificação.
5. Só publicar métricas comprovadas na fonte original; a redução superior a 80% do fluxo de Fichas de Manobra foi preservada por estar documentada no portfólio-base.
6. Atualizar a biografia de `/sobre` com formação, experiências e vínculos autorizados por Alan.
7. Manter a descrição dos projetos alinhada às páginas internas do Google Sites e revisar qualquer novo dado antes da publicação.

## Stack do portfólio

React 19, Vite, TypeScript, React Router, GSAP + ScrollTrigger, lucide-react, react-icons e CSS responsivo. Esta é a stack **do portfólio**, independente das stacks exibidas nos cases.

## Organização

```text
src/
  components/   Header, Footer, FeaturedCarousel, ProjectCard, PreviewArt, ScrollEffects
  data/         projects.ts  <- catálogo editável
  pages/        Home, Projects, ProjectDetail, About, NotFound
  styles/       global.css
public/images/projects/  <- capas WebP e créditos
netlify.toml
```

## Fontes e direitos

- Conteúdo-base: https://sites.google.com/view/portifolioalanmrj/home
- Referência visual: https://cristophermartins.com/
- Não copiar arquivos, imagens, identidade, código-fonte ou elementos proprietários do site de referência sem licença/autorização. A composição implementada utiliza identidade visual própria.
