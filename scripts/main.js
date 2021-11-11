let myImage  = document.querySelector('img');

myImage.onclick  = function(){
	let mySrc  = myImage.getAttribute('src');
	if(mySrc === 'images/mate.jpg'){
		myImage.setAttribute('src','images/mate2.jpg');
	}else{
		myImage.setAttribute('src','images/mate.jpg');
	}
}
	
	
	let myButton = document.querySelector('button');
	let myHeading = document.querySelector('h1');
	
	function setUserName(){
		let myName = prompt('Please enter your name.');
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Mozilla is cool, ' + myName;
	}
	if(!localStorage.getItem('name')){
		setUserName();
	}else {
		let storedName = local.Storage.getItem('name');
		myHeading.textContent  = 'Mozilla is cool, ' + storedName;
	}
	
	myButton.onclick  = function(){
		setUserName();
	}
	