(function ($) {
	"use strict";
	$.fn.maskphone = function () {
		var
		elementoInput = this,
		codigoAreaNonoDigito = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99],
		fixoIniciadoCom = [2, 3, 4, 5],
		celularIniciadoCom = [7, 8, 9],
		mascaraAplicada = false;

		init();

		function init() {
			aplicarMascaraInit(elementoInput);
			$(elementoInput).on("keyup", function(){
				aplicarMascaraOnKeyup($(this));
			});
		};

		function aplicarMascaraInit(elemento) {
			elemento.each(function(){

				$(this).val($(this).val().replace(/\b0+/g,''));
				aplicar(this);
			});
		};

		function aplicarMascaraOnKeyup (elemento) {
			elemento.each(function(){
				$(this).val($(this).val().replace(/\b0+/g,''));
				if ($(this).val().replace(/[^0-9\.]/g, '').length >= 3)
					mascaraAplicada = false;

				if ($(this).val().replace(/[^0-9\.]/g, '').length == 3 && mascaraAplicada == false) {
					aplicar(this);
				};
			});
		};

		function aplicar(elemento) {
			var codigoArea = $(elemento).val().replace(/[^0-9\.]/g, '').substring(0, 2);
			var telefoneIniciadoCom = $(elemento).val().replace(/[^0-9\.]/g, '').substring(3,2);
			var isTelefoneFixo = $.inArray(parseInt(telefoneIniciadoCom), fixoIniciadoCom) != -1;
			var isTelefoneCelular = $.inArray(parseInt(telefoneIniciadoCom), celularIniciadoCom) != -1;
			var isNonoDigito = $.inArray(parseInt(codigoArea), codigoAreaNonoDigito) != -1;

			if(isTelefoneFixo) {
				$(elemento).mask("(99)9999-9999");
				mascaraAplicada = true;
			} else if (isTelefoneCelular && isNonoDigito) {
				$(elemento).mask("(99)99999-9999");
				mascaraAplicada = true;
			} else {
				$(elemento).mask("(99)9999-9999");
				mascaraAplicada = true;
			};
		};

	};

})(jQuery)
