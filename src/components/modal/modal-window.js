import React from "react"
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import { useSpring, useTransition, animated , config} from "react-spring"
import ScrollLock /*, { TouchScrollable }*/ from 'react-scrolllock'
/*import theme from '../../config/theme'*/
import { MdClose } from 'react-icons/md'
import Boop from "../boop"
import {  colors} from '../../consts/style';

// Use a ternary operator to make sure that the document object is defined
const domTarget = typeof document !== `undefined` ? document.body : null;

const ModalWindow = ({ isActive, handleClose, children }) => {

  const animOverlay = useSpring({
    from: { opacity: 0},
    to: { opacity: isActive ? 1 : 0},
    config: config.gentle 
  });

  const transitions = useTransition(isActive, {
    from: { transform: `translateY(-50px)`, opacity: 0 },
    enter: { transform: `translateY(0px)`, opacity: 1},
    leave: { transform: `translateY(-20px)`, opacity: 0},
    unique: true,native:true,config: config.gentle 
  });
   
  const fragment = transitions((style, item) => {
    // 3. Render each item
    return (
    /*  domTarget && ReactDOM.createPortal(*/
        <ScrollLock isActive={isActive} >
         <Wrapper style={{  zIndex: isActive ? '6000':'-1'}}>
           <Overlay style={animOverlay}  onClick={() => handleClose(false)} />
          
              
                 <Content  style={style}>
                   <PButtonClose aria-label="Fermer" onClick={() => handleClose(false)} >
                      <Boop scale={1.2} timing={200}>  <MdClose style={{ verticalAlign: 'middle', fontSize:'3rem' }} /></Boop>
                   </PButtonClose>
                   {children}
                 </Content>
               
         
         </Wrapper>
        </ScrollLock>/*, domTarget )*/
    )
  })
 return  domTarget && ReactDOM.createPortal( fragment, domTarget );

  // return (
  //   domTarget && ReactDOM.createPortal(
  //    <ScrollLock isActive={isActive} >
  //     <Wrapper style={{  zIndex: isActive ? '6000':'-1'}}>
  //       <Overlay style={animOverlay}  onClick={() => handleClose(false)} />
  //       {transitions(
  //         ( item, key, props ) =>
           
  //             <Content key={key}  style={props}>
  //               <PButtonClose  onClick={() => handleClose(false)} >
  //                  <Boop scale={1.2} timing={200}>  <MdClose style={{ verticalAlign: 'middle', fontSize:'3rem' }} /></Boop>
  //               </PButtonClose>
  //               {children}
  //             </Content>
            
  //       )}
  //     </Wrapper>
  //    </ScrollLock>, domTarget )

  //   )
  
}

export default ModalWindow

const Wrapper = styled(animated.div)`
  position: fixed;
  bottom:0;
  right:0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
 /* background:#8888f1d9;*/
 background:#ebf1e7;
 @media screen and (max-width: 800px) {
  align-items: flex-start;
  }
  @media screen and (max-height: 759px) {
    align-items: flex-start;
    }

`;

const Overlay = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  
    height: 100%;
  width: 100%;
  overflow-y: auto;
  background:#ebf1e7;
`;

const Content = styled(animated.div)`
  position: relative;
  background: #fff;
  color:${colors.dark};
  width: 90%;
  max-width:1000px;
  margin-top: 3rem;
  
`;


const PButtonClose = styled.button`
z-index: 1;
  position:absolute;
  border:0;
  right:1.8rem;
  top:1.8rem;
  background-color:${colors.blue};
  color: #fff;
  cursor:pointer;
  border-radius: 100%;
  padding: 4px;
  &:hover, &:focus {
      color:white;
      background-color:${colors.blue};
  }
`

