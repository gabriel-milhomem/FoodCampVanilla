# Projeto #03 - FoodCamp
# Descrição

Seu primeiro projeto usando JavaScript será a implementação do site mobile do FoodCamp, um restaurante especial que entrega seu pedido em 6 minutos.

Para isso, o restaurante só trabalha com um tipo específico de pedido: o combo de Prato+Bebida+Sobremesa.

O site permite de forma fácil a escolha do seu combo, enviando em seguida o pedido por WhatsApp diretamente para o restaurante.

# Requisitos

- Layout
    - [ ]  Aplicar layout para mobile, seguindo imagens fornecida (não é necessário implementar um layout para desktop)
    - [ ]  O topo e o botão de fechar pedido devem ter posicionamento fixo e não rolar com a barra de rolagem
    - [ ]  Você pode usar imagens e textos aleatórios para ilustrar a página, porém varie o preço em cada item da mesma categoria
    - [ ]  As fontes utilizadas são: [Righteous](https://fonts.google.com/specimen/Righteous) (nome do restaurante e títulos das categorias) e [Roboto](https://fonts.google.com/specimen/Roboto) (demais textos)
    - [ ]  As cores utilizadas foram:
        - #CF2B2B (vermelho)
        - #32B72F (verde)
        - #EEEEEE (cinza do body)
        - #333333 (fontes escuras)
        - #FFFFFF (fontes claras)
        - #CBCBCB (cinza do botão desabilitado)
    - [ ]  Para fazer as sombras presentes em alguns elementos, pesquise sobre como aplicar sombras em CSS e brinque com os valores até ficar parecido com as imagens do layout
    - [ ]  Para fazer os produtos rolarem para o lado, utilize o overflow hidden, não é necessário que a rolagem funcione no desktop

- Seleção de itens
    - [x]  Ao clicar sobre um item, o mesmo deve ser marcado como selecionado, seguindo layout da tela 2
    - [x]  Ao clicar em um item, caso já exista um item selecionado na mesma categoria, este deve ser desrmarcado e o novo item clicado deve ser o novo selecionado
    - [x]  Ao clicar em um item já marcado, **não** é necessário desmarcá-lo
- Botão de finalizar pedido
    - [x]  Por padrão, o botão de finalizar pedido deve vir desabilitado. Ao clicar no botão nesse estado, nada deve acontecer.
    - [x]  Quando o usuário tiver selecionado os itens das 3 categorias, o botão deve mudar para o estado de habilitado, seguindo layout da tela 3
- Envio do pedido
    - [x]  Ao finalizar o pedido, o usuário deverá ser encaminhado para o WhatsApp Web, em conversa com o contato do restaurante, já com uma mensagem padrão preenchida

        **Dica**: Para criar um link que envia uma mensagem via WhatsApp, veja essa página de ajuda do WhatsApp: [https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat?lang=kk](https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat?lang=kk)

        **Dica 2**: Para preparar a mensagem para o formato que o WhatsApp espera, pesquise por uma função chamada `encodeURIComponent(minhaString)`

    - [x]  Essa mensagem deverá seguir este formato:

        ```css
        Olá, gostaria de fazer o pedido:
        - Prato: Frango Yin Yang
        - Bebida: Coquinha Gelada
        - Sobremesa: Pudim
        Total: R$ 27.70
        ```

        **Dica**: para formatar um número decimal no formato 27.70, pesquise por `toFixed` 

# Bônus (opcional)

- Bônus 1: Peça o nome e endereço

    Ao clicar em finalizar pedido, lance dois prompt para o usuário solicitando seu nome e endereço. Essas informações devem então serem adicionadas na mensagem final que é enviada por WhatsApp nesse formato:

    ```
    Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: R$ 27.70

    Nome: Fulano
    Endereço: Rua...
    ```

- Bônus 2: Confirme os dados antes de finalizar o pedido
    - Ao clicar em "Finalizar pedido", em vez de ir para o WhatsApp direto, primeiro revise a compra seguindo esse layout: (OBS: no lugar de vírgula, pode usar ponto como separador decimal nos preços)

        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f39d253c-6b69-49d4-b2ca-2c0d431005a0/iPhone_11_Pro_Max_-_4.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f39d253c-6b69-49d4-b2ca-2c0d431005a0/iPhone_11_Pro_Max_-_4.png)
