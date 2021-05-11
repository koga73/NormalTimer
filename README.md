# NormalTimer

Provides a Normalized Timer

## EcmaScript Module Usage

```js
import NormalTimer from "normal-timer";

const normalTimer = new NormalTimer();

//Ex. Main render loop
function render() {
	const delta = normalTimer.tick();

	ball.x += ball.speed * delta; //Ex. Usage of delta
}
```

## CommonJS Usage

```js
var normalTimer = new NormalTimer();

//Ex. Main render loop
function render() {
	var delta = normalTimer.tick();

	ball.x += ball.speed * delta; //Ex. Usage of delta
}
```

## API

-   tick | Ticks the counter and returns the delta time in milliseconds since the last tick
-   delta | Returns the last calculated delta time in milliseconds
-   elapsed | Returns the time elapsed in milliseconds since creation of the normal timer
