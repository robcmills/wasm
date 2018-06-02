#include <iostream>

extern "C" {
	int my_function(int *a) {
		std::cout << "MyFunction" << " a[0]:" << a[0] << " a[1]:" << a[1] << std::endl;
		return a[0] + a[1];
	}
}
