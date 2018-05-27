# First install emscripten and activate compiler environment
# source ~/src/emsdk/emsdk_env.sh
em++ \
	-o hello6.em.js \
	hello6.cpp -O3 \
	-std=c++11 \
	-s WASM=1 \
	-s EXPORTED_FUNCTIONS="['_myFunction']"

	# -s NO_EXIT_RUNTIME=1 \
	# -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall"]'
