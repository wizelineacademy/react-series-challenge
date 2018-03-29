import {TimeLine, Event, ADD_EVENT_DISPATCHER} from './test/reacnimation/React-nimation';
import { delay } from 'redux-saga'
describe('Reacnimation', () => {
  
	it('Completed Animation', ()=>{
		var onDone = jest.fn();
		var onDoneNotCall = jest.fn();
		var timeline = new TimeLine(400);
		timeline.removeEventListener(Event.COMPLETE, onDoneNotCall, timeline);
		timeline.addEventListener(Event.COMPLETE, 'onDone', timeline);
		timeline.addEventListener(Event.COMPLETE, onDone);
		timeline.addEventListener(Event.COMPLETE, onDone, timeline);
		timeline.addEventListener(Event.COMPLETE, onDoneNotCall, timeline);
		timeline.removeEventListener(Event.COMPLETE, onDoneNotCall, timeline);
		timeline.removeEventListener(Event.CHANGE, onDoneNotCall);
		timeline.onDone = jest.fn();
		timeline.setEffects({
			logo:[
				{
					time: {start: 200, duration: 200},
					value: {start: 35, end: 0},
					property: "y",
					ease: TimeLine.easeOutBack
				},
				{
					time: 200,
					value: ['none', 'block'],
					property: 'display'
				},
				{
					time: -1,
					value: ['absolute', 'relative'],
					property: 'position'
				},
				{
					time: function(index){
						return {start: 0, end: 200}
					},
					value: function(index){
						return {start: 0, end: 1}
					},
					property: "x",
					ease: TimeLine.easeOutBack
				}
			]
		})
		expect(timeline.easeInOut(300, 0, 1, 300)).toBe(1);

		timeline.getEffect('logo');
		timeline.getEffect('logo_');
		expect(timeline.position).toBe(0);
		expect(timeline.getTime(0, 300)).toBe(0);
		timeline.play();
		var obj = {};
		ADD_EVENT_DISPATCHER(obj)
		expect(obj.addEventListener.constructor === Function).toBe(true);
		return delay(600).then(() => {
			expect(timeline.onDone).toHaveBeenCalledTimes(1);
			expect(onDone).toHaveBeenCalledTimes(2);
			return true;
		});
	});
	it('Reverse Animation', ()=>{
		var timeline = new TimeLine(400);
		timeline._position = 400;
		timeline.direction = -1;
		timeline.play();
		return delay(600).then(() => {
			expect(timeline.position).toBe(0);
			return true;
		});
	});
	it('Pause Animation', ()=>{
		var timeline = new TimeLine(400);
		timeline._position = 400;
		timeline.direction = -1;
		timeline.play();
		timeline.pause();
		return delay(600).then(() => {
			expect(timeline.position).toBe(400);
			return true;
		});
	});
	it('Stop Animation', ()=>{
		Date.now = null;
		var timeline = new TimeLine(400);
		timeline._position = 400;
		timeline.direction = -1;
		timeline.play();
		timeline.stop();
		return delay(600).then(() => {
			expect(timeline.position).toBe(400);
			return true;
		});
	});
	it('Apply Matrix on other propoerties', ()=>{
		expect(TimeLine.applyMatrix({scaleX:1, scaleY:1, opacity: 0, x:100, scale:1, rotation: 0})).toEqual({"opacity": 0, "transform": "matrix(1,0,0,1,100,0)"});
	});
	it('Apply Matrix on other propoerties', ()=>{
		expect(TimeLine.applyMatrix({radius: 100, angle: 0})).toEqual({"opacity": 1, "transform": "matrix(1,0,0,1,100,0)"});
	});
	it('Apply Matrix on other propoerties', ()=>{
		expect(TimeLine.applyMatrix({display: 'none'}).display).toEqual('none');
	});
	/*it('easeOutSine', ()=>{
		expect(TimeLine.easeOutSine(300, 0, 1, 300)).toBe(1);
	});
	it('easeInOutSine', ()=>{
		expect(TimeLine.easeInOutSine(300, 0, 1, 300)).toBe(1);
	});
	it('easeInElastic', ()=>{
		expect(TimeLine.easeInElastic(300, 0, 1, 300)).toBe(1);
	});
	it('easeOutElastic', ()=>{
		expect(TimeLine.easeOutElastic(300, 0, 1, 300)).toBe(1);
	});
	it('easeInOutElastic', ()=>{
		expect(TimeLine.easeInOutElastic(300, 0, 1, 300)).toBeCloseTo(1, 1);
	});
	it('easeInBack', ()=>{
		expect(TimeLine.easeInBack(300, 0, 1, 300)).toBeCloseTo(1, 1);
	});*/
	it('easeOutBack', ()=>{
		expect(TimeLine.easeOutBack(300, 0, 1, 300)).toBe(1);
	});
	it('easeOutBack', ()=>{
		expect(TimeLine.easeOutBack(300, 0, 1, 300, 1.70158)).toBe(1);
	});
	/*it('easeInOutBack', ()=>{
		expect(TimeLine.easeInOutBack(300, 0, 1, 300)).toBe(1);
	});
	/*it('easeOutBounce', ()=>{
		expect(TimeLine.easeOutBounce(300, 0, 1, 300)).toBe(1);
	});
	it('easeOutBounce', ()=>{
		expect(TimeLine.easeOutBounce(0, 0, 1, 300)).toBe(0);
	});*/

});
