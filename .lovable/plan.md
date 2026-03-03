

## Plano: Configurar favicon corretamente para o Google

### Situação atual
- O favicon está hospedado no Supabase: `https://jshkvchtckivjhiuayih.supabase.co/storage/v1/object/public/images/Favicon%20TESSA%20V3%20(1)%20(1).png`
- Não existe tag `<link rel="icon">` explícita — apenas `apple-touch-icon`
- O Google ignora `apple-touch-icon` e não encontra o favicon

### Sobre usar a mesma imagem do Supabase
Sim, é possível! Podemos referenciar diretamente a URL do Supabase nas tags `<link rel="icon">`. Não precisa baixar nada — basta apontar para lá. Alternativamente, se você tiver o arquivo PNG do favicon, pode fazer upload aqui e copiamos para a pasta `public/`.

### O que será feito no `index.html`
Substituir a tag `apple-touch-icon` atual pelo bloco completo:

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="96x96" href="https://jshkvchtckivjhiuayih.supabase.co/storage/v1/object/public/images/Favicon%20TESSA%20V3%20(1)%20(1).png">
<link rel="icon" type="image/png" sizes="192x192" href="https://jshkvchtckivjhiuayih.supabase.co/storage/v1/object/public/images/Favicon%20TESSA%20V3%20(1)%20(1).png">
<link rel="apple-touch-icon" sizes="180x180" href="https://jshkvchtckivjhiuayih.supabase.co/storage/v1/object/public/images/Favicon%20TESSA%20V3%20(1)%20(1).png">
```

Isso garante que o Googlebot-Image encontre a tag `rel="icon"` com PNG explícito. O `?v=3` pode ser adicionado para forçar cache-busting.

**Recomendação:** Se quiser mais confiabilidade (sem depender do Supabase estar acessível), faça upload da imagem aqui e copiamos para `public/favicon.png`. Caso contrário, seguimos com a URL do Supabase direto.

