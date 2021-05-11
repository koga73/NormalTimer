/*
 * NormalTimer v2.0.0 Copyright (c) 2021 AJ Savino
 * https://github.com/koga73/NormalTimer
 * MIT License
 */
class NormalTimer {
	constructor() {
		const now = new Date().getTime();

		this._delta = 0;
		this._lastTime = now;
		this._startTime = now;
	}

	elapsed() {
		return (new Date().getTime() - this._startTime) * 0.001;
	}

	delta() {
		return this._delta;
	}

	tick() {
		const now = new Date().getTime();
		this._delta = (now - this._lastTime) * 0.001;
		this._lastTime = now;
		return this._delta;
	}
}
export default NormalTimer;
