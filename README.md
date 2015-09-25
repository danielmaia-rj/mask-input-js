Mask Phone
==========
Javascript que formata campos do tipo telefone utilizando o plugin [jquery.mask](https://github.com/igorescobar/jQuery-Mask-Plugin), fazendo distinção entre os tipos de telefone fixo, celular e aplicando quando devido o nono dígito

Informações:
------------
As informações utilizadas para diferenciar os números de telefone entre fixo ou celular, e aplicação ou não do nono dígito, foram retiradas do site da Anatel:

[Tabela Serviço Telefônico Fixo Comutado](http://www.anatel.gov.br/setorregulado/index.php?option=com_content&view=article&id=331)

[Tabela Serviço Móvel Celular](http://www.anatel.gov.br/setorregulado/index.php?option=com_content&view=article&id=330)

Usabilidade:
------------

    $(document).ready(function(){
      $('input[name=phone]').maskphone();
    });

Exemplos:
---------
O exemplo se encontram no ```maskphone.html``` no src do projeto ou veja o exemplo [aqui](http://output.jsbin.com/hasewuqosu)
