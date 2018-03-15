import { loadState, saveState } from '../persistanceHelper';

describe('Persistance Helper', () => {
  it('should return default value when no value is present', () => {
    expect(loadState('nonExisting', 'default')).toBe('default');
  })

  it('should save and retrieve values', () => {
    saveState('testItem', 'value')
    expect(loadState('testItem', 'default')).toBe('value');
  })
})