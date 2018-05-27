Module = {};

loadWASM = () => {
	return new Promise((resolve) => {
		fetch('hello6.wasm')
			.then(response => response.arrayBuffer())
			.then((buffer) => {
				Module.wasmBinary = buffer;
				const script = document.createElement('script');
				script.src = 'hello6.js';
				script.onload = () => {
					console.log("Loaded Emscripten.");
					resolve(Module);
				};
				document.body.appendChild(script);
			});
	});
};

loadWASM();
