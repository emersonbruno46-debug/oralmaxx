# Clínica Odontológica OralMaxx — Landing Page Oficial

Landing page institucional de alto padrão desenvolvida para a **Clínica Odontológica OralMaxx**, projetada com foco em direção artística refinada, máxima fidelidade ao layout mestre aprovado, responsividade impecável e alta taxa de conversão direta para o WhatsApp oficial.

---

## 💎 Destaques do Projeto

1. **Hero Fiel à Imagem Mestra Aprovada**:
   - Reconstruído em código React + Tailwind CSS real (sem usar screenshot como imagem única).
   - Fotografia arquitetônica real da fachada como protagonista, posicionada à direita no desktop e enquadrada verticalmente no mobile.
   - Gradiente azul-marinho autêntico (`linear-gradient(90deg, rgba(7, 32, 57, 0.94) 0%, ...)`) garantindo legibilidade aos textos sem ocultar o edifício.
   - Tipografia editorial serifada (*Cormorant Garamond*) na headline `"Seu sorriso merece esse cuidado."` distribuída em 3 linhas com escala fluida (`clamp`).
   - Botão de ação principal `"Agendar pelo WhatsApp"` em azul-claro da marca com ícone oficial, botão secundário `"Conheça a clínica →"` e microcopy `"Vamos conversar sobre o seu sorriso?"`.
   - Indicador inferior de rolagem `"Conheça a OralMaxx"` com seta animada.

2. **Identidade Visual Oficial**:
   - Logotipo oficial extraído do vetor original da OralMaxx (`.svg`), tratado para renderização nítida em qualquer resolução.
   - Versão positiva (fundo claro na Navbar) e negativa (fundo escuro no Rodapé).
   - Símbolo isolado aplicado como marca d'água no CTA final e nos favicons (`favicon.svg`, `apple-touch-icon.png`).

3. **Arquitetura Editorial Completa**:
   - **Navbar**: Fixa/sticky com logo generoso, links âncora e botão `"Agendar consulta →"`.
   - **Apresentação da Clínica (`#clinica`)**: Apresentação da sede, recepção acolhedora e diferenciais.
   - **Tratamentos Odontológicos (`#tratamentos`)**: Grid com 6 especialidades reais e botões de contato com mensagem personalizada para cada procedimento.
   - **Estrutura & Ambiente (`#estrutura`)**: Galeria fotográfica destacando fachada, setor de Radiologia Integrada e acabamentos.
   - **Nossa Equipe (`#equipe`)**: Destaque para o Responsável Técnico (**Dr. Leonardo S. Santos — CRO-MG 35235**) e corpo clínico integrado.
   - **Jornada de Atendimento**: 3 passos claros e humanos (Contato → Agendamento → Consulta).
   - **Perguntas Frequentes (`#faq`)**: Accordion acessível com dúvidas comuns e suporte direto.
   - **Localização e Contato (`#localizacao`)**: Canais oficiais, horários, botão de rota e mapa visual da sede.
   - **CTA Final**: Bloco nobre azul-marinho com grafismo da marca e chamada direta para ação.
   - **Rodapé Institucional**: Dados legais do CRO, links rápidos, Instagram e créditos `"Desenvolvido por Ideal Solutions"`.
   - **Botão Flutuante de WhatsApp**: Discreto no canto inferior direito após a primeira dobra.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+ (recomendado Node 20+)

### Executar em Desenvolvimento
```bash
# Na pasta do projeto:
npm run dev
# Ou via vite diretamente:
npx vite --port 5175
```
Acesse no navegador: `http://localhost:5175/`

### Gerar Build de Produção
```bash
npm run build
```
Os arquivos otimizados são gerados na pasta `dist/`.

---

## 📁 Estrutura de Arquivos

```
LANDING PAGE ORALMAXX/
├── public/
│   ├── brand/
│   │   ├── oralmaxx-logo.svg            # Logo oficial para fundos claros
│   │   ├── oralmaxx-logo-negativo.svg   # Logo oficial para fundos escuros
│   │   └── oralmaxx-simbolo.svg         # Símbolo do dente/estrela isolado
│   ├── images/
│   │   ├── fachada-hero-1920.webp       # Hero desktop 1920w
│   │   ├── fachada-hero-1440.webp       # Hero desktop 1440w
│   │   ├── fachada-hero-1024.webp       # Hero tablet 1024w
│   │   ├── fachada-hero-mobile-900.webp # Hero mobile 900w
│   │   ├── fachada-hero-mobile-640.webp # Hero mobile 640w
│   │   ├── fachada-placa.webp           # Detalhe do revestimento amadeirado
│   │   ├── fachada-radiologia.webp      # Detalhe da torre de radiologia
│   │   ├── fachada-entrada.webp         # Detalhe do acesso envidraçado
│   │   └── og-oralmaxx.jpg              # Card Open Graph 1200x630
│   ├── favicon.svg                      # Favicon vetorial
│   └── apple-touch-icon.png             # Ícone para iOS / Android
├── scripts/
│   └── build-assets.cjs                 # Pipeline de processamento de imagens
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx               # Barra superior com logo e menu
│   │   │   └── Footer.tsx               # Rodapé completo
│   │   ├── sections/
│   │   │   ├── Hero.tsx                 # Hero section fiel à referência
│   │   │   ├── AboutSection.tsx         # Apresentação da clínica
│   │   │   ├── TreatmentsSection.tsx    # Cards de especialidades
│   │   │   ├── StructureSection.tsx     # Galeria de estrutura
│   │   │   ├── TeamSection.tsx          # Responsável Técnico e equipe
│   │   │   ├── JourneySection.tsx       # 3 etapas de atendimento
│   │   │   ├── FaqSection.tsx           # Accordion de perguntas frequentes
│   │   │   ├── LocationSection.tsx      # Informações de localização e contato
│   │   │   └── FinalCtaSection.tsx      # Chamada final azul-marinho
│   │   └── ui/
│   │       └── FloatingWhatsApp.tsx     # Botão flutuante inferior direito
│   ├── data/
│   │   └── oralmaxxData.ts              # DADOS CENTRAIS EDITÁVEIS
│   ├── App.tsx                          # Montagem da página
│   ├── index.css                        # Design tokens, tipografia e gradientes
│   └── main.tsx                         # Ponto de entrada
├── index.html                           # SEO, meta tags e Google Fonts
├── package.json                         # Dependências e scripts
├── tailwind.config.js                   # Configuração de cores e fontes
└── vite.config.ts                       # Configuração do Vite
```

---

## ✏️ Como Editar Conteúdo

Todo o conteúdo institucional, telefones, links, tratamentos, equipe e perguntas frequentes está centralizado em um único arquivo:

👉 **`src/data/oralmaxxData.ts`**

Para alterar o WhatsApp, o texto das mensagens ou os tratamentos, basta editar esse arquivo sem precisar alterar o código dos componentes.

---

## 📋 Informações Pendentes para Validação com a Clínica

1. **Endereço Físico Completo**:
   - O endereço exato de rua e número está configurado em `src/data/oralmaxxData.ts` aguardando confirmação final da recepção para exibição pública e inserção do link exato do Google Maps embed.
2. **Horários Exatos de Atendimento**:
   - Configurados atualmente como horário comercial padrão (Segunda a Sexta, 08h às 18h), sujeitos a confirmação da agenda.
3. **Novas Fotografias de Ambientes Internos**:
   - A galeria da estrutura já utiliza as fotografias reais tratadas da fachada, torre de radiologia e recepção envidraçada. Novas fotos dos consultórios internos podem ser adicionadas na pasta `public/images/` e referenciadas em `STRUCTURE_GALLERY`.
4. **Cadastramento de Mais Profissionais**:
   - O Responsável Técnico (**Dr. Leonardo S. Santos CRO-MG 35235**) está oficialmente cadastrado e exibido. Novos dentistas com seus respectivos CROs podem ser incluídos diretamente na lista `TEAM_MEMBERS` em `oralmaxxData.ts`.
