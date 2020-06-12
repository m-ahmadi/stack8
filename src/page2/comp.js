let $$;

async function create($root) {
	$root.append('<h4 style="color:teal;">page2 comp <span data-el="foo"></span></h4>');
	
	$$ = __els($root);
	$$.foo.text('u good honey?');
}

export default { create }