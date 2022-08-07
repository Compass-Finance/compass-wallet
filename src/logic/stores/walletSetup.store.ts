import { action, observable } from 'mobx';
import { LandingFlowStages } from '../models/int_models/Setup.model';
import { WRONG_WALLET_SETUP_STAGE_ERR } from '../models/int_models/Errors.model';

export class WalletSetupStore {
  @observable walletSetupStage:
    | typeof LandingFlowStages.Undecided.A
    | typeof LandingFlowStages.Undecided.B
    | typeof LandingFlowStages.WalletCreation.A
    | typeof LandingFlowStages.WalletCreation.B
    | typeof LandingFlowStages.WalletCreation.C
    | typeof LandingFlowStages.WalletCreation.D
    | typeof LandingFlowStages.WalletRecovery.A
    | typeof LandingFlowStages.Finished.A = LandingFlowStages.Undecided.A;
  @observable loading: boolean = false;

  @observable finished: boolean = false;
  // * @dev Forward Moving Undecided Actions ==> covered
  // ~ @dev: Undecided.A ==> Undecided.B
  @action moveForwardToSecondUndecidedStage() {
    // if (this.walletSetupStage !== LandingFlowStages.Undecided.A)
    //   throw WRONG_WALLET_SETUP_STAGE_ERR;
    // else
    if (this.loading === true) return;
    this.loading = true;
    this.walletSetupStage = LandingFlowStages.Undecided.B;
    this.loading = false;
  }
  // * ===================================== *

  // * @dev Backward Moving Undecided Actions ==> covered
  // ~ @dev: Undecided.B ==> Undecided.A
  @action moveBackwardToFirstUndecidedStage() {
    // if (this.walletSetupStage !== LandingFlowStages.Undecided.B)
    //   throw WRONG_WALLET_SETUP_STAGE_ERR;
    // else
    if (this.loading === true) return;
    this.loading = true;
    this.walletSetupStage = LandingFlowStages.Undecided.A;
    this.loading = false;
  }
  // * ===================================== *

  // * @dev: Forward Moving Wallet Creation Actions ==> covered
  // ~ @dev: Undecided.B ==> WalletCreation.A
  @action moveForwardToFirstWalletCreationStage() {
    // if (this.walletSetupStage !== LandingFlowStages.Undecided.B)
    //   throw WRONG_WALLET_SETUP_STAGE_ERR;
    // else
    if (this.loading === true) return;
    this.loading = true;
    this.walletSetupStage = LandingFlowStages.WalletCreation.A;
    this.loading = false;
  }

  // ~ @dev: WalletCreation.A ==> WalletCreation.B
  @action moveForwardToSecondWalletCreationStage() {
    // if (this.walletSetupStage !== LandingFlowStages.WalletCreation.A)
    //   throw WRONG_WALLET_SETUP_STAGE_ERR;
    // else
    if (this.loading === true) return;
    this.loading = true;
    this.walletSetupStage = LandingFlowStages.WalletCreation.B;
    this.loading = false;
  }

  // ~ @dev: WalletCreation.B ==> WalletCreation.C
  @action moveForwardToThirdWalletCreationStage() {
    // if (this.walletSetupStage !== LandingFlowStages.WalletCreation.B)
    //   throw WRONG_WALLET_SETUP_STAGE_ERR;
    // else
    if (this.loading === true) return;
    this.loading = true;
    this.walletSetupStage = LandingFlowStages.WalletCreation.C;
    this.loading = false;
  }
  // ~ @dev: WalletCreation.C ==> WalletCreation.D
  @action moveForwardToFourthWalletCreationStage() {
    // if (this.walletSetupStage !== LandingFlowStages.WalletCreation.C)
    //   throw WRONG_WALLET_SETUP_STAGE_ERR;
    // else
    if (this.loading === true) return;
    this.loading = true;
    this.walletSetupStage = LandingFlowStages.WalletCreation.D;
    this.loading = false;
  }
  // * ===================================== *

  // * @dev: Backward Moving Wallet Creation Stages ==> covering

  // ~ @dev: WalletCreation.A ==> Undecided.B
  @action moveBackwardToSecondUndecidedStage() {
    // if (this.walletSetupStage !== LandingFlowStages.WalletCreation.A)
    //   throw WRONG_WALLET_SETUP_STAGE_ERR;
    // else
    if (this.loading === true) return;
    this.loading = true;
    this.walletSetupStage = LandingFlowStages.Undecided.B;
    this.loading = false;
  }

  // ~ @dev: WalletCreation.B ==> WalletCreation.A
  @action moveBackwardToFirstWalletCreationStage() {
    // if (this.walletSetupStage !== LandingFlowStages.WalletCreation.B)
    //   throw WRONG_WALLET_SETUP_STAGE_ERR;
    // else
    if (this.loading === true) return;
    this.loading = true;
    this.walletSetupStage = LandingFlowStages.WalletCreation.A;
    this.loading = false;
  }

  // ~ @dev: WalletCreation.C ==> WalletCreation.B
  @action moveBackwardToSecondWalletCreationStage() {
    // if (this.walletSetupStage !== LandingFlowStages.WalletCreation.C)
    //   throw WRONG_WALLET_SETUP_STAGE_ERR;
    // else
    if (this.loading === true) return;
    this.loading = true;
    this.walletSetupStage = LandingFlowStages.WalletCreation.B;
    this.loading = false;
  }

  // ~ @dev: WalletCreation.D ==> WalletCreation.C
  @action moveBackwardToThirdWalletCreationStage() {
    // if (this.walletSetupStage !== LandingFlowStages.WalletCreation.D)
    //   throw WRONG_WALLET_SETUP_STAGE_ERR;
    // else
    if (this.loading === true) return;
    this.loading = true;
    this.walletSetupStage = LandingFlowStages.WalletCreation.C;
    this.loading = false;
  }

  // * ===================================== *

  // ~ @dev: WalletCreation.D ==> Finished.A
  @action finishWalletSetupFlow() {
    // TODO:
    // & When recovery is implemented add an or condition for
    // & the last stage of the recovery process
    // if (this.walletSetupStage !== LandingFlowStages.WalletCreation.D)
    //   throw WRONG_WALLET_SETUP_STAGE_ERR;
    // else
    if (this.loading === true) return;
    this.loading = true;
    this.finished = true;
    this.walletSetupStage = LandingFlowStages.Finished.A;
    this.loading = false;
  }

  @action
  setFinished(bool: boolean) {
    this.finished = bool;
  }
  // * ===================================== *

  // TODO:
  // * @dev: Undecided.B ==> Recovery.A
  @action moveForwardToFirstRecoveryStage() {
    if (this.loading === true) return;
    this.loading = true;
    this.walletSetupStage = LandingFlowStages.WalletRecovery.A;
    this.loading = false;
  }
}

export default new WalletSetupStore();
// Awesome We covered all of our bases here, now we can start fleshing out the rest
