

## Problema

A imagem de fundo da hero section usa `object-center`, que centraliza a imagem no meio. Como a foto tem o rosto da pessoa na parte superior/direita, ele está sendo cortado, especialmente no mobile onde a seção ocupa a tela toda verticalmente.

## Plano

1. **Ajustar o posicionamento da imagem** no `src/components/HeroSection.tsx` (linha 15):
   - No mobile: usar `object-[center_20%]` para puxar a imagem mais para cima e mostrar o rosto
   - No desktop: manter mais centralizado com `md:object-[center_30%]`
   
   A classe passará de:
   ```
   object-cover object-center
   ```
   Para:
   ```
   object-cover object-[center_20%] md:object-[center_30%]
   ```

   Isso posiciona o ponto focal da imagem mais para o topo, garantindo que o rosto apareça corretamente em ambos os tamanhos de tela.

