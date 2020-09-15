import React from 'react';

import { Container } from './styles';
import BrainImg from '../../styles/assets/images/Brain.svg';
interface PremiumProps {
    price: number;
}
const PremiumBanner: React.FC<PremiumProps> = () => {
  return (
      <Container>
          <div>
            <h2>Lern even more!</h2>
            <span>Unlock premium features<br/>only for $9.99 per month.</span>
            <button>Go Premium</button>
          </div>
          <img src={BrainImg} alt="" />
      </Container>
  );
}

export default PremiumBanner;