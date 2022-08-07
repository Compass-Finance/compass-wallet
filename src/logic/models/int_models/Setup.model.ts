enum WalletCreation {
  'A' = 'LandingFlow.WalletSetup.WalletCreation.GenerateMnemonic',
  'B' = 'LandingFlow.WalletSetup.WalletCreation.InsertDummyWord',
  'C' = 'LandingFlow.WalletSetup.WalletCreation.BackupMnemonic',
  'D' = 'LandingFlow.WalletSetup.WalletCreation.VerifyMnemonic',
}

enum WalletRecovery {
  'A' = 'LandingFlow.WalletSetup.WalletRecovery.RecoverWallet',
}

enum Undecided {
  'A' = 'LandingFlow.Undecided.GettingStarted',
  'B' = 'LandingFlow.Undecided.PickWalletSetup',
}

enum Finished {
  'A' = 'LandingFlow.Finished',
}

export const LandingFlowStages = {
  WalletCreation,
  WalletRecovery,
  Undecided,
  Finished,
};
