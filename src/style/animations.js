import { keyframes } from 'styled-components';

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const fadeInUp = keyframes`
  from {
    top: 2rem;
    opacity: .25;
  }

  to {
    top: 0;
    opacity: 1;
  }
`;

export const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
   
   
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
