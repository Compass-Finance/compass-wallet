import { WalletSetupStore } from '../stores';

// ~ =============== FORWARD UNDECIDED STAGES ==================
export const moveForwardToSecondUndecidedStage = () => {
  WalletSetupStore.moveForwardToSecondUndecidedStage();
};

// ~ =============== FORWARD UNDECIDED STAGES ==================
// & =========== FORWARD WALLET CREATION ACTIONS ===============
export const moveForwardToFirstWalletCreationStage = () => {
  WalletSetupStore.moveForwardToFirstWalletCreationStage();
};

export const moveForwardToSecondWalletCreationStage = () => {
  WalletSetupStore.moveForwardToSecondWalletCreationStage();
};

export const moveForwardToThirdWalletCreationStage = () => {
  WalletSetupStore.moveForwardToThirdWalletCreationStage();
};

// & =========== FORWARD WALLET CREATION ACTIONS ===============
// * ============= BACKWARD WALLET CREATION ACTIONS =============
export const moveBackwardToFirstUndecidedStage = () => {
  WalletSetupStore.moveBackwardToFirstUndecidedStage();
};

export const moveBackwardToSecondUndecidedStage = () => {
  WalletSetupStore.moveBackwardToSecondUndecidedStage();
};

export const moveBackwardToFirstWalletCreationStage = () => {
  WalletSetupStore.moveBackwardToFirstWalletCreationStage();
};

export const moveBackwardToSecondWalletCreationStage = () => {
  WalletSetupStore.moveBackwardToSecondWalletCreationStage();
};

export const moveBackwardToThirdWalletCreationStage = () => {
  WalletSetupStore.moveBackwardToThirdWalletCreationStage();
};
// * ============= FORWARD WALLET RECOVERY ACTIONS =============

export const moveForwardToFirstRecoveryStage = () => {
  WalletSetupStore.moveForwardToFirstRecoveryStage();
};

// * ============= BACKWARD WALLET CREATION ACTIONS =============
