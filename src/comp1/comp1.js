let $$;
import htm from './comp1.htm';

function create() {
	$$ = __els('[data-root="comp1"]');
	
	$$.btn.on('click', function () {
		$$.root.append( $(htm) );
	});
}

export default { create }