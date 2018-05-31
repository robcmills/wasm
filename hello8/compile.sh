# First install emscripten and activate compiler environment
# source ~/src/emsdk/emsdk_env.sh
em++ \
	-o hello8.em.js \
	hello8.cpp -O3 \
	-std=c++11 \
	-s WASM=1 \
	-s EXPORTED_FUNCTIONS="['_myFunction']"
