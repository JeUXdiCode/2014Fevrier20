(function () { "use strict";
var Haxe = function() { }
Haxe.concatenation = function(texte,entier) {
	return concat(texte,entier);
}
Haxe.main = function() {
	var js = new Javascript();
	js.write(js.sum(2,3));
}
Haxe.main();
})();
