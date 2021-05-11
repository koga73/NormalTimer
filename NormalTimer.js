/*
 * NormalTimer v2.0.0 Copyright (c) 2021 AJ Savino
 * https://github.com/koga73/NormalTimer
 * MIT License
 */
var NormalTimer = function () {
	var _vars = {
		_delta: 0,
		_lastTime: 0,
		_startTime: new Date().getTime()
	};
	_vars._lastTime = _vars._startTime;

	var _methods = {
		elapsed: function () {
			//Getter
			return (new Date().getTime() - _vars._startTime) * 0.001;
		},

		delta: function () {
			//Getter
			return _vars._delta;
		},

		tick: function () {
			var currentTime = new Date().getTime();
			_vars._delta = (currentTime - _vars._lastTime) * 0.001;
			_vars._lastTime = currentTime;
			return _vars._delta;
		}
	};

	return {
		elapsed: _methods.elapsed,
		delta: _methods.delta,
		tick: _methods.tick
	};
};
