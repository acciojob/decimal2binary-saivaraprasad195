function decimalToBinary(num) {
  //Write you code here
	let bin =0;
	while(num>0){
		bin += (Math.floor(num%2)).toString();
		num=Math.floor(num/2); 
	}
	bin = bin+"0"
	return bin.reverse();
}

window.decimalToBinary = decimalToBinary;
