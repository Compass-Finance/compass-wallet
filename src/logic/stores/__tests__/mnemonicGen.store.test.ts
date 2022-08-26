import { MnemonicGenStore } from '../mnemonicGen.store';

describe('MnemonicGenStore', () => {
  let mnemonicGenStore: MnemonicGenStore;
  beforeEach(() => {
    mnemonicGenStore = new MnemonicGenStore();
  });
  describe('populateMnemonicArray', () => {
    it('✅ It should populate the array with the proper structure', () => {
      mnemonicGenStore.populateMnemonicArray();
      const mnemonicArr = mnemonicGenStore.currentMnemonic;
      for (let i = 0; i < mnemonicArr.length - 1; i++) {
        expect(mnemonicArr[i].id).toBe(i.toString());
        // expect(mnemonicArr[i].selected).toBe(false);
        expect(typeof mnemonicArr[i].word).toBe('string');
      }
    });
  });
  describe('selectWord', () => {
    it('✅ It should change the array when a word is selected', () => {
      mnemonicGenStore.currentMnemonic = [
        { id: '1', word: 'depth' },
        { id: '2', word: 'steak' },
        { id: '3', word: 'floor' },
        { id: '4', word: 'issue' },
        { id: '5', word: 'tiny' },
        { id: '6', word: 'coral' },
        { id: '7', word: 'runway' },
        { id: '8', word: 'front' },
        { id: '9', word: 'praise' },
        { id: '10', word: 'online' },
        { id: '11', word: 'bacon ' },
        { id: '12', word: 'until' },
      ];
      mnemonicGenStore.selectWord('floor');
      expect(mnemonicGenStore.selectedWord).toBe('floor');
    });
  });
});
