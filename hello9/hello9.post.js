function _arrayToHeap(typedArray) {
	var numBytes = typedArray.length * typedArray.BYTES_PER_ELEMENT;
	var ptr = Module._malloc(numBytes);
	var heapBytes = new Uint8Array(Module.HEAPU8.buffer, ptr, numBytes);
	heapBytes.set(new Uint8Array(typedArray.buffer));
	return heapBytes;
}

function _freeArray(heapBytes) {
	Module._free(heapBytes.byteOffset);
}

Module['my_function'] = function(jsArray) {
	const typedArray = new Int32Array(jsArray);
	const heapBytes = _arrayToHeap(typedArray);
	const result = Module.ccall('my_function',
		'number', // return type
		['number'], // argument types
		[heapBytes.byteOffset] // arguments
	);
	_freeArray(heapBytes);
	return result;
};