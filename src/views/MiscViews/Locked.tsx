import { Box, Image } from 'native-base';
import { images } from '../../../assets';

export const Locked = () => {
  return (
    <>
      <Box height='full' bgColor='background.100'>
        <Image
          size='full'
          alt='splash compass logo'
          source={images['splash']}
        />
      </Box>
    </>
  );
};
