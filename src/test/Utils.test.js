import Utils from '../utils/Utils'

describe('test Utils', () => {
    it('Utils must have debounce', async () => {
        await Utils.debounce(() => {
            expect(Utils).toHaveProperty('debounce');
        }, 1);

    })
});

describe('test immediate from debounce', () => {
    it('debounce', async () => {
        const fkFn = jest.fn();
        let _dbnc = Utils.debounce(fkFn, 100, true);
        _dbnc();
        expect(fkFn).toHaveBeenCalledTimes(1);
    })
});

describe('test from debounce', () => {
    it('debounce', async () => {
        const fkFn = jest.fn(() => expect(this).toHaveBeenCalledTimes(1));
        let _dbnc = Utils.debounce(fkFn, 1, false);
        _dbnc();
    })
});

describe('test slugfy', () => {
    it('String to slug', () => {
        expect(Utils.slugfiy('Slug Test')).toBe('slug-test');
    })
});