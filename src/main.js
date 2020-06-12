import './images/logo.png';
import './style.scss';
import './helpers.js';
import comp1 from './comp1/comp1.js';
import comp2 from './comp2.js';

import page1 from './page1/page1.js';
import page2 from './page2/page2.js';
import notfound from './not-found.js';

const pages = {page1, page2, 'not-found': notfound};

window.addEventListener('__route', function (e) {
	const route = e.detail;
	pages[route]();
});

$(async function () {
	window.__$routerOutlet = $('[data-router-outlet]');
	if (window.__route) pages[window.__route]();
	
	await comp1.create();
	comp2.create();
});