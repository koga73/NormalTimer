/*
* NormalTimer v1.0.0 Copyright (c) 2014 AJ Savino
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
var NormalTimer = function(){
	var _vars = {
		_elapsed:0,
		_delta:0,
		_lastTime:0,
		_startTime:new Date().getTime()
	};
	_vars._lastTime = _vars._startTime;
	
	var _methods = {
		elapsed:function(){ //Getter
			return _vars._elapsed;
		},

		delta:function(){ //Getter
			return _vars._delta;
		},

		tick:function(){
			var currentTime = new Date().getTime();
			_vars._elapsed = (currentTime - _vars._startTime) * 0.001;
			_vars._delta = (currentTime - _vars._lastTime) * 0.001;
			_vars._lastTime = currentTime;
			return _vars._delta;
		}
	};

	return {
		elapsed:_methods.elapsed,
		delta:_methods.delta,
		tick:_methods.tick
	};
};