

## Plano: Refatorar Landing Page TESSA com Fotos Reais

### Mapeamento de Imagens Enviadas

| Arquivo | Uso na Pagina |
|---|---|
| `foto_site_1.jpg` | Hero - mulher sorrindo (lado direito) |
| `foto_site_2.svg` | Card de servico (Hunting) |
| `foto_site_3_1.svg` | Card de servico (Alocacao) |
| `foto_site_4.svg` | Card de servico (As a Service) |
| `foto_site_5.png` | Tech Advisors - homem de oculos, bracos cruzados |
| `foto_site_6.png` | Quote CEO - Marcelo Pedreira |
| `foto_site_7.jpg` | Secao estatistica/conteudos - pessoas no escritorio |

### Arquivos a Criar/Modificar

---

#### 1. Copiar todas as imagens para `src/assets/`

Copiar os 7 arquivos do user-uploads para `src/assets/` com nomes descritivos:
- `hero-woman.jpg` (foto_site_1.jpg)
- `service-hunting.svg` (foto_site_2.svg)
- `service-alocacao.svg` (foto_site_3_1.svg)
- `service-ondemand.svg` (foto_site_4.svg)
- `advisor-photo.png` (foto_site_5.png)
- `ceo-marcelo.png` (foto_site_6.png)
- `team-working.jpg` (foto_site_7.jpg)

---

#### 2. Atualizar `src/index.css` - Novo sistema de cores

Adicionar variaveis para secoes claras e azul forte. O design alterna entre:
- Secoes com fundo branco/claro (Hero, Tech Advisors, Case)
- Secoes com fundo azul forte ~#3B5BDB (Servicos, Metodologia, Conteudos)
- Footer claro

Manter variaveis dark existentes mas adicionar classes utilitarias para `bg-blue-strong` (#3B5BDB) e secoes claras com texto escuro.

---

#### 3. Refatorar `Header.tsx`

- Logo: "tessa" em minuscula, bold, sem acronimo "TEAMS AS A SERVICE"
- Nav items: Servicos, Tech Advisors, Metodo, Cases, Conteudos
- Fundo semi-transparente claro (quando sobre hero claro)
- Remover a estilizacao letra-por-letra do acronimo

---

#### 4. Refatorar `HeroSection.tsx`

- Remover todo o background tech/dark (orbs, grid, SVG lines)
- Layout split: 50/50 - texto esquerda, foto direita
- Fundo branco/claro
- Titulo: "Pessoas certas no contexto certo" em texto escuro
- Subtitulo sobre recrutamento tech
- Botao "Conheca" (azul)
- Imagem `hero-woman.jpg` no lado direito com rounded corners
- Componente WhatsApp flutuante fixo no canto inferior direito (novo componente `WhatsAppButton.tsx`)

---

#### 5. Refatorar `ServicesSection.tsx`

- Fundo azul forte (#3B5BDB)
- Texto branco
- Titulo: "Mais cuidado. Mais performance."
- Subtextos descritivos
- "Tudo com 3 modelos flexiveis:"
- 3 cards com as fotos SVG (service-hunting.svg, service-alocacao.svg, service-ondemand.svg)
- Cards com fundo branco, cantos arredondados, foto no topo, titulo e descricao abaixo
- Titulos: Hunting, Alocacao, As a Service

---

#### 6. Criar `TechAdvisorsSection.tsx` (novo)

- Fundo branco/claro
- Layout 2 colunas: foto `advisor-photo.png` a esquerda, texto a direita
- Titulo: "Conheca nossos Tech Advisors"
- Texto descritivo mencionando empresas (Creditas, iFood, EBX, Dafiti, Olist)
- 4 itens com checkmarks
- Botao "Saiba mais"
- Abaixo: secao de quote com aspas grandes decorativas
- Texto do depoimento
- Foto circular `ceo-marcelo.png` + "Marcelo Pedreira" + "CEO, Tessa Talent"

---

#### 7. Refatorar `MethodologySection.tsx`

- Fundo azul forte (#3B5BDB)
- Texto branco
- Titulo: "Metodo tessa talent"
- Timeline vertical com 2 blocos principais:
  - **Consultoria estrategica** (3 sub-passos)
  - **Acompanhamento continuo** (3 sub-passos)
- Linha vertical conectando os blocos
- Icones/numeros nos nos da timeline

---

#### 8. Refatorar `CaseSection.tsx`

- Fundo branco/claro
- Manter 3 colunas (Desafio, Abordagem, Resultado) com icones
- Destacar "5 dias / SLA de entrega"
- Adicionar sub-secao "De uma tessa na sua empresa":
  - 3 passos horizontais (Reuniao, Mapeamento, Entrega qualificada)
  - Botao CTA "Fale com o especialista"

---

#### 9. Criar `StatsAndContentSection.tsx` (novo)

- Parte superior: fundo escuro com foto `team-working.jpg` como background
  - Numero grande "82%"
  - Texto sobre retencao e referencia Brandon Hall Group
- Parte inferior: fundo azul forte
  - Titulo "Conteudos tessa talent"
  - 3 cards de blog (placeholder) com titulos
  - Botao "Acesse o blog"

---

#### 10. Refatorar `Footer.tsx`

- Fundo claro
- Simplificar: "Fale com a tessa Talent" + subtexto
- Botao "Chame no WhatsApp" (verde)
- Icone LinkedIn
- Copyright: "Tessa Talent | 2026 | Todos direitos reservados"
- Remover secao de passos (movida para CaseSection)

---

#### 11. Criar `WhatsAppButton.tsx` (novo)

- Botao flutuante fixo no canto inferior direito
- Icone WhatsApp verde
- Link para `https://wa.me/5541996855782`
- z-index alto para ficar sobre tudo

---

#### 12. Atualizar `Index.tsx`

Nova ordem de componentes:
```text
Header
HeroSection
ServicesSection
TechAdvisorsSection (novo)
MethodologySection
CaseSection
StatsAndContentSection (novo)
Footer
WhatsAppButton (novo, fixo)
```

Remover imports de: ProblemSection, WhyChooseSection

---

#### 13. Remover arquivos nao utilizados

- `src/components/ProblemSection.tsx`
- `src/components/WhyChooseSection.tsx`
- `src/components/PaymentFlowSection.tsx` (se existir)
- `src/components/PricingSection.tsx` (se existir)

---

### Detalhes Tecnicos

- As imagens SVG (foto_site_2/3/4) contem JPEGs embutidos em base64 dentro do SVG. Serao usadas diretamente como `<img src={importedSvg} />`.
- Secoes azuis usarao classe inline `style={{ backgroundColor: '#3B5BDB' }}` ou classe Tailwind customizada.
- Textos em secoes azuis serao brancos; textos em secoes claras serao escuros (#1a1a2e ou similar).
- Manter responsividade mobile em todas as secoes.
- Manter stack: React + Tailwind + shadcn/ui + lucide-react.

