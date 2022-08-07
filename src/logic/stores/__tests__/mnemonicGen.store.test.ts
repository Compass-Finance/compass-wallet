import { MnemonigGenStore } from '../mnemonicGen.store';

describe('MnemonicGenStore', () => {
  let mnemonicGenStore: MnemonigGenStore;
  beforeEach(() => {
    mnemonicGenStore = new MnemonigGenStore();
  });
  describe('populateMnemonicArray', () => {
    it('✅ It should populate the array with the proper structure', () => {
      mnemonicGenStore.populateMnemonicArray();
      const mnemonicArr = mnemonicGenStore.currentMnemonic;
      for (let i = 0; i < mnemonicArr.length - 1; i++) {
        expect(mnemonicArr[i].id).toBe(i.toString());
        expect(mnemonicArr[i].selected).toBe(false);
        expect(typeof mnemonicArr[i].word).toBe('string');
      }
    });
  });
  describe('selectWord', () => {
    it('✅ It should change the array when a word is selected', () => {
      mnemonicGenStore.currentMnemonic = [
        { id: '1', word: 'depth', selected: false },
        { id: '2', word: 'steak', selected: false },
        { id: '3', word: 'floor', selected: false },
        { id: '4', word: 'issue', selected: false },
        { id: '5', word: 'tiny', selected: false },
        { id: '6', word: 'coral', selected: false },
        { id: '7', word: 'runway', selected: false },
        { id: '8', word: 'front', selected: false },
        { id: '9', word: 'praise', selected: false },
        { id: '10', word: 'online', selected: false },
        { id: '11', word: 'bacon ', selected: false },
        { id: '12', word: 'until', selected: false },
      ];
      mnemonicGenStore.selectWord({ id: '3', word: 'floor', selected: false });
      expect(mnemonicGenStore.selectedWord).toBe('floor');
      expect(mnemonicGenStore.currentMnemonic[2].selected).toBe(true);
    });
  });
});
