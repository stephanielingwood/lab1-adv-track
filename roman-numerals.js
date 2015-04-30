var values = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	M: 1000
};


function getRoman(input){

	var sum = 0, char, next, value, nextValue;

	for( var i = 0; i < input.length; i++){
		char = input[i];
		value = values[char];
		next = input[i + 1];
		nextValue = values[next];

		if(value < nextValue){
			sum -= value;
		}
		else {
			sum += value;
		}
	}

	return sum;
}

// super-terse version :)
function getRoman2(input){

	var sum = 0, i = input.length, c, l;

	while( l = c, c = values[ input[--i] ] ){
		sum += c < l ? -c : c;
	}

	return sum;
}

var pass = true;

test( 'VI', 6 );
test( 'IV', 4 );
test( 'CVL', 145 );
test( 'XIII', 13 );
test( 'CMIL', 949 );


function test(roman, num){
	if( getRoman2(roman) !== num ) {
		pass = false;
		console.log(roman + ' does not equal ' + num);
	}
}

console.log(pass ? 'all tests pass' : 'fail');


