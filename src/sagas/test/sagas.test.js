import rootSaga from '../sagas';

describe('sagas', () => {
    test('should return function values', () => {
        expect(rootSaga).toBeTruthy()
    })

    test('should return undefined function values', () => {
        expect(rootSaga.setValuesSearched).toBeUndefined()
    })

    test('should return undefined function values', () => {
        expect(rootSaga.setValuesTrending).toBeUndefined()
    })
});