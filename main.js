		let showSecondP = false;

		let myFullpage = new fullpage('#fullpage', {
        	licenseKey:"B45A73FD-763445B2-B34E9BA0-383C6C4D",
        	scrollbar:true,
        	keyboardScrolling: true,
			animateAnchor: true,
			recordHistory: true,
			autoScrolling: true,
        	afterLoad: function(origin, destination, direction){
        		let loadedSection = this;
        		//using index

        		let slides = document.getElementsByClassName("section");

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
		let map = Math.floor(value.map(0, 100, 1, 68));
		if (map >= 0 && map <= 68){
			document.getElementById("lattice").src = "assets/hyundai/leg_move/" + map + ".jpg"
		}
		let map2 = Math.floor(value.map(0, 100, 1, 27));
		if (map2 >= 1 && map2 <= 27){
			document.getElementById("bones").src = "assets/hyundai/leg_bones/hind/" + map2 + ".png"
		}
		
	}

// fullpage_api.setAllowScrolling(false)
 function lattice2( num ) {
		let value = parseInt(num)
		let map = Math.floor(value.map(0, 100, 1, 50));
		if (map >= 1 && map <= 50){
			document.getElementById("lattice2").src = "assets/hyundai/lattice/new/f" + map + ".jpg"
		}
		
	}
 function lattice3( num ) {
		let value = parseInt(num)
		let map = Math.floor(value.map(0, 100, 1, 93));
		if (map >= 1 && map <= 93){
			document.getElementById("lattice3").src = "assets/hyundai/explode/f" + map + ".jpg"
		}
		
	}

		document.getElementById("move-down").addEventListener("click", function(){
			fullpage_api.moveSectionDown();
			
		})
		document.getElementById("move-up").addEventListener("click", function(){
			fullpage_api.moveSectionUp();
		})