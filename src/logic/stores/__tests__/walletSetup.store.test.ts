import { WalletSetupStore } from '../walletSetup.store';
import { LandingFlowStages } from '../../models/int_models/Setup.model';
import { WRONG_WALLET_SETUP_STAGE_ERR } from '../../models/int_models/Errors.model';

describe('walletSetupStore', () => {
  let walletSetupStore: WalletSetupStore;

  beforeEach(() => {
    walletSetupStore = new WalletSetupStore();
  });

  it('should instantiate the `walletSetupStage` to the proper value', () => {
    expect(walletSetupStore.walletSetupStage).toBe(
      LandingFlowStages.Undecided.A
    );
  });

  describe('Undecided Stages', () => {
    beforeEach(() => walletSetupStore.moveForwardToSecondUndecidedStage());
    describe('Forward Moving Functions', () => {
      it('✅ Undecided.A ==> Undecided.B', () => {
        expect(walletSetupStore.walletSetupStage).toBe(
          LandingFlowStages.Undecided.B
        );
      });
      it('❌ ==> Undecided.B', () => {
        try {
          walletSetupStore.moveForwardToSecondUndecidedStage();
          fail('Should not work');
        } catch (e) {
          expect(e).toBe(WRONG_WALLET_SETUP_STAGE_ERR);
        }
      });
    });
    describe('Backward Moving functions', () => {
      it('✅ WalletCreation.A ==> Undecided.B', () => {
        walletSetupStore.moveBackwardToFirstUndecidedStage();
        expect(walletSetupStore.walletSetupStage).toBe(
          LandingFlowStages.Undecided.A
        );
      });
      it('❌ ==> Undecided.A', () => {
        walletSetupStore.moveBackwardToFirstUndecidedStage();
        try {
          walletSetupStore.moveBackwardToFirstUndecidedStage();
          fail('Should fail');
        } catch (e) {
          expect(e);
        }
      });
    });
  });

  describe('WalletCreationStages', () => {
    beforeEach(() => {
      walletSetupStore.moveForwardToSecondUndecidedStage();
    });
    describe('Forward Moving Functions', () => {
      it('✅ Undecided.B ==> WalletCreation.A', () => {
        walletSetupStore.moveForwardToFirstWalletCreationStage();
        expect(walletSetupStore.walletSetupStage).toBe(
          LandingFlowStages.WalletCreation.A
        );
      });

      it('❌ ==> WalletCreation.A', () => {
        walletSetupStore.moveForwardToFirstWalletCreationStage();
        try {
          walletSetupStore.moveForwardToFirstWalletCreationStage();
          fail('Should not work');
        } catch (e) {
          expect(e).toBe(WRONG_WALLET_SETUP_STAGE_ERR);
        }
      });

      it('✅ WalletCreation.A ==> WalletCreation.B', () => {
        walletSetupStore.moveForwardToFirstWalletCreationStage();
        walletSetupStore.moveForwardToSecondWalletCreationStage();
        expect(walletSetupStore.walletSetupStage).toBe(
          LandingFlowStages.WalletCreation.B
        );
      });

      it('❌ ==> WalletCreation.B', () => {
        try {
          walletSetupStore.moveForwardToSecondWalletCreationStage();
          fail('Should not work');
        } catch (e) {
          expect(e).toBe(WRONG_WALLET_SETUP_STAGE_ERR);
        }
      });

      it('✅ WalletCreation.B ==> WalletCreation.C', () => {
        walletSetupStore.moveForwardToFirstWalletCreationStage();
        walletSetupStore.moveForwardToSecondWalletCreationStage();
        walletSetupStore.moveForwardToThirdWalletCreationStage();
        expect(walletSetupStore.walletSetupStage).toBe(
          LandingFlowStages.WalletCreation.C
        );
      });

      it('❌ ==> WalletCreation.C', () => {
        try {
          walletSetupStore.moveForwardToThirdWalletCreationStage();
          fail('should not work');
        } catch (e) {
          expect(e).toBe(WRONG_WALLET_SETUP_STAGE_ERR);
        }
      });

      it('✅ WalletCreation.C ==> WalletCreation.D', () => {
        walletSetupStore.moveForwardToFirstWalletCreationStage();
        walletSetupStore.moveForwardToSecondWalletCreationStage();
        walletSetupStore.moveForwardToThirdWalletCreationStage();
        walletSetupStore.moveForwardToFourthWalletCreationStage();
        expect(walletSetupStore.walletSetupStage).toBe(
          LandingFlowStages.WalletCreation.D
        );
      });
      it('❌ ==> WalletCreation.D', () => {
        try {
          walletSetupStore.moveForwardToFourthWalletCreationStage();
          fail('should not work');
        } catch (e) {
          expect(e).toBe(WRONG_WALLET_SETUP_STAGE_ERR);
        }
      });
    });
    describe('Backward moving functions', () => {
      beforeEach(() => {
        walletSetupStore.moveForwardToFirstWalletCreationStage();
      });
      it('✅ WalletCreation.A ==> Undecided.B && fail gracefully', () => {
        walletSetupStore.moveBackwardToSecondUndecidedStage();
        expect(walletSetupStore.walletSetupStage).toBe(
          LandingFlowStages.Undecided.B
        );
        try {
          walletSetupStore.moveBackwardToSecondUndecidedStage();
          fail("Shouldn't work");
        } catch (e) {
          expect(e).toBe(WRONG_WALLET_SETUP_STAGE_ERR);
        }
      });
      it('✅ WalletCreation.B ==> WalletCreation.A && fail gracefully', () => {
        walletSetupStore.moveForwardToSecondWalletCreationStage();
        walletSetupStore.moveBackwardToFirstWalletCreationStage();
        expect(walletSetupStore.walletSetupStage).toBe(
          LandingFlowStages.WalletCreation.A
        );
        try {
          walletSetupStore.moveBackwardToFirstWalletCreationStage();
          fail("Shouldn't work");
        } catch (e) {
          expect(e).toBe(WRONG_WALLET_SETUP_STAGE_ERR);
        }
      });
      it('✅ Walletcreation.C ==> WalletCreation.B && fail gracefully', () => {
        walletSetupStore.moveForwardToSecondWalletCreationStage();
        walletSetupStore.moveForwardToThirdWalletCreationStage();
        walletSetupStore.moveBackwardToSecondWalletCreationStage();
        expect(walletSetupStore.walletSetupStage).toBe(
          LandingFlowStages.WalletCreation.B
        );
        try {
          walletSetupStore.moveBackwardToSecondWalletCreationStage();
        } catch (e) {
          expect(e).toBe(WRONG_WALLET_SETUP_STAGE_ERR);
        }
      });
      it('✅ WalletCreation.D ==> WalletCreation.C && fail gracefully', () => {
        walletSetupStore.moveForwardToSecondWalletCreationStage();
        walletSetupStore.moveForwardToThirdWalletCreationStage();
        walletSetupStore.moveForwardToFourthWalletCreationStage();
        walletSetupStore.moveBackwardToThirdWalletCreationStage();
        expect(walletSetupStore.walletSetupStage).toBe(
          LandingFlowStages.WalletCreation.C
        );
      });
    });
  });
});
