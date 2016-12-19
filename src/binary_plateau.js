//Use num to test for any integer
//num= please enter value

//function to convert integere to Binary
	function convertToBinary(num) {
		if (num >= 0) {
			return num.toString(2)
		}
	}

binaryString = convertToBinary(num);

//counting and Separating 0s from 1s
	function largestPlateau(binaryString) {
		ones = 0, count = 0, i=0
		for(i=0; i <= binaryString.length; i++) {
			if (binaryString[i] === '1') {
				count++;
			} else {
				if (count > ones) {
					ones = count;
				}
				count = 0
			}
		}
	return ones
	}

   console.log(largestPlateau(binaryString));
