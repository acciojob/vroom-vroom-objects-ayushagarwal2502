// Complete the js code
function Car(make, model) {
	getMakeModel = function() {
    return this.make + " " + this.model;
}
}

function SportsCar(make, model, topSpeed) {
	 getTopSpeed(){
		 return this.topSpeed
	 }
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
