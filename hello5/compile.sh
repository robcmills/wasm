# First install emscripten and activate compiler environment
# source ~/src/emsdk/emsdk_env.sh
em++ \
	-o hello5.js \
	hello5.cpp -O3 \
	-std=c++11 \
	-s WASM=1 \
	-s NO_EXIT_RUNTIME=1 \
	-s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall"]'
