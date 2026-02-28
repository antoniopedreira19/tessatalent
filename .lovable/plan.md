

## Problema

O `index.html` não tem nenhuma tag `<link rel="icon">` — só tem `apple-touch-icon`. Por isso o Google e os navegadores usam o favicon padrão do Lovable (`/favicon.ico`).

## Plano

Adicionar tags de favicon explícitas no `<head>` do `index.html` apontando para a URL do Supabase que você forneceu:

```html
<link rel="icon" type="image/png" sizes="32x32" href="https://jshkvchtckivjhiuayih.supabase.co/storage/v1/object/public/images/Favicon%20TESSA%20V3%20(1)%20(1).png">
<link rel="icon" type="image/png" sizes="16x16" href="https://jshkvchtckivjhiuayih.supabase.co/storage/v1/object/public/images/Favicon%20TESSA%20V3%20(1)%20(1).png">
<link rel="shortcut icon" href="https://jshkvchtckivjhiuayih.supabase.co/storage/v1/object/public/images/Favicon%20TESSA%20V3%20(1)%20(1).png">
```

Também atualizar o `apple-touch-icon` existente (linha 21) para usar a mesma URL.

Remover as linhas vazias desnecessárias (28-47) para limpar o HTML.

**Nota importante:** O Google pode levar dias ou semanas para atualizar o favicon nos resultados de busca — isso depende do cache do Google, não do código.

