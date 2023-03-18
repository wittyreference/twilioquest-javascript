class Materializer {
	constructor(targetName) {
		this.target = targetName;
		this.activated = false;
	}
	//property called target set to the first argument of the constructor
	
	activate() {
		this.activated = true;
		
	}
	//an instance function called activate that sets activated to true
	
	materialize() {
		if (this.activated === true) {
			return this.target;
		}		
	}

	//an instance function called materialize that returns the value of target if activated is set true, otherwise return nothing
}

const m = new Materializer('Kevin');

console.log(m.activated);

m.activate();
console.log(m.activated);

console.log(m.materialize());