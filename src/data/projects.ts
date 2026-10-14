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
  image?: string
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
 * Campos de tecnologia sob revisão são omitidos até confirmação.
 * Imagens somente quando aprovadas; colocar em public/images/ e preencher `image`.
 */
export const projects: PortfolioProject[] = [
  {
    id: 'erp-central-monitoramento', number: '01', name: 'ERP — Central de Monitoramento',
    eyebrow: 'SISTEMAS CORPORATIVOS / MANUTENÇÃO INDUSTRIAL',
    subtitle: 'Automação, inteligência artificial e integrações para a manutenção industrial.',
    summary: 'ERP operacional que combina regras determinísticas, IA aplicada, automação de processos e integração ao Fracttal One.',
    category: 'Sistemas & IA', visual: 'system', featured: true,
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
    summary: 'Mecanismo híbrido de interpretação e classificação de chamados, integrado à conversão de solicitações em ordens de serviço.',
    category: 'Sistemas & IA', visual: 'ai', featured: true,
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
    technologies: ['Python', 'Algoritmos determinísticos', 'IA aplicada', 'Fracttal One API', 'Regras de negócio', 'Auditoria de decisões'],
    impacts: ['Priorização de precisão e rastreabilidade', 'Redução de associações incorretas', 'Critérios técnicos explícitos', 'Apoio à decisão humana'],
    note: 'É um módulo destacado do ERP Central de Monitoramento, não uma implantação independente.'
  },
  {
    id: 'bi-manutencao-industrial', number: '03', name: 'BI — Manutenção Industrial',
    eyebrow: 'BUSINESS INTELLIGENCE / OPERAÇÕES',
    subtitle: 'Indicadores operacionais conectados às informações de manutenção.',
    summary: 'Dashboard analítico com integração à API do Fracttal One e acompanhamento de indicadores de desempenho da manutenção.',
    category: 'Business Intelligence', visual: 'analytics', featured: true,
    context: 'A liderança técnica precisa consolidar e analisar ordens, recursos, prazos, contratos e desempenho de equipamentos.',
    challenge: 'Transformar registros operacionais dispersos em uma visão de gestão, com recortes por unidade, contrato, equipamento e prestador.',
    solution: 'Construção de painéis interativos de manutenção, organizando dados do Fracttal One em indicadores e comparações orientados à tomada de decisão.',
    features: ['Backlog e acompanhamento de ordens de serviço', 'Indicadores de homem-hora, aging e cumprimento de planos', 'Análises de MTBF, MTTR, riscos e custos', 'Filtros por unidade, contrato, equipamento e prestador', 'Navegação e detalhamento por indicadores'],
    technologies: ['Power BI', 'Fracttal One API', 'Business Intelligence', 'Modelagem de dados'],
    impacts: ['Visão consolidada da operação', 'Identificação de gargalos', 'Melhor acompanhamento de prioridades']
  },
  {
    id: 'smart-organization', number: '04', name: 'Smart Organization — Distribuição',
    eyebrow: 'AUTOMAÇÃO / ORQUESTRAÇÃO DE FLUXOS',
    subtitle: 'Distribuição inteligente de demandas conforme contexto operacional.',
    summary: 'Automação de distribuição de chamados com regras de dia, horário, disponibilidade e condições de operação.',
    category: 'Automação', visual: 'automation', featured: true,
    context: 'O encaminhamento de solicitações pode depender da janela operacional, da disponibilidade e da alternância entre equipes.',
    challenge: 'Organizar distribuição sem depender continuamente de triagem e encaminhamento manuais.',
    solution: 'Fluxo de automação orientado por condições e execução paralela, com distribuição cíclica e comunicação entre ferramentas.',
    features: ['Regras de distribuição por dia e horário', 'Checagem de disponibilidade e condições paralelas', 'Distribuição cíclica conforme critérios configurados', 'Integração com comunicação e registros de manutenção'],
    technologies: ['Power Automate', 'Outlook', 'Fracttal One', 'Lógica condicional', 'Automação de processos'],
    impacts: ['Menor esforço na triagem', 'Maior consistência nas regras de encaminhamento', 'Padronização da distribuição']
  },
  {
    id: 'contas-a-pagar', number: '05', name: 'Contas a Pagar',
    eyebrow: 'CONSULTORIA / DADOS FINANCEIROS',
    subtitle: 'Informação financeira organizada para apoiar controle e análise.',
    summary: 'Solução e consultoria voltadas a processos financeiros, acompanhamento de contas e visibilidade gerencial.',
    category: 'Business Intelligence', visual: 'financial', featured: true,
    context: 'Rotinas financeiras se beneficiam de consolidação, confiabilidade dos registros e acompanhamento objetivo de compromissos.',
    challenge: 'Reduzir dispersão de informações e facilitar a análise das obrigações financeiras.',
    solution: 'Estruturação de uma abordagem de análise e automação para apoiar o controle de contas a pagar e a leitura gerencial dos dados.',
    features: ['Organização e leitura de dados financeiros', 'Foco em padronização e acompanhamento operacional', 'Indicadores definidos conforme a necessidade do processo'],
    technologies: ['Análise de dados', 'Dashboards', 'Automação de processos financeiros'],
    impacts: ['Melhor organização dos registros', 'Visibilidade sobre o processo financeiro'],
    note: 'As ferramentas específicas e os módulos públicos deste projeto estão pendentes de validação editorial.'
  },
  {
    id: 'alovia', number: '06', name: 'Alovia',
    eyebrow: 'INTEGRAÇÕES / PLATAFORMAS TERCEIRAS',
    subtitle: 'Integrações complexas entre produto, infraestrutura e ecossistema Meta.',
    summary: 'Desenvolvimento e integração de fluxos relacionados a uma plataforma de atendimento e automação via WhatsApp.',
    category: 'Automação', visual: 'system', featured: true,
    context: 'Plataformas de comunicação exigem conciliar requisitos de produto, autenticação, serviços de nuvem e políticas de terceiros.',
    challenge: 'Preparar fluxos de conexão, APIs e jornadas de atendimento respeitando exigências técnicas e permissões do ecossistema oficial do WhatsApp.',
    solution: 'Implementação de componentes de frontend e backend para a jornada de atendimento e preparação das integrações. A conexão oficial com serviços da Meta permanece apresentada como etapa em evolução, sem afirmar uma validação ainda não confirmada.',
    features: ['Integração planejada com WhatsApp Cloud API e recursos da Meta', 'Backend de API com verificações de disponibilidade', 'Jornada de autenticação e conexão de contas', 'Fluxos voltados à organização de conversas e operações de atendimento', 'Configuração e validação de serviços em nuvem'],
    technologies: ['React', 'FastAPI', 'Google Cloud Run', 'Netlify', 'WhatsApp Cloud API', 'Meta Business'],
    impacts: ['Integração entre múltiplas plataformas', 'Arquitetura orientada a APIs', 'Visão de produto e automação'],
    note: 'Case em evolução. O processo de conexão oficial com a Meta não deve ser anunciado como concluído sem nova validação.'
  },
  {
    id: 'detailer-business', number: '07', name: 'Detailer Business',
    eyebrow: 'GAMES / SIMULAÇÃO EMPRESARIAL',
    subtitle: 'Uma experiência interativa sobre escolhas e consequências de negócio.',
    summary: 'Jogo de simulação de gestão em que decisões estratégicas alteram a trajetória de uma empresa fictícia.',
    category: 'Games & Experiências', visual: 'game', featured: true,
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
    summary: 'Painel de indicadores comerciais, com comparações temporais e análises por produto, categoria e cliente.',
    category: 'Business Intelligence', visual: 'analytics',
    context: 'Dados de vendas precisam ser organizados para apoiar leitura de tendências e desempenho comercial.',
    challenge: 'Reunir informações de faturamento, produtos e clientes em análises acessíveis para quem toma decisões.',
    solution: 'Dashboard em Power BI alimentado por dados do Excel, com filtros, comparativos e navegação por indicadores.',
    features: ['Análise de lucro e faturamento por produto e categoria', 'Comparação de ano atual e ano anterior', 'Acompanhamento de crescimento, clientes e metas', 'Filtros, tooltip e drill-down', 'Visualização de tendências comerciais'],
    technologies: ['Power BI', 'Excel', 'Business Intelligence', 'Visualização de dados'],
    impacts: ['Clareza sobre resultados', 'Leitura de tendências', 'Apoio ao planejamento comercial']
  },
  {
    id: 'bi-fluxo-caixa', number: '09', name: 'BI — Fluxo de Caixa',
    eyebrow: 'BUSINESS INTELLIGENCE / FINANÇAS',
    subtitle: 'Acompanhamento do movimento financeiro em uma visão gerencial.',
    summary: 'Dashboard financeiro para analisar entradas, saídas, saldos e comportamento dos fluxos de caixa.',
    category: 'Business Intelligence', visual: 'financial',
    context: 'Entender a evolução das disponibilidades e dos compromissos é essencial para a organização financeira.',
    challenge: 'Consolidar dados de diferentes períodos de forma clara e interpretável.',
    solution: 'Modelagem de indicadores e visuais com dados importados do Excel e rotina de atualização.',
    features: ['Entradas, despesas e saldo', 'Visões por período e categoria', 'Indicadores e alertas financeiros', 'Atualização de dados'],
    technologies: ['Power BI', 'Excel', 'Modelagem de indicadores'],
    impacts: ['Visibilidade financeira', 'Acompanhamento de variações', 'Facilidade de análise temporal']
  },
  {
    id: 'bi-contratos', number: '10', name: 'BI — Gestão de Contratos',
    eyebrow: 'BUSINESS INTELLIGENCE / GOVERNANÇA',
    subtitle: 'Contratos e informações críticas em uma visão estruturada.',
    summary: 'Painel voltado ao acompanhamento contratual, com dados centralizados e recortes gerenciais.',
    category: 'Business Intelligence', visual: 'analytics',
    context: 'A gestão de contratos demanda acompanhamento de status, valores, disponibilidade e registros periódicos.',
    challenge: 'Oferecer um ponto único de observação das informações utilizadas pela gestão.',
    solution: 'Construção de dashboard integrado às informações do SharePoint, com organização de status e indicadores.',
    features: ['Status e tipo de contrato', 'Disponibilidade e acompanhamento de aportes', 'Registros mensais', 'Filtros e recortes gerenciais'],
    technologies: ['Power BI', 'SharePoint', 'Power Platform'],
    impacts: ['Maior organização documental', 'Acompanhamento de situação contratual', 'Leitura centralizada de informações']
  },
  {
    id: 'bi-facilities', number: '11', name: 'BI — Vendas & Facilities',
    eyebrow: 'BUSINESS INTELLIGENCE / INDICADORES',
    subtitle: 'Indicadores de operação e desempenho em um único ambiente.',
    summary: 'Painel analítico para examinar faturamento, volume e recortes comerciais de uma operação de facilities.',
    category: 'Business Intelligence', visual: 'analytics',
    context: 'A operação precisa transformar registros de vendas e consumo em indicadores acessíveis.',
    challenge: 'Sistematizar os dados em leituras por região, período, perfil e produto.',
    solution: 'Dashboard em Power BI com dados de Excel e visualizações para acompanhar desempenho.',
    features: ['Faturamento e quantidade vendida', 'Análises por estado e perfil', 'Identificação de produtos mais vendidos', 'Comparativos e filtros'],
    technologies: ['Power BI', 'Excel', 'Análise de dados'],
    impacts: ['Acompanhamento comercial', 'Visão segmentada da operação']
  },
  {
    id: 'fichas-manobra', number: '12', name: 'Automação — Fichas de Manobra',
    eyebrow: 'AUTOMAÇÃO / PROCESSOS INDUSTRIAIS',
    subtitle: 'Digitalização e orquestração do fluxo de fichas operacionais.',
    summary: 'Automação de fluxos associados ao registro, encaminhamento e organização de fichas de manobra.',
    category: 'Automação', visual: 'automation',
    context: 'Formulários e registros operacionais podem exigir etapas sucessivas de coleta, validação, distribuição e arquivo.',
    challenge: 'Reduzir atividades manuais e estabelecer um caminho consistente para os registros.',
    solution: 'Fluxos conectando formulário, automação, comunicação e armazenamento de documentos.',
    features: ['Coleta estruturada de informações', 'Orquestração de etapas pelo Power Automate', 'Encaminhamentos e comunicações por Outlook', 'Armazenamento e consulta no SharePoint'],
    technologies: ['Microsoft Forms', 'Power Automate', 'Outlook', 'SharePoint'],
    impacts: ['Padronização do registro', 'Menos repasses manuais', 'Organização do histórico']
  },
  {
    id: 'monitoramento-inteligente', number: '13', name: 'Automação — Monitoramento Inteligente',
    eyebrow: 'AUTOMAÇÃO / ROTINAS RECORRENTES',
    subtitle: 'Verificações programadas e alertas orientados a condições.',
    summary: 'Fluxo automatizado de monitoramento diário, com regras de avaliação e comunicação de ocorrências.',
    category: 'Automação', visual: 'automation',
    context: 'Acompanhamentos frequentes exigem regularidade mesmo quando o time está ocupado com outras demandas.',
    challenge: 'Executar verificações recorrentes com previsibilidade e avisar apenas quando as condições configuradas exigirem atenção.',
    solution: 'Rotina de automação agendada com avaliações condicionais e processamento de etapas em paralelo.',
    features: ['Execução diária programada', 'Avaliação de condições e disparo de alertas', 'Estrutura com ações paralelas', 'Rastreabilidade das rotinas'],
    technologies: ['Power Automate', 'Lógica condicional', 'Automação agendada'],
    impacts: ['Regularidade no acompanhamento', 'Redução de checagens repetitivas', 'Melhor visibilidade de exceções']
  },
  {
    id: 'consultoria-bi', number: '14', name: 'Consultoria em BI & Dashboards',
    eyebrow: 'CONSULTORIA / ESTRATÉGIA DE DADOS',
    subtitle: 'Do problema operacional à análise que orienta decisões.',
    summary: 'Projetos de análise de dados e painéis gerenciais adaptados ao contexto e à necessidade de cada processo.',
    category: 'Business Intelligence', visual: 'analytics',
    context: 'Nem toda necessidade analítica é resolvida por um dashboard pronto ou uma única ferramenta.',
    challenge: 'Traduzir perguntas de negócio em indicadores e apresentações úteis aos gestores.',
    solution: 'Consultoria para entendimento do processo, modelagem, escolha de métricas e construção de visualizações e rotinas de acompanhamento.',
    features: ['Mapeamento de indicadores e necessidades', 'Tratamento e organização de dados', 'Painéis em Power BI e outras abordagens conforme o projeto', 'Estruturação de visão gerencial'],
    technologies: ['Power BI', 'Excel', 'Power Platform', 'Visualização de dados'],
    impacts: ['Apoio à decisão', 'Mais clareza nas métricas', 'Conexão entre operações e análise']
  }
]

export const categories: Array<'Todos' | ProjectCategory> = [
  'Todos', 'Sistemas & IA', 'Business Intelligence', 'Automação', 'Games & Experiências'
]

export const primaryProjects = projects.filter(project => project.featured)
