

## Diagnóstico

As imagens estão importadas como assets estáticos em `src/assets/`. O Vite já faz bundling e hashing delas, mas o problema é que **todas as imagens PNG são pesadas** (fotos reais em formato PNG sem compressão web) e não há nenhuma estratégia de preload para as imagens críticas acima do fold.

**Problemas identificados:**
1. **Formato pesado** — Fotos em `.png` são muito maiores que `.webp` (até 5-10x). Apenas `hero-woman.jpg` e `team-working.jpg` estão em formato comprimido.
2. **Sem preload** — A imagem do hero e o logo do header não são pré-carregados no HTML; dependem do JavaScript carregar primeiro.
3. **Todas as imagens carregam no bundle** — Mesmo com `loading="lazy"`, as imagens importadas via `import` são resolvidas pelo Vite no build. O lazy loading funciona, mas o browser precisa parsear o JS antes de descobrir os URLs.

## Plano de Otimização

### 1. Preload das imagens críticas no `index.html`
Adicionar `<link rel="preload">` no `<head>` para a imagem do hero e o logo do header. Isso faz o browser começar a baixar antes mesmo do JavaScript carregar.

### 2. Converter imagens PNG para WebP
Usar o plugin `vite-plugin-image-optimizer` para converter automaticamente PNGs para formato otimizado durante o build, reduzindo drasticamente o tamanho dos arquivos.

**Alternativa mais simples (sem dependência extra):** Mover as imagens para `/public/` e referenciá-las diretamente, permitindo preload no HTML e controle de cache. Porém isso perde o hash do Vite.

### 3. Implementar preload programático para imagens below-the-fold
Usar `new Image()` no componente `Index.tsx` com `useEffect` para pré-carregar as imagens das seções seguintes assim que o hero renderizar, antes do usuário scrollar.

### 4. Adicionar `decoding="async"` em imagens não-críticas
Permite ao browser decodificar imagens em thread separada sem bloquear a renderização.

---

### Detalhes técnicos

**`index.html`** — Adicionar preload tags:
```html
<link rel="preload" as="image" href="/src/assets/hero-woman.jpg" />
<link rel="preload" as="image" href="/src/assets/tessa-logo-white.png" />
```

**`src/pages/Index.tsx`** — Adicionar preload programático:
```tsx
useEffect(() => {
  const images = [advisorPhoto, ceoMarcelo, teamWorking, ...];
  images.forEach(src => { new Image().src = src; });
}, []);
```

**Todos os componentes com imagens** — Adicionar `decoding="async"` nas `<img>` tags que ainda não têm.

**`src/components/HeroSection.tsx`** — Já tem `fetchPriority="high"` e `loading="eager"`, está correto.

**Componentes below-the-fold** — Confirmar que todos têm `loading="lazy"`.

