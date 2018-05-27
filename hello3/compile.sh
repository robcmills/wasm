emcc \
	-o hello3.html \
	hello3.c -O3 \
	-s WASM=1 \
	--shell-file ../html_template/shell_minimal.html \
	-s NO_EXIT_RUNTIME=1 \
	-s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall"]'