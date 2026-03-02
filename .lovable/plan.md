

## Diagnóstico

Analisando os screenshots do dispositivo real vs o preview, identifiquei o problema principal:

**Overflow horizontal** -- Elementos com animações framer-motion (como `AnimatedSection` com `x: -40` ou `x: 40`) criam conteúdo fora da viewport antes de animar. Como não há `overflow-x: hidden` no `body` ou no `#root`, isso gera uma barra de rolagem horizontal invisível. No celular real, o usuário pode arrastar o conteúdo para o lado, causando o efeito de "layout espremido" que você vê.

Isso explica o comportamento "fica um tempo com um layout e depois muda": a animação começa com elementos deslocados lateralmente, expandindo a largura da página, e depois eles se movem para a posição correta.

## Plano de correção

### 1. Adicionar `overflow-x: hidden` no CSS global (`src/index.css`)

Adicionar no bloco `body`:
```css
overflow-x: hidden;
```

Isso impede qualquer rolagem horizontal causada por animações ou elementos fora da viewport.

### 2. Remover `App.css` (arquivo legado do Vite)

O arquivo `src/App.css` contém estilos do template padrão do Vite (`#root { max-width: 1280px; padding: 2rem }`) que não são usados mas podem causar conflitos se acidentalmente importados. Será deletado.

### 3. Ajustes finos de padding/espaçamento mobile nas seções

Revisar cada seção para garantir que o padding lateral seja consistente (`px-4` ou `px-5`) e que nenhum elemento extrapole a largura da tela em dispositivos pequenos (320px-375px):

- **HeroSection**: OK, já tem `px-4`
- **ServicesSection**: OK, já tem `px-4`
- **TechAdvisorsSection**: `max-w-5xl mx-auto` sem padding externo no mobile -- adicionar `px-4` ao section
- **CaseSection**: Mesmo problema -- adicionar `px-4` consistente
- **CallToActionSection**: OK
- **StatsAndContentSection**: Seção de stats sem padding lateral no mobile -- garantir `px-4`
- **Footer**: OK

