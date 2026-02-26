

## Corrigir o Favicon para o Google

**Problema:** O `index.html` não tem uma tag `<link rel="icon">` declarada. O Google não consegue encontrar o favicon corretamente.

**Solução:**

1. **Adicionar a tag de favicon no `index.html`**:
   ```html
   <link rel="icon" type="image/x-icon" href="/favicon.ico" />
   <link rel="icon" type="image/jpeg" href="/favicon.jpeg" />
   <link rel="apple-touch-icon" href="/favicon.jpeg" />
   ```

**Observação:** Se você tiver um favicon em formato `.png` de boa qualidade (idealmente 32x32 e 180x180 para Apple), me envie que eu substituo. O formato `.jpeg` não é ideal para favicons — `.png` ou `.svg` são mais recomendados.

**Importante:** Mesmo após a correção, o Google pode levar dias ou semanas para atualizar o favicon nos resultados de busca.

