Object.extend = function(destination, source)
{
    for (var property in source)
        destination[property] = source[property];
    return destination;
};


var Event = {};
Event.ERROR = 'error';
Event.CANCEL = "cancel";
Event.OPEN = "open";
Event.CLOSE = 'close';
Event.COMPLETE = "onComplete";
Event.CHANGE = "onChange";
Event.MOVE = "MOVE";
Event.START = "START";
Event.STOP = "STOP";
Event.RESIZE = "resize";
Event.SELECT = "select";
Event.RENDER = "render";
Event.REFRESH = "refresh";
Event.STATE_CHANGE = "stateChange";
Event.SOUND_COMPLETE = "soundComplete";
Event.FOCUS_OUT = "focusOut";
Event.FOCUS_IN = "focusIn";
Event.REMOVE = 'remove';
Event.PROGRESS = 'progress';
Event.UPLOAD = 'upload';
Event.REMOVE = 'remove';
Event.DELETE = 'delete';

var Event_Dispatcher = {}

function ADD_EVENT_DISPATCHER(element)
{
    Object.extend(element, Event_Dispatcher);
}
Event_Dispatcher.addEventListener = function(type, listener, scope)
{
    if (!this.events)
    {
        this.events = {};
    }
    if (!this.events[type])
    {
        this.events[type] = [];
    }
	
    this.events[type].push(
    {
        listener: listener,
        scope: scope
    });
}

Event_Dispatcher.dispatchEvent = function(type, data)
{
    if (!this.events)
    {
        this.events = {};
    }
    if (this.events[type])
    {
        var events = this.events[type];
        for (var iEvent = 0; iEvent < events.length; iEvent++)
        {
            var listener = events[iEvent].listener;
            var scope = events[iEvent].scope;

            if ((typeof listener).toString() === "function")
            {
                if (scope)
                {
                    scope.eventRecieverFunction = listener;
                    scope.eventRecieverFunction(
                    {
                        currentTarget: this,
                        type: type,
                        data: data
                    });
                }
                else
                {
                    listener(
                    {
                        currentTarget: this,
                        type: type,
                        data: data
                    });
                }
            }
            else
            {
                scope[listener](
                {
                    currentTarget: this,
                    type: type,
                    data: data
                });
            }
        }
    }
}

Event_Dispatcher.removeEventListener = function(type, listener, scope)
{
    if (!this.events)
    {
        return false;
    }
    if (!this.events[type])
    {
        return false;
    }

    var events = this.events[type];
    for (var iEvent = 0; iEvent < events.length; iEvent++)
    {
        if ((listener === events[iEvent].listener) && (scope === events[iEvent].scope))
        {
            events.splice(iEvent, 1);
        }
    }
}
export class TimeLine 
{
    constructor(duration, interval)
    {
        interval = (interval ? interval : 33);
        this.duration = duration;
        this.direction = 1;
        this._position = 0;
        this.status = "STOP";
        this.startTime = 0;
        this.interval = interval;
        
        this.intervalObj = null;
        
        this.data = {};
        this.effects = {};
        
        ADD_EVENT_DISPATCHER(this);
        
        var self = this;
        
        this.REQ_ANIMATION = function(timeStamp){
            self.update();/*console.log(timeStamp, iFrame);iFrame++;*/
        }
    }
    play()
    {
        var self = this;
        
        if (((this.direction === 1) && (this._position === this.duration)) || ((this.direction === -1) && (this._position === 0)))
        {
        }
        else
        {
            this.startTime = new Date().getTime() - this._position;
            if (this.status !== 'PLAY')
            {
                var doAnimation = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;
                
                doAnimation(this.REQ_ANIMATION);
                /*else
                {
                    this.intervalObj = setInterval(function(){self.update()}, this.interval);
                }*/
            }
            this.status = 'PLAY';
        }
    }
    pause()
    {
        this.status = 'PAUSE';
        clearInterval(this.intervalObj);
    }
    stop()
    {
        this.status = 'STOP';
        clearInterval(this.intervalObj);
    }
    update()
    {
        var doAnimation;
        /*if (!Date.now)
        {
            Date.now = function()
            {
                return new Date().getTime();
            };
        }*/
        if (this.status !== 'PLAY')
        {
            return false;
        }
        var TIME = Date.now();
        if (this.direction === 1)
        {
            this._position =  TIME - this.startTime;
            this._position = Math.min(this.duration, this._position);
            if (this._position === this.duration)
            {
                this.status = 'STOP';
                clearInterval(this.intervalObj);
                this.dispatchEvent(Event.COMPLETE);
            }
            else
            {
                doAnimation = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;
                
                doAnimation(this.REQ_ANIMATION);
            }
        }
        else
        {
            this._position = Math.max((2 * this._position) - (TIME - this.startTime), 0);
            this.startTime = TIME - this._position;
            if (this._position === 0)
            {
                this.status = 'STOP';
                clearInterval(this.intervalObj);
                this.dispatchEvent(Event.COMPLETE);
            }
            else
            {
                doAnimation = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame;
                
                doAnimation(this.REQ_ANIMATION);
            }
        }
        
        this.dispatchEvent(Event.CHANGE);
    }
    getTime(timeOffset, duration, easeFunction)
    {
        var time = Math.min(Math.max(this._position - timeOffset, 0), duration);
        if (easeFunction != null)
        {
            return easeFunction(time, 0, 1, duration);
        }
        return this.easeInOut(time, 0, 1, duration);
    }
    
    easeInOut (t, b, c, d)
    {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }

    setEffect(id, data)
    {
        this.effects[id] = (data);
        /*var t = [{
            value:{start: 0, end: 1},
            time: {start: 100, duration: 200},
            property: 'opacity',
            ease: TimeLine.easeInBack
        }];*/
    }
    setEffects(effects)
    {
        for (var property in effects)
        {
            this.setEffect(property, effects[property]);
        }
    }
    getEffect(id, index)
    {
        if (!this.effects[id])
        {
            return TimeLine.applyMatrix({});
        }
        var effects = {};
        for (var iEffect = 0; iEffect < this.effects[id].length; iEffect++)
        {
            var effect= this.effects[id][iEffect];
            var time = effect.time;
            time = (time.constructor === Function ? time(index) : time);
            if (time.duration)
            {
                time.end = time.start + time.duration;
            }
            var value = effect.value;
            value = (value.constructor === Function ? value(index) : value);

            if (value.constructor === Object)
            {
                time = this.getTime(time.start, time.end - time.start, effect.ease);
                value = value.start + (value.end - value.start) * time;
                effects[effect.property] = value;
            }
            else if (value.constructor === Array && time.constructor === Number)
            {
                effects[effect.property] = (this.position < time ? value[0] : value[1]);
            }
        }
        return TimeLine.applyMatrix(effects);
    }
    /*static easeInSine (t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	}
	static easeOutSine (t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	}
	static easeInOutSine (t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    }
    static easeInElastic (t, b, c, d) 
    {
		var s=1.70158;var p=0;var a=c;
		if (t===0) return b;  if ((t/=d)===1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; s=p/4; }
		else s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	}
	static easeOutElastic (t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t===0) return b;  if ((t/=d)===1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; s=p/4; }
		else s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	}
	/*static easeInOutElastic (t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t===0) return b;  if ((t/=d/2)===2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; s=p/4; }
		else s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	}
	static easeInBack (t, b, c, d, s) {
		if (s === undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	}*/
	static easeOutBack (t, b, c, d, s) {
		if (s === undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}
	/*static easeInOutBack (t, b, c, d, s) {
		if (s === undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	}
	static easeOutBounce (t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
    }*/
    get position()
    {
        return this._position;
    }
    static applyMatrix( matrix)
    {
        var properties = ['scale', 'scaleX', 'scaleY', 'rotation', 'x', 'y', 'radius', 'angle', 'opacity'];
        var scale = (matrix.hasOwnProperty('scale') ? matrix.scale : 1);
        var scaleX = (matrix.hasOwnProperty('scaleX') ? matrix.scaleX * scale : scale);
        var scaleY = (matrix.hasOwnProperty('scaleY') ? matrix.scaleY * scale : scale);
        var rotation = (matrix.hasOwnProperty('rotation') ? matrix.rotation : 0) * (Math.PI / 180);
        var x = (matrix.hasOwnProperty('x') ? matrix.x : 0);
        var y = (matrix.hasOwnProperty('y') ? matrix.y : 0);
        
        if (matrix.hasOwnProperty('radius') && matrix.hasOwnProperty('angle'))
        {
            var radius = matrix.radius;
            var angle = matrix.angle;
            
            x = Math.round(radius * Math.cos(angle * Math.PI / 180) * 100) / 100 + x;
            y = Math.round(radius * Math.sin(angle * Math.PI / 180) * 100) / 100 + y;
            
        }
        
        
        var data = [scaleX * Math.cos(rotation), -scaleY * Math.sin(rotation)       ,
                    scaleY * Math.sin(rotation),  scaleX * Math.cos(rotation), x, y];
        
        var opacity = (matrix.hasOwnProperty('opacity') ? matrix.opacity : 1);

        var obj =  {opacity: opacity, transform:'matrix(' + data.join(',') + ')'};
        for (var property in matrix)
        {
            var propertyMatch = false;
            for (var iProp = 0; iProp < properties.length; iProp++)
            {
                if (properties[iProp] === property)
                {
                    propertyMatch = true;
                }
            }
            if (!propertyMatch)
            {
                obj[property] = matrix[property];
            }
        }
        return obj;
        //return 'matrix(' + data.join(',') + ')';
    }
}
export default TimeLine
export {Event, ADD_EVENT_DISPATCHER};