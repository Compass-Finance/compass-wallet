import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { getValueFor } from '../logic/utils';
import { QueenRouter } from './QueenRouter';

export const MasterStackRouter = () => {
  const [arbBool, setArbBool]: any = useState(null);
  // ^^ You might want to use this as the primary logic
  useEffect(() => {
    const checkStore = async () => {
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
      {arbBool === true && <QueenRouter route='HomeTabView' />}
      {arbBool === false && <QueenRouter route='LandingView' />}
    </NavigationContainer>
  );
};
