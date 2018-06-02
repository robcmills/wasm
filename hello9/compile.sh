# First install emscripten and activate compiler environment
# source ~/src/emsdk/emsdk_env.sh
em++ \
	-o hello9.em.js \
	hello9.cpp -O3 \
	-std=c++11 \
	--post-js hello9.post.js \
	-s WASM=1 \
	-s EXPORTED_FUNCTIONS="['_my_function']" \
	-s EXTRA_EXPORTED_RUNTIME_METHODS="['ccall']"
