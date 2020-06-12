let $$;

function create($root) {
	$root.append('<i>page1 comp hi <strong data-el="foo"></strong></i>');
	$$ = __els($root);
	
	$$.foo.text('whatup');
}

export default { create }