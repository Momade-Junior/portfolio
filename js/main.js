let show = document.getElementById('menu').style.display="none";
let count = 0;



function showMenu() {
	count++;
	console.log(count);

	if (count==1) {
		let show = document.getElementById('menu').style.display = "block";
		
	}else if(count== 2){
		let show = document.getElementById('menu').style.display = "none";
		count=0;
	}
}