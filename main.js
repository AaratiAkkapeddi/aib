

		let showSecondP = false;

		let myFullpage = new fullpage('#fullpage', {
        	licenseKey:"B45A73FD-763445B2-B34E9BA0-383C6C4D",
        	scrollbar:true,
        	keyboardScrolling: true,
			animateAnchor: true,
			lazyLoading:false,
			recordHistory: true,
			autoScrolling: true,
			touchSensitivity: 5,
        	afterLoad: function(origin, destination, direction){
        		let counter = document.getElementById("page").firstChild
        		counter.nodeValue = destination.index + 1;
        		let loadedSection = this;
        		window.speechSynthesis.cancel();
        		var msg = new SpeechSynthesisUtterance();
        		let text = document.querySelector("#section"+(destination.index + 1)+" .accessibility-txt");
        		if(text){
					text = text.innerHTML;
					msg.text = text;
					window.speechSynthesis.speak(msg);
	        		//using index
        		}
        		
        		

        		let slides = document.getElementsByClassName("section");
        		console.log(document.querySelector("#section"+ (destination.index + 1)).classList)
        		if(document.querySelector("#section"+ (destination.index + 1)).classList.contains("invert")){
        			document.querySelector("nav").classList.add("invert")
        			document.querySelector(".scroll-nav").classList.add("invert")
        		}else{
        			document.querySelector("nav").classList.remove("invert")
        			document.querySelector(".scroll-nav").classList.remove("invert")
        		}

				if(destination.index == 0){
					document.getElementById("move-up").classList.add("off")
				}else{
					document.getElementById("move-up").classList.remove("off")
				}
				if(destination.index == slides.length-1){
					document.getElementById("move-down").classList.add("off")
				}else{
					document.getElementById("move-down").classList.remove("off")
				}
        	},
        	onLeave: function(origin, destination, direction){
					var leavingSection = this;
     				

						var video = document.querySelector("#para-video");
					// or video = $('.video-selector')[0];
					if(video){

						console.log(video)
					video.pause();
					video.currentTime = 0;
					video.load();
					}
					
					//after leaving section 2
					// if(origin.index == 3 && direction =='down' && !document.querySelector("#section3 .one").classList.contains("off")){
					// 	document.querySelector("#section3 .one").classList.add("off");
	
					// 	return false;
					// } 

					// if(origin.index == 3 && direction =='up' && document.querySelector("#section3 .one").classList.contains("off")) {
					// 	document.querySelector("#section3 .one").classList.remove("off");

					// 	return false;
					// }

					
				}
		});

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// fullpage_api.setAllowScrolling(false)
 function lattice( num ) {
		let value = parseInt(num)
		let map = Math.floor(value.map(0, 100, 1, 189));
		if (map >= 1 && map <= 189){
			document.getElementById("lattice").src = "assets/hyundai/leg_move/f" + map + ".png"
		}
		
	
		
	}


// fullpage_api.setAllowScrolling(false)
 function lattice2( num ) {
		let value = parseInt(num)
		let map = Math.floor(value.map(0, 100, 1, 99));
		if (map >= 1 && map <= 99){
			document.getElementById("lattice2").src = "assets/hyundai/lattice/f" + map + ".png"
		}
		
	}

 function lattice4( num ) {
		let value = parseInt(num)
		let map = Math.floor(value.map(0, 100, 1, 119));
		if (map >= 1 && map <= 119){
			document.getElementById("lattice2").src = "assets/starck/fea/f" + map + ".jpg"
		}
		
	}
 function lattice5( num ) {
		let value = parseInt(num)
		let map = Math.floor(value.map(0, 100, 0, 65));
		if (map >= 1 && map <= 65){
			document.getElementById("lattice1").src = "assets/starck/rotate/frame" + map + ".jpg"
		}
		
	}

 function lattice3( num ) {
		let value = parseInt(num)
		let map = Math.floor(value.map(0, 100, 31, 227));
		if (map >= 31 && map <= 227){
			document.getElementById("lattice3").src = "assets/hyundai/explode/f" + map + ".png"
		}
		
	}
/*pavilion*/
 function pavilion1( num ) {
		let value = parseInt(num)
		let map = Math.floor(value.map(0, 100, 1, 172));
		if (map >= 1 && map <= 172){
			document.getElementById("pavilion1").src = "assets/pavilion/interactive1/file" + map + ".jpg"
		}	
}
 function pavilion2( num ) {
		let value = parseInt(num)
		let map = Math.floor(value.map(0, 100, 1, 79));
		if (map >= 1 && map <= 79){
			document.getElementById("pavilion2").src = "assets/pavilion/interactive2/file" + map + ".jpg"
		}	
}
/*jpl*/
 function jpl1( num ) {
		let value = parseInt(num)
		let map = Math.floor(value.map(0, 100, 1, 50));
		if (map >= 1 && map <= 50){
			document.getElementById("jpl1").src = "assets/jpl/interactive1/file" + map + ".jpg"
		}	
}
 function jpl2( num ) {
		let value = parseInt(num)
		let map = Math.floor(value.map(0, 100, 1, 272));
		if (map >= 1 && map <= 272){
			document.getElementById("jpl2").src = "assets/jpl/interactive2/file" + map + ".jpg"
		}	
}
document.getElementById("move-down").addEventListener("click", function(){
	fullpage_api.moveSectionDown();
	
})
document.getElementById("move-up").addEventListener("click", function(){
	fullpage_api.moveSectionUp();
})

window.addEventListener("load", function(){
	const loader = document.querySelector("#loader");
	loader.classList.add("off");
	
	
})
let counter = 0;

document.getElementById("go-home").addEventListener('focus', (event) => {
	window.speechSynthesis.cancel();
	if(counter < 1){
	let firstText = document.getElementById("first-accessibility")?.innerHTML || "";
	firstText = firstText + " press enter to go back to home page or press up & down arrows to navigate story"
	window.speechSynthesis.cancel();
	let msg = new SpeechSynthesisUtterance();
	msg.text = firstText
	window.speechSynthesis.speak(msg);
	counter = counter + 1;
	}else{
		window.speechSynthesis.cancel();
	let text = "press up & down arrows to navigate story or press enter to go back to home page"
	var msg = new SpeechSynthesisUtterance();
	msg.text = text
	window.speechSynthesis.speak(msg);

	}
})

document.addEventListener('keydown', checkKey);

function checkKey(e) {

    e = e || window.event;
    console.log(e.keyCode)
    if (e.keyCode == '9') {
    	if(document.activeElement?.id == "go-home"){
    		let text = "press enter to go back to home page or press up & down arrows to navigate story"
			var msg = new SpeechSynthesisUtterance();
			msg.text = text
			window.speechSynthesis.cancel();
			window.speechSynthesis.speak(msg);
    	}else{
    		e.preventDefault();
    		document.getElementById("go-home").focus()
   
    	}
     
    }


}
// document.getElementById("fake-click").addEventListener("click", function(){

// let firstText = document.getElementById("first-accessibility").innerHTML;
// 	console.log(firstText)
// window.speechSynthesis.cancel();
// let msg = new SpeechSynthesisUtterance();
// msg.text = firstText
// window.speechSynthesis.speak(msg);

// })

// document.addEventListener('keydown', checkKey);

// function checkKey(e) {

//     e = e || window.event;
//     console.log(e.keyCode)
//     if (e.keyCode == '9') {
//     	let firstText = document.getElementById("first-accessibility")
//     	if(firstText)
//         let home = document.getElementById("go-home")
//         if(home){
//         	home.focus()
// 	        window.speechSynthesis.speak("press enter to go back to home page");
// 	    }
//     }


// }


