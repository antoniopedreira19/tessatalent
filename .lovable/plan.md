

## Plano: Favicon definitivo com URL Supabase (96x96)

### 1. Atualizar `index.html`

Substituir as tags de favicon atuais (linhas 10-12) por:

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="96x96" href="https://jshkvchtckivjhiuayih.supabase.co/storage/v1/object/public/images/Favicon%20TESSA%20V3%20(2)%20(2).png">
<link rel="shortcut icon" href="https://jshkvchtckivjhiuayih.supabase.co/storage/v1/object/public/images/Favicon%20TESSA%20V3%20(2)%20(2).png">
```

Atualizar `apple-touch-icon` (linha 23) para a mesma URL nova `(2) (2)`.

### 2. Arquivos locais

- `public/favicon.png` — **mantido** (não será excluído)
- `public/favicon.jpeg` — pode ser removido se você quiser (não é referenciado em nenhum lugar)
- `public/favicon.ico` — idealmente deveria conter o logo da TESSA, mas não será alterado agora

### Pós-deploy

Google Search Console → colar URL → "Solicitar Indexação".

