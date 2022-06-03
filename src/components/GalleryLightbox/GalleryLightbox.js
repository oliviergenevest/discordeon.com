import React, {useState} from 'react'
/*import Carousel, { Modal, ModalGateway } from 'react-images'*/
import {GatsbyImage} from 'gatsby-plugin-image'
import Lightbox from 'react-spring-lightbox';

import ArrowButton from './LightboxArrowButton';
import LightboxHeader from './LightboxHeader';
import styled from 'styled-components';

const GalleryLightbox = (images, onClick) => {

	const [currentImageIndex, setCurrentIndex] = useState(0);
	const [modalIsOpen, setModalIsOpen] = useState(0);

  const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
        currentImageIndex + 1 < images.images.length &&
        setCurrentIndex(currentImageIndex + 1);

	const PHOTO_SET = images.images.map((image, i) => {
    // creer 2 jeux de données un pour lightbox (fullsize) l'autre pour gallery 
      return {
        src: image.url,
        loading: 'lazy',
        alt:image.title,
      }
	});	

	return (
	<><FlexGalleryImage>
		{images.images.map((img , j) => (
			<div onClick={ () => { setCurrentIndex(j);setModalIsOpen(!modalIsOpen)}} key={j} >
			  <GatsbyImage
				alt={img.title}
				image={img.gatsbyImageData}
			  />
				<figcaption>{img.description}</figcaption>
			</div>
		  ))}
		</FlexGalleryImage>	
        <StyledLightbox
		        onClose={() => setModalIsOpen(0)}
		 	   
            isOpen = { modalIsOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
					  images={PHOTO_SET}
					  currentIndex={currentImageIndex}
           /* Add your own UI */
           renderHeader={() => (
            <LightboxHeader
              
              images={PHOTO_SET}
              currentIndex={currentImageIndex}
              onClose={() => setModalIsOpen(0)}
            />
          )}
                // renderFooter={() => (<CustomFooter />)}
                 renderPrevButton={({ canPrev }) => (<ArrowButton  position="left" onClick={gotoPrevious} disabled={!canPrev}/>)}
                renderNextButton={({ canNext }) => (<ArrowButton  position="right"	onClick={gotoNext}	disabled={!canNext}/>)}
                 // renderImageOverlay={() => (<ImageOverlay />)}
    
                /* Add styling */
                // className="cool-class"
                 /*style={{ background: "#080415f7" }}*/
    
                /* Handle closing */
                // onClose={handleClose}
      
                /* Use single or double click to zoom */
                // singleClickToZoom
    
                /* react-spring config for open/close animation */
                 pageTransitionConfig={{
                     from: { transform: "scale(0.75)", opacity: 0 },
                   enter: { transform: "scale(1)", opacity: 1 },
                    leave: { transform: "scale(0.75)", opacity: 0 },
                     config: { mass: 1, tension: 320, friction: 32 }
                 }}
            />
        </>);
        
        		


}

export default GalleryLightbox



const StyledLightbox = styled(Lightbox)`
    background:#18181ff2; 
`;

const FlexGalleryImage = styled.div`
    display:flex;
	gap:1rem;
	/*& ${GatsbyImage}:hover {cursor:pointer;}*/
`;