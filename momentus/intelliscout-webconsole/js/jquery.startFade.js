(function($) {

$.startFade = function( opt1, opt2 ) {

/* 設定 */
var option = ( !opt1 || $.isFunction(opt1) ) ? 'body' : opt1;
var func = ( opt1 && $.isFunction(opt1) ) ? opt1 : ( opt2 || function() { return true; } );
/* 設定 ここまで */

/* スタイルの追加（変更） */
/* http://ash.jp/web/css/js_style.htm */
/* 2011.04.09 改 */

function addStyleRule(selector, declaration) {
	var isMSIE = /*@cc_on!@*/false;
	var sheet;

	if (document.styleSheets.length) {	/* 最後のスタイルシートを取得 */
		sheet = document.styleSheets[document.styleSheets.length - 1];

	} else {	/* StyleSheetがない場合、StyleSheetを作成 */
		if (isMSIE) {	/* for IE8, Sleipnir */
			sheet = document.createStyleSheet();

		} else {	/* for FireFox, Opera, Safari, Crome */
			var head = document.getElementsByTagName('head')[0];
			if (head == null) { return; }
			var style = document.createElement('style');
			head.appendChild(style);
			sheet = style.sheet;
		}
	}

	if (isMSIE) {	/* for IE8, Sleipnir */
		/* 以下、改訂部分 */
		/* カンマ区切りのセレクタを分割 */
		var els = selector.split(',');
		var i,el;
		for ( i = 0; els[i]; i += 1 ) {
			el = els[i].replace(/^\s+/, '');
			sheet.addRule(el, declaration);
		}
		/* 改訂ここまで */
	} else {	/* for FireFox, Opera, Safari, Crome */
		sheet.insertRule(selector + '{' + declaration + '}', sheet.cssRules.length);
	}
}
/* function addStyleRule ここまで */

/* 処理開始 */
try {
	addStyleRule('body', 'visibility: hidden');
} catch(e){};

$(function() {
	try {
		if (option !== 'body' || typeof document.documentElement.style.maxHeight !== "undefined") {
			$('body').css({ visibility: 'visible' });
		}
	} catch(e){};
	
	$( option ).hide();
	
	$(window).load( function() {
		if (typeof document.documentElement.style.maxHeight === "undefined") {
			$('body').css({ visibility: 'visible' });
		}
		$( option ).fadeIn(500, func);
	});
});

};

})(jQuery);