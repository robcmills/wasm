#include <iostream>
#include <emscripten/emscripten.h>

extern "C" {
	EMSCRIPTEN_KEEPALIVE
	void myFunction(int argc, char ** argv) {
		std::cout << "MyFunction Called" << std::endl;
	}

	int main(int argc, char ** argv) {
		std::cout << "Hello World 5!" << std::endl;
	}
}
