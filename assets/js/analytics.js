(function (window, document) {
	var s, ga, _init;

	ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

	_init = window._gaq || [];
	_init.push(['_setAccount', 'UA-37139324-1']);
	_init.push(['_setDomainName', 'donmccurdy.com']);
	_init.push(['_setAllowLinker', true]);
	_init.push(['_trackPageview']);

	document.onclick = function (e) {
		if ((e.target || {}).nodeName !== 'A') return;
		window._gaq.push(['_trackEvent', 'Links', 'Click-Through', e.target.dataset.target]);
	};
}(window, document));
