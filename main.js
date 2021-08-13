		let showSecondP = false;

		let myFullpage = new fullpage('#fullpage', {
        	licenseKey:"B45A73FD-763445B2-B34E9BA0-383C6C4D",
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
					if(origin.index == 3 && direction =='down' && !document.querySelector("#section3 .one").classList.contains("off")){
						document.querySelector("#section3 .one").classList.add("off");
	
						return false;
					} 

					if(origin.index == 3 && direction =='up' && document.querySelector("#section3 .one").classList.contains("off")) {
						document.querySelector("#section3 .one").classList.remove("off");

						return false;
					}

					
				}
		});
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

fullpage_api.setAllowScrolling(false)
	document.getElementById("lattice").addEventListener("mousemove", function( event ) {
		let rect = document.getElementById("lattice").getBoundingClientRect();
		let map = Math.floor(event.x.map(rect.left, rect.right, 0, 98));
		if (map >= 0 && map <= 98){
			document.getElementById("lattice").src = "assets/lattice/frame" + map + ".jpg"
		}
		
	})

		document.getElementById("move-down").addEventListener("click", function(){
			fullpage_api.moveSectionDown();
			
		})
		document.getElementById("move-up").addEventListener("click", function(){
			fullpage_api.moveSectionUp();
		})