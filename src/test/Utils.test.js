import Utils from '../utils/Utils'

describe('test Utils', ()=> {
    it('Utils must have debounce', async () => {
        await Utils.debounce(()=>{
            expect(Utils).toHaveProperty('debounce');
        },1);
        
    })
});

describe('test debounce', ()=> {
    it('Debounce must be called', () => {
        const callback = jest.fn();
        expect(Utils.debounce(callback, 100)).toMatchSnapshot()
    })
});

describe('test slugfy', ()=>{
    it('String to slug', ()=>{
        expect(Utils.slugfiy('Slug Test')).toBe('slug-test');
    })
});

describe('test json to url', ()=>{
    it('json in url query format', ()=>{
        expect(Utils.jsonToURL({test:'a',result: 'b'})).toBe('test=a&result=b');
    })
});

describe('test add comma to numbers', () => {
    it('test numberWithCommas', ()=>{
        expect(Utils.numberWithCommas(1000)).toBe('1,000');
    })
})

describe('test smoothScroll', () => {
    it('scroll to element', () => {
        const element = document.createElement('div');
        const header = document.createElement('header');
        header.id = 'headerFixed';
        header.style.heigh = '5em';
        document.body.appendChild(header);
        element.id = 'tg';
        document.body.appendChild(element);
        Utils.smoothScrollTo(element);
    })
})