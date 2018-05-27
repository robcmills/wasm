emcc \
	-o hello5.html \
	hello5.c -O3 \
	-s WASM=1 \
	--shell-file ./minimal_template.html \
	-s NO_EXIT_RUNTIME=1 \
	-s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall"]'