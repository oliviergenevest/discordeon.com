import React from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';
import { Icon } from '@iconify/react';
import { colors } from '../../consts/style';

const ButtonControl = styled.button`
    z-index: 10;
    background: none;
    border-style: none;
    font-size: 50px;
    cursor: pointer;
    padding: 0;
    margin: 0;
    color: white;
    transition: all 0.2s linear;
   
`;

const Button = styled(ButtonControl)`
    position: absolute;
    left: ${({ position }) => (position === 'left' ? 0 : 'unset')};
    right: ${({ position }) => (position === 'right' ? 0 : 'unset')};
    :hover {
        color: ${colors.yellow};
        transform:translateX(${({ position }) => (position === 'right' && '-')}5px);
        transition: transform 0.2s ease-in-out;
    }
    :focus {
        outline: none;
        color: ${colors.yellow};
    }
`;
const ArrowButton = ({ position, onClick, disabled }) => {
    const transitions = useTransition(!disabled, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return transitions(
        (styles, item) =>
            item && (
                <animated.div
                    style={{
                        ...styles,
                        zIndex: 999,
                    }}
                >
                    
                        <Button position={position} type="button" onClick={onClick}>
                           
                            {position === 'left' && <Icon title="retour" icon="fe:arrow-left" />}
                            {position === 'right' && <Icon title="suivant" icon="fe:arrow-right"/>}
                           
                        </Button>
                    
                </animated.div>
            )
    );
};


export default ArrowButton;
