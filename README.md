##NormalTimer##
*By: AJ Savino*

Provides a Normalized Timer in JavaScript.

####Usage####
```JavaScript
	var normalTimer = new NormalTimer();
	
	//Ex. Main render loop
	function render(){
		var delta = normalTimer.tick();
		
		ball.x += ball.speed * delta; //Ex. Usage of delta
	}
```

###**API DOCUMENTATION:**###
|Method|Description|
|:------|:-----------|
|tick|Ticks the counter and returns the delta from the last tick|
|delta|Getter. Returns the last calculated delta value|
|elapsed|Getter. Returns the time elapsed since creation of the normal timer|