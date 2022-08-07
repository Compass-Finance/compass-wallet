import { MnemonicGenStore, WalletSetupStore } from '../logic/stores';
import { NavigationContainer } from '@react-navigation/native';
import { HomeStackRouter } from './HomeRouter';

import { useState, useEffect } from 'react';
import { reaction } from 'mobx';
import { getValueFor } from '../logic/utils';
import { QueenRouter } from './QueenRouter';

interface setStateProps {
  arbBool: boolean;
  setArbBool: any;
}

export const MasterStackRouter = () => {
  const [arbBool, setArbBool]: any = useState(null);
  // ^^ You might want to use this as the primary logic
  useEffect(() => {
    const checkStore = async () => {
      const result = await getValueFor('pk');
      try {
        const result = await getValueFor('pk');
        if (result.length !== 0) {
          setArbBool(true);
        } else {
          setArbBool(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkStore();
  }, []);

  return (
    <NavigationContainer>
      {arbBool === true && <QueenRouter route='RecoverWallet' />}
      {arbBool === false && <QueenRouter route='LandingView' />}
    </NavigationContainer>
  );
};
