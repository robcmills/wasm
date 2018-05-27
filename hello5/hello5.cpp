#include <iostream>
#include <emscripten/emscripten.h>

extern "C" {
	EMSCRIPTEN_KEEPALIVE
	int myFunction(int a, int b) {
		std::cout << "MyFunction" << " a:" << a << " b:" << b << std::endl;
		return a + b;
	}
}
