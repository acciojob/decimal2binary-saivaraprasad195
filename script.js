function decimalToBinary(num) {
  //Write you code here
	let bin =0;
	while(num>0){
		bin += (Math.floor(num%2)).toString();
		num=Math.floor(num/2); 
	}
	return bin === "" ? "0" : bin.padStart(4, '0');
}

window.decimalToBinary = decimalToBinary;
