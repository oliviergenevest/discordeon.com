import React from 'react';
import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';
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

const LightboxHeader = ({ galleryTitle, images, currentIndex, onClose }) => (
    <TopHeaderBar>
        <LeftSideDescriptionContainer>
            <PageIndicator>
                {currentIndex + 1} / {images.length}
            </PageIndicator>
            <GallerySubheading>
                {images[currentIndex].alt}
            </GallerySubheading>
        </LeftSideDescriptionContainer>

        <RightSideContainer>
            
            <CloseButton onClick={onClose} type="button">
                <IoIosClose size={60} />
            </CloseButton>
        </RightSideContainer>
    </TopHeaderBar>
);


export default LightboxHeader;

const GalleryHeading = styled.h2`
    margin: 0 0 5px 0;
    font-weight: normal;
`; 

const GallerySubheading = styled.h4`
    margin: 0;
    font-weight: normal;
    color: ${colors.yellow};
`; 
 
const PageIndicator = styled.span`
    white-space: nowrap;
    min-width: 60px;
    text-align: left;
`;

const RightSideContainer = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
`;

const CloseButton = styled(ButtonControl)`
    height: 100%;
    display: flex;
    color: inherit;
`;

const LeftSideDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    /*padding: 8px 0 8px 10px;*/
`;

const TopHeaderBar = styled.header`
    z-index: 10;
    cursor: auto;
    display: flex;
    justify-content: space-between;
  /*  padding: 10px 2px 10px 20px;*/
    color:  ${colors.yellow};
  
`;