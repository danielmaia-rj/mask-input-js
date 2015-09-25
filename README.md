Mask Phone
==========
Javascript que formata campos do tipo telefone utilizando o plugin [jquery.mask](https://github.com/igorescobar/jQuery-Mask-Plugin), fazendo distinção entre os tipos de telefone fixo, celular e aplicando quando devido o nono dígito

Usabilidade:
------------

    $(document).ready(function(){
      $('input[name=phone]').maskphone();
    });
