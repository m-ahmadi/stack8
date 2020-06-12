import htm from './page2.htm';
import comp from './comp.js';

let $$;

export default async function init() {
	__$routerOutlet.html(htm);
	$$ = __els('[data-root="page2"]');
	
  await comp.create($$.comp);
}