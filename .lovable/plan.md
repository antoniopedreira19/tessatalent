

## Plano: Corrigir favicon para o Google Search

### Problema
O Google está mostrando o ícone do Lovable porque a primeira tag `<link rel="icon" href="/favicon.ico">` aponta para o arquivo `public/favicon.ico` que é o ícone padrão do Lovable/Vite. Quando o Google não consegue resolver os PNGs externos, ele cai nesse fallback `.ico`.

### Solução (2 alterações)

1. **Remover a linha do `favicon.ico`** no `index.html` (linha 22) — elimina o fallback para o ícone do Lovable.

2. **Adicionar um fallback PNG local** — baixar a imagem do Supabase e também referenciar localmente como segurança. Como não podemos baixar automaticamente do Supabase para a pasta `public/`, vamos:
   - Remover `<link rel="icon" href="/favicon.ico" sizes="any">` 
   - Mover a tag PNG de 96x96 para ser a **primeira** tag de ícone (sem o fallback .ico)
   - Adicionar também `sizes="32x32"` como variante extra apontando para o mesmo URL do Supabase

### Resultado no `index.html`
```html
<!-- REMOVER esta linha: -->
<link rel="icon" href="/favicon.ico" sizes="any">

<!-- MANTER estas (já existentes): -->
<link rel="icon" type="image/png" sizes="96x96" href="https://jshkvchtckivjhiuayih.supabase.co/...png?v=3">
<link rel="icon" type="image/png" sizes="192x192" href="https://jshkvchtckivjhiuayih.supabase.co/...png?v=3">

<!-- ADICIONAR versão 32x32 para compatibilidade máxima: -->
<link rel="icon" type="image/png" sizes="32x32" href="https://jshkvchtckivjhiuayih.supabase.co/...png?v=3">
```

Isso garante que o Google não encontre nenhum `.ico` como fallback e seja forçado a usar o PNG da Tessa. Após o deploy, solicite reindexação no Google Search Console.

