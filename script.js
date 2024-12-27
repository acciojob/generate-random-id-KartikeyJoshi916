function makeid(l) {
	let s="QWERTYUIOPASDFGHJKLMNBVCXZqwertyuiopasdfghjklzxcvbnm1234567890";
	let result="";
	for(let i=0;i<l;i++){
		int x=Math.random()*s.length;
		result+=s.charAt(x);
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
