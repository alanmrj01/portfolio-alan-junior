export type ProjectCategory = 'Sistemas & IA' | 'Business Intelligence' | 'Automação' | 'Games & Experiências'
export type VisualKind = 'system' | 'ai' | 'analytics' | 'automation' | 'financial' | 'game'

export interface PortfolioProject {
  id: string
  number: string
  name: string
  eyebrow: string
  subtitle: string
  summary: string
  category: ProjectCategory
  visual: VisualKind
  yearLabel?: string
  featured?: boolean
  featuredGalleryImage?: number
  imageAlt: string
  imagePosition?: string
  photoCredit: {
    author: string
    sourceUrl: string
    licenseUrl: string
  }
  context: string
  challenge: string
  solution: string
  features: string[]
  technologies: string[]
  impacts: string[]
  note?: string
}

/**
 * Fonte editorial: conteúdo público inicial em Google Sites + descrições de projetos
 * fornecidas ao longo da conversa. Não incluir números de resultados não comprovados.
 * Campos de tecnologia sob revisão não recebem ferramentas inferidas.
 * As capas editoriais são fotografias contextuais do Pexels; os destaques usam
 * telas reais selecionadas das galerias fornecidas pelo autor. Todos os nomes,
 * valores, indicadores e registros nelas exibidos são inteiramente fictícios.
 * A planilha de autoria e licença está em public/images/projects/ATTRIBUTION.md.
 */
export const projects: PortfolioProject[] = [
  {
    id: 'erp-central-monitoramento', number: '01', name: 'ERP — Central de Monitoramento',
    eyebrow: 'SISTEMAS CORPORATIVOS / MANUTENÇÃO INDUSTRIAL',
    subtitle: 'Automação, inteligência artificial e integrações para a manutenção industrial.',
    summary: 'ERP operacional para equipes de manutenção que reúne automações, validações, análise de dados e integração ao Fracttal One em um único ambiente.',
    category: 'Sistemas & IA', visual: 'system', featured: true, featuredGalleryImage: 1,
    imageAlt: 'Equipamentos e tubulações em uma instalação industrial moderna', imagePosition: 'center',
    photoCredit: { author: 'Anna Shvets', sourceUrl: 'https://www.pexels.com/photo/an-industrial-machine-in-a-factory-5953729/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'No contexto de processos de manutenção industrial associados à Embraer, a rotina envolve alto volume de solicitações, ordens de serviço, ativos e planos preventivos. Parte dos procedimentos internos exigia etapas repetitivas que não eram resolvidas diretamente pelo fluxo de trabalho adotado no Fracttal One.',
    challenge: 'Diminuir a fricção entre os procedimentos internos e a plataforma de manutenção, mantendo controle, rastreabilidade e critérios consistentes para operações de alto volume.',
    solution: 'Desenvolvimento de um ERP operacional que centraliza automações, rotinas de verificação, classificação híbrida de chamados e relatórios analíticos. A solução combina integração por API, automação supervisionada e processamento de dados para apoiar a operação.',
    features: [
      'Conversão de solicitações em ordens de serviço com pré-validação, classificação e apoio de IA.',
      'Associação e desassociação de ativos em planos de manutenção preventiva.',
      'Atualização de registros de ativos e execução de rotinas sobre tarefas de planos preventivos.',
      'Verificação e conversão de ordens por planilhas, com regras específicas e logs de processamento.',
      'Central Analytics com indicadores, relatórios por empresa, exportação e compartilhamento controlado.',
      'Automações isoladas com acompanhamento de progresso, cancelamento e tratamento de falhas.'
    ],
    technologies: ['Python', 'Flet', 'FastAPI', 'Fracttal One API', 'Playwright', 'React', 'TypeScript', 'Excel', 'Backblaze B2', 'IA aplicada'],
    impacts: ['Menos operações repetitivas', 'Regras de decisão auditáveis', 'Melhor visibilidade operacional', 'Integração entre dados e execução'],
    note: 'Case de projeto colaborativo. Os dados operacionais, clientes e evidências visuais devem ser apresentados somente com autorização.'
  },
  {
    id: 'ia-conversao-solicitacoes', number: '02', name: 'IA — Classificação de Solicitações',
    eyebrow: 'INTELIGÊNCIA ARTIFICIAL / MOTOR DE REGRAS',
    subtitle: 'IA aplicada com critérios determinísticos, não uma caixa-preta.',
    summary: 'Módulo híbrido para classificar chamados de manutenção com regras verificáveis, apoio de IA e validação antes da conversão em ordens de serviço.',
    category: 'Sistemas & IA', visual: 'ai', featured: true, featuredGalleryImage: 3,
    imageAlt: 'Fotografia macro de uma placa de circuito vermelha', imagePosition: 'center',
    photoCredit: { author: 'Sergei Starostin', sourceUrl: 'https://www.pexels.com/photo/red-and-black-computer-microprocessor-6636497/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'Solicitações de manutenção chegam em formatos textuais heterogêneos, nem sempre associadas corretamente ao equipamento, à instalação ou ao local.',
    challenge: 'Identificar referências técnicas de forma confiável, respeitando hierarquia de evidências, diferenças de pavimento e ambiguidades de localização.',
    solution: 'Pipeline de pré-validação determinística que cruza códigos, contexto e referências técnicas; casos inconclusivos podem seguir para análise assistida por IA e validação humana.',
    features: [
      'Prioridade de evidências: equipamento específico antes de instalação específica e localização genérica.',
      'Validação de código, localização, pavimento, contexto, referência e sinais contraditórios.',
      'Classificação com nível de confiança, justificativas e trilha de auditoria.',
      'Encaminhamento de casos ambíguos para IA ou revisão humana.',
      'Integração com processamento de solicitações e criação de ordens na plataforma de manutenção.'
    ],
    technologies: ['Python', 'Fracttal One API', 'Motor de regras determinísticas', 'IA aplicada'],
    impacts: ['Priorização de precisão e rastreabilidade', 'Redução de associações incorretas', 'Critérios técnicos explícitos', 'Apoio à decisão humana'],
    note: 'É um módulo destacado do ERP Central de Monitoramento, não uma implantação independente.'
  },
  {
    id: 'bi-manutencao-industrial', number: '03', name: 'BI — Manutenção Industrial',
    eyebrow: 'BUSINESS INTELLIGENCE / OPERAÇÕES',
    subtitle: 'Indicadores operacionais conectados às informações de manutenção.',
    summary: 'Dashboard para lideranças de manutenção acompanharem backlog, recursos, confiabilidade, riscos e custos a partir de dados integrados ao Fracttal One.',
    category: 'Business Intelligence', visual: 'analytics', featured: true, featuredGalleryImage: 2,
    imageAlt: 'Profissional de manutenção analisando informações em um tablet na fábrica', imagePosition: 'center 38%',
    photoCredit: { author: 'Sergey Sergeev', sourceUrl: 'https://www.pexels.com/photo/engineer-in-industrial-factory-using-tablet-32845694/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'A liderança técnica precisa consolidar e analisar ordens, recursos, prazos, contratos e desempenho de equipamentos.',
    challenge: 'Transformar registros operacionais dispersos em uma visão de gestão, com recortes por unidade, contrato, equipamento e prestador.',
    solution: 'Construção de painéis interativos de manutenção, organizando dados do Fracttal One em indicadores e comparações orientados à tomada de decisão.',
    features: ['Backlog e acompanhamento de ordens de serviço', 'Indicadores de homem-hora, aging e cumprimento de planos', 'Análises de MTBF, MTTR, riscos e custos', 'Filtros por unidade, contrato, equipamento e prestador', 'Navegação e detalhamento por indicadores'],
    technologies: ['Power BI', 'Fracttal One API'],
    impacts: ['Visão consolidada da operação', 'Identificação de gargalos', 'Melhor acompanhamento de prioridades']
  },
  {
    id: 'smart-organization', number: '04', name: 'Smart Organization — Distribuição',
    eyebrow: 'AUTOMAÇÃO / ORQUESTRAÇÃO DE FLUXOS',
    subtitle: 'Distribuição inteligente de demandas conforme contexto operacional.',
    summary: 'Automação para distribuir chamados de manutenção conforme dia, horário e disponibilidade, mantendo a alternância entre os responsáveis elegíveis.',
    category: 'Automação', visual: 'automation', featured: true,
    imageAlt: 'Centro industrial organizado com linhas de produção e estações de trabalho', imagePosition: 'center',
    photoCredit: { author: 'Freek Wolsink', sourceUrl: 'https://www.pexels.com/photo/modern-industrial-warehouse-interior-with-machinery-34207364/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'A operação recebe uma demanda aproximada de um chamado a cada sete minutos, e o encaminhamento depende da janela operacional, da disponibilidade e da alternância entre equipes.',
    challenge: 'Distribuir esse volume continuamente sem depender de triagem e encaminhamento manuais.',
    solution: 'Fluxo de automação orientado por condições e execução paralela, com distribuição cíclica e comunicação entre ferramentas.',
    features: ['Regras de distribuição por dia e horário', 'Checagem de disponibilidade e condições paralelas', 'Distribuição cíclica conforme critérios configurados', 'Integração com comunicação e registros de manutenção'],
    technologies: ['Power Automate', 'Outlook', 'Fracttal One'],
    impacts: ['Menor esforço na triagem', 'Maior consistência nas regras de encaminhamento', 'Padronização da distribuição']
  },
  {
    id: 'contas-a-pagar', number: '05', name: 'Contas a Pagar',
    eyebrow: 'CONSULTORIA / DADOS FINANCEIROS',
    subtitle: 'Informação financeira organizada para apoiar controle e análise.',
    summary: 'Solução de apoio ao financeiro para organizar contas a pagar, comparar valores previstos e realizados e concentrar a leitura gerencial do processo.',
    category: 'Business Intelligence', visual: 'financial', featured: true, featuredGalleryImage: 3,
    imageAlt: 'Mesa de trabalho com documentos financeiros, calculadora e computador', imagePosition: 'center',
    photoCredit: { author: 'RDNE Stock project', sourceUrl: 'https://www.pexels.com/photo/white-papers-on-the-table-7821708/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'Rotinas de contas a pagar dependem de registros consistentes e de uma visão clara sobre compromissos, diferenças e prazos.',
    challenge: 'Reduzir a dispersão das informações e facilitar a comparação entre o que estava previsto e o que foi efetivamente realizado.',
    solution: 'Estruturação de uma experiência de análise que reúne visão geral, filtros, comparativos e detalhamento por fornecedor para apoiar o acompanhamento financeiro.',
    features: ['Comparação entre valores previstos e realizados', 'Filtros para recortes do período e do processo', 'Indicadores e gráficos de variação', 'Detalhamento por fornecedor'],
    technologies: ['Análise de dados', 'Dashboards', 'Automação de processos financeiros'],
    impacts: ['Melhor organização dos registros', 'Visibilidade sobre o processo financeiro'],
    note: 'As ferramentas específicas e os módulos públicos deste projeto estão pendentes de validação editorial.'
  },
  {
    id: 'alovia', number: '06', name: 'Alovia',
    eyebrow: 'ATENDIMENTO E AGENDAMENTO / WHATSAPP',
    subtitle: 'Atendimento estruturado para uma rotina em que o técnico nem sempre pode responder na hora.',
    summary: 'A Alovia é uma aplicação mobile-first para micro e pequenas empresas de refrigeração atenderem clientes e organizarem agendamentos pelo WhatsApp, mesmo enquanto o profissional está executando outros serviços.',
    category: 'Automação', visual: 'system', featured: true, featuredGalleryImage: 6,
    imageAlt: 'Profissional usando smartphone em um ambiente corporativo com iluminação escura', imagePosition: 'center 35%',
    photoCredit: { author: 'Aathif Aarifeen', sourceUrl: 'https://www.pexels.com/photo/man-using-smartphone-in-office-19747893/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'Em pequenas operações de refrigeração, o mesmo profissional que executa os serviços também costuma responder novos contatos e organizar a agenda. Quando ele está em campo, o atendimento pode depender de uma disponibilidade que nem sempre existe.',
    challenge: 'Manter o atendimento e o agendamento organizados sem prometer respostas livres ou decisões fora das regras definidas pela própria empresa.',
    solution: 'A empresa configura serviços, informações, disponibilidade e regras de atendimento. A Alovia conduz a conversa dentro dessa estrutura determinística e conecta o fluxo à agenda e à operação apresentada no produto.',
    features: ['Painel com visão do canal, agenda e próximos atendimentos', 'Configuração de serviços, informações e regras da empresa', 'Atendimento automático estruturado por motor de regras determinísticas', 'Agenda para acompanhamento dos horários', 'Jornada de conexão e status do canal do WhatsApp'],
    technologies: ['React', 'FastAPI', 'Google Cloud Run', 'Netlify', 'WhatsApp Cloud API', 'Meta Business', 'Motor de regras determinísticas'],
    impacts: ['Atendimento continua organizado enquanto o profissional está em serviço', 'Agenda e informações operacionais reunidas na mesma experiência', 'Respostas limitadas às regras e aos dados configurados pela empresa'],
    note: 'As telas fornecidas mostram o canal do WhatsApp como conectado. O case descreve somente os fluxos visíveis e não apresenta o atendimento como inteligência artificial.'
  },
  {
    id: 'detailer-business', number: '07', name: 'Detailer Business',
    eyebrow: 'GAMES / SIMULAÇÃO EMPRESARIAL',
    subtitle: 'Uma experiência interativa sobre escolhas e consequências de negócio.',
    summary: 'Simulação de gestão para quem quer praticar decisões dos primeiros 90 dias de uma estética automotiva e observar as consequências de cada escolha.',
    category: 'Games & Experiências', visual: 'game', featured: true, featuredGalleryImage: 1,
    imageAlt: 'Profissional executando detalhamento de um automóvel em oficina', imagePosition: 'center 42%',
    photoCredit: { author: 'Bulat843', sourceUrl: 'https://www.pexels.com/photo/car-detailing-professional-working-indoors-37809542/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'A gestão de negócios envolve decisões sob restrições, prioridades concorrentes e consequências nem sempre imediatas.',
    challenge: 'Transformar esses dilemas em uma experiência interativa de aprendizagem, em que cada escolha produza uma reação no cenário.',
    solution: 'MVP de simulação dos primeiros 90 dias de uma empresa, partindo de um orçamento inicial e apresentando decisões e situações-problema.',
    features: ['Simulação de 90 dias com orçamento inicial de R$ 6 mil', 'Três decisões estratégicas e cinco situações-problema', 'Consequências e diagnóstico de decisões', 'Painel que se adapta ao percurso escolhido', 'Persistência local do progresso no navegador'],
    technologies: ['Lógica de simulação', 'Aplicação web', 'Web Storage (localStorage)', 'Design de interação'],
    impacts: ['Aprendizagem por tomada de decisão', 'Experiência com múltiplos caminhos', 'Feedback contextual ao jogador']
  },
  {
    id: 'bi-vendas', number: '08', name: 'BI — Análise de Vendas',
    eyebrow: 'BUSINESS INTELLIGENCE / COMERCIAL',
    subtitle: 'Transformando vendas em tendências, metas e decisões.',
    summary: 'Dashboard comercial para transformar uma base de vendas em leitura de lucro, faturamento, crescimento, clientes e desempenho por período.',
    category: 'Business Intelligence', visual: 'analytics',
    imageAlt: 'Terminal de ponto de venda em um ambiente comercial contemporâneo', imagePosition: 'center',
    photoCredit: { author: 'James Collington', sourceUrl: 'https://www.pexels.com/photo/modern-pos-system-in-coffee-shop-setting-30548311/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'Dados de vendas precisam ser organizados para apoiar leitura de tendências e desempenho comercial.',
    challenge: 'Reunir informações de faturamento, produtos e clientes em análises acessíveis para quem toma decisões.',
    solution: 'Dashboard em Power BI alimentado por dados do Excel, com filtros, comparativos e navegação por indicadores.',
    features: ['Análise de lucro e faturamento por produto e categoria', 'Comparação de ano atual e ano anterior', 'Acompanhamento de crescimento, clientes e metas', 'Filtros, tooltip e drill-down', 'Visualização de tendências comerciais'],
    technologies: ['Power BI', 'Excel'],
    impacts: ['Clareza sobre resultados', 'Leitura de tendências', 'Apoio ao planejamento comercial']
  },
  {
    id: 'bi-fluxo-caixa', number: '09', name: 'BI — Fluxo de Caixa',
    eyebrow: 'BUSINESS INTELLIGENCE / FINANÇAS',
    subtitle: 'Acompanhamento do movimento financeiro em uma visão gerencial.',
    summary: 'Dashboard financeiro para acompanhar entradas, despesas e saldos, identificar variações e apoiar decisões sobre a disponibilidade de caixa.',
    category: 'Business Intelligence', visual: 'financial',
    imageAlt: 'Calculadora sobre relatório financeiro com gráficos', imagePosition: 'center',
    photoCredit: { author: 'Bia Limova', sourceUrl: 'https://www.pexels.com/photo/office-desk-with-calculator-and-financial-report-33175669/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'Entender a evolução das disponibilidades e dos compromissos é essencial para a organização financeira.',
    challenge: 'Consolidar dados de diferentes períodos de forma clara e interpretável.',
    solution: 'Modelagem de indicadores e visuais com dados importados do Excel e rotina de atualização.',
    features: ['Entradas, despesas e saldo', 'Visões por período e categoria', 'Indicadores e alertas financeiros', 'Atualização de dados'],
    technologies: ['Power BI', 'Excel'],
    impacts: ['Visibilidade financeira', 'Acompanhamento de variações', 'Facilidade de análise temporal']
  },
  {
    id: 'bi-contratos', number: '10', name: 'BI — Gestão de Contratos',
    eyebrow: 'BUSINESS INTELLIGENCE / GOVERNANÇA',
    subtitle: 'Contratos e informações críticas em uma visão estruturada.',
    summary: 'Dashboard de gestão contratual para acompanhar status, tipos, disponibilidade, aportes e registros mensais a partir de dados centralizados.',
    category: 'Business Intelligence', visual: 'analytics',
    imageAlt: 'Mãos revisando e assinando um contrato empresarial', imagePosition: 'center',
    photoCredit: { author: 'Jakub Zerdzicki', sourceUrl: 'https://www.pexels.com/photo/business-contract-signing-in-office-setting-34862508/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'A gestão de contratos demanda acompanhamento de status, valores, disponibilidade e registros periódicos.',
    challenge: 'Oferecer um ponto único de observação das informações utilizadas pela gestão.',
    solution: 'Construção de dashboard integrado às informações do SharePoint, com organização de status e indicadores.',
    features: ['Status e tipo de contrato', 'Disponibilidade e acompanhamento de aportes', 'Registros mensais', 'Filtros e recortes gerenciais'],
    technologies: ['Power BI', 'SharePoint'],
    impacts: ['Maior organização documental', 'Acompanhamento de situação contratual', 'Leitura centralizada de informações']
  },
  {
    id: 'bi-facilities', number: '11', name: 'BI — Vendas & Facilities',
    eyebrow: 'BUSINESS INTELLIGENCE / INDICADORES',
    subtitle: 'Indicadores de operação e desempenho em um único ambiente.',
    summary: 'Dashboard comercial para uma operação de facilities analisar faturamento, quantidade vendida e desempenho por estado, perfil e produto.',
    category: 'Business Intelligence', visual: 'analytics',
    imageAlt: 'Ambiente corporativo contemporâneo com estações de trabalho', imagePosition: 'center',
    photoCredit: { author: 'Skylar Kang', sourceUrl: 'https://www.pexels.com/photo/workspace-with-modern-convenient-computers-in-daytime-6044819/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'A operação precisa transformar registros de vendas e consumo em indicadores acessíveis.',
    challenge: 'Sistematizar os dados em leituras por região, período, perfil e produto.',
    solution: 'Dashboard em Power BI com dados de Excel e visualizações para acompanhar desempenho.',
    features: ['Faturamento e quantidade vendida', 'Análises por estado e perfil', 'Identificação de produtos mais vendidos', 'Comparativos e filtros'],
    technologies: ['Power BI', 'Excel'],
    impacts: ['Acompanhamento comercial', 'Visão segmentada da operação']
  },
  {
    id: 'fichas-manobra', number: '12', name: 'Automação — Fichas de Manobra',
    eyebrow: 'AUTOMAÇÃO / PROCESSOS INDUSTRIAIS',
    subtitle: 'Digitalização e orquestração do fluxo de fichas operacionais.',
    summary: 'Fluxo digital de fichas de manobra que substitui papel e assinaturas manuais por registro, cinco aprovações sequenciais, notificações e histórico centralizado.',
    category: 'Automação', visual: 'automation',
    imageAlt: 'Sala técnica com painéis elétricos e equipamentos de controle', imagePosition: 'center',
    photoCredit: { author: 'Vjanodic WERSOV', sourceUrl: 'https://www.pexels.com/photo/industrial-control-room-with-electrical-panels-38217230/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'O processo dependia de papel e de cinco assinaturas sequenciais para registrar, validar, distribuir e arquivar cada ficha.',
    challenge: 'Reduzir o tempo de processamento sem perder a ordem das aprovações, o histórico e a rastreabilidade operacional.',
    solution: 'Fluxo digital que conecta Microsoft Forms, Power Automate, Outlook e SharePoint para conduzir cada aprovação e preservar o documento.',
    features: ['Coleta estruturada no Microsoft Forms', 'Cinco aprovações sequenciais orquestradas pelo Power Automate', 'Notificações automáticas pelo Outlook', 'Armazenamento, histórico e consulta no SharePoint'],
    technologies: ['Microsoft Forms', 'Power Automate', 'Outlook', 'SharePoint'],
    impacts: ['Redução superior a 80% no tempo de processamento', 'Eliminação do uso de papel no fluxo', 'Rastreabilidade e histórico das aprovações', 'Notificações automáticas em cada etapa']
  },
  {
    id: 'monitoramento-inteligente', number: '13', name: 'Automação — Monitoramento Inteligente',
    eyebrow: 'AUTOMAÇÃO / ROTINAS RECORRENTES',
    subtitle: 'Verificações programadas e alertas orientados a condições.',
    summary: 'Rotina automática que verifica diariamente o status das fichas de manobra, identifica pendências e aciona os responsáveis conforme cada condição.',
    category: 'Automação', visual: 'automation',
    imageAlt: 'Profissional operando um computador em uma sala de servidores', imagePosition: 'center',
    photoCredit: { author: 'panumas nikhomkhai', sourceUrl: 'https://www.pexels.com/photo/it-technician-working-in-data-center-server-room-37605911/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'Acompanhamentos frequentes exigem regularidade mesmo quando o time está ocupado com outras demandas.',
    challenge: 'Executar verificações recorrentes com previsibilidade e avisar apenas quando as condições configuradas exigirem atenção.',
    solution: 'Rotina complementar ao fluxo de fichas, agendada no Power Automate para consultar os registros e comunicar exceções sem intervenção diária.',
    features: ['Execução diária programada às 7h', 'Consulta dos registros no SharePoint', 'Condições em paralelo para contornar o limite de aninhamento', 'Alertas dinâmicos pelo Outlook', 'Rastreabilidade das rotinas'],
    technologies: ['Power Automate', 'SharePoint', 'Outlook'],
    impacts: ['Regularidade no acompanhamento', 'Redução de checagens repetitivas', 'Melhor visibilidade de exceções']
  },
  {
    id: 'consultoria-bi', number: '14', name: 'Consultoria em BI & Dashboards',
    eyebrow: 'CONSULTORIA / ESTRATÉGIA DE DADOS',
    subtitle: 'Do problema operacional à análise que orienta decisões.',
    summary: 'Consultoria para transformar perguntas operacionais em indicadores, modelos de dados e painéis gerenciais adequados ao contexto de decisão.',
    category: 'Business Intelligence', visual: 'analytics',
    imageAlt: 'Equipe reunida analisando dados em um computador portátil', imagePosition: 'center',
    photoCredit: { author: 'Yan Krukau', sourceUrl: 'https://www.pexels.com/photo/coworkers-looking-at-a-laptop-in-a-meeting-7698802/', licenseUrl: 'https://www.pexels.com/license/' },
    context: 'Nem toda necessidade analítica é resolvida por um dashboard pronto ou uma única ferramenta.',
    challenge: 'Traduzir perguntas de negócio em indicadores e apresentações úteis aos gestores.',
    solution: 'Consultoria para entendimento do processo, modelagem, escolha de métricas e construção de visualizações e rotinas de acompanhamento.',
    features: ['Mapeamento de indicadores e necessidades', 'Tratamento e organização de dados', 'Painéis em Power BI e outras abordagens conforme o projeto', 'Estruturação de visão gerencial'],
    technologies: ['Power BI', 'Excel', 'Power Platform'],
    impacts: ['Apoio à decisão', 'Mais clareza nas métricas', 'Conexão entre operações e análise']
  }
]

export const categories: Array<'Todos' | ProjectCategory> = [
  'Todos', 'Sistemas & IA', 'Business Intelligence', 'Automação', 'Games & Experiências'
]

export const primaryProjects = projects.filter(project => project.featured)
