// function minute(m){
// 	return m*60;
// }
// alert(minute(2));

// function f(a,b){
// 	return a*b/2;
// }
// alert(f(3,4));


// function x(arr){
// 	let a = 0;
// 	for(var i=0;i<arr.length;i++){
// 		for(var j=0;j<arr[i].length;j++){
// 			if(arr[i][j]%3==0){
// 				a += arr[i][j];
// 			}
// 		}
// 	}
// 	console.log(a);
// }
// x([[6,2,3],[4,9,7]]);

// var x = 0;
// function a(arr){
// 	for(var i=0;i<arr.length;i++){
// 		for(var j=0;j<arr[i].length;j++){
// 			if(arr[i][j]>=arr[i][i]){
// 				x += arr[i][j];
// 			}
// 		}
// 	}
// 	console.log(x);
// }
// a([[6,2,3],[4,9,7]]);

// function fact(n){
// 	if(n>0){
// 		return n*fact(n-1);	
// 	}else{
// 		return 1;
// 	}
// }
// console.log(fact(5));

// function abs(x){
// 	if(x<0){
// 		return -x;
// 	}else{
// 		return x;
// 	}
// }
// console.log(abs(-4))

// function pow(x,y){
// 	return x**y;
// }
// alert(pow(2,3));

// function pow(x,y){
// 	let a = 1;
// 	for(var i=0;i<y;i++){
// 		a = a * x;
// 	}
// 	console.log(a);
// }
// pow(2,3)

// function ceil(x){
// 	var a = x-parseInt(x);
// 	if(a>=0.1){
// 		return parseInt(x)+1;
// 	}else{
// 		return x;
// 	}
// }
// alert(ceil(2.1));

// function floor(x){
// 	var a = x-parseInt(x);
// 	if(a>=0.1){
// 		return parseInt(x);
// 	}else{
// 		return x;
// 	}
// }
// alert(floor(2.9));



// function x(arr){
// 	for(var i=0;i<arr.length;i++){
// 		var a = parseInt(arr[i]);	
// 		console.log(a);
// 	}
// }
// x(["2 աչք", "2 ականջ", "1 քիթ", "1 բերան", "1 նյարդային համակարգ", "6 զգայարան"])


// var a = 3, b = 7;
// function sum(){
// 	var z = 0;
// 	for(var i=a+1; i<b; i++){
// 		z += i;
// 	}
// 	console.log(z);
// }
// sum();

// var a = 3, b = 7;
// function count(){
// 	var z = 0;
// 	for(var i=a+1; i<b; i++){
// 		z++;
// 	}
// 	console.log(z);
// }
// count();

// var a = 3, b = 7;
// function tvab(){
// 	var z = 0, y = 0;
// 	for(var i=a+1; i<b; i++){
// 		z += i;
// 		y++;
// 	}
// 	console.log(z/y);
// }
// tvab();

// function all(){
// 	tvab();
// 	count();
// 	sum();
// }
// all();


// function arr(x){
// 	for(var i=0; i<x.length; i++){
// 		if(typeof x[i]!="number"){
// 			alert(x[i]+" tiv che.")
// 		}else{
// 			alert(x[i]*x[i]);
// 		}
// 	}
// }
// arr(["hyut",13, "tey", "9", true]);


