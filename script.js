function decimalToBinary(num) {
  //Write you code here
	let bin =0;
	while(num>0){
		bin += (Math.floor(num%2)).toString();
		num/=2; 
	}
	return bin;
}

window.decimalToBinary = decimalToBinary;
