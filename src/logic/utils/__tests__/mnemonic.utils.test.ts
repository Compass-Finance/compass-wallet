import { generateNewMnemonic } from '../mnemonic.utils';
import { arrayEntry } from '../../models/int_models';

describe('Mnemonic Utils', () => {
  it('Should return a proper mnemonic array', () => {
    const newMnenomic: arrayEntry[] = generateNewMnemonic();
    expect(newMnenomic.length).toBe(12);
    for (let i = 0; i < newMnenomic.length - 1; i++) {
      expect(newMnenomic[i].id).toBe(i.toString());
      expect(newMnenomic[i].selected).toBe(false);
      expect(typeof newMnenomic[i].word).toBe('string');
    }
  });
});
