#include <iostream>

extern "C" {
	int myFunction(int a, int b) {
		std::cout << "MyFunction" << " a:" << a << " b:" << b << std::endl;
		return a + b;
	}
}
