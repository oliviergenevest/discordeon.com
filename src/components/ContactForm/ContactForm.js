import React from 'react'
import {Legende, Spacer, Flex} from '../Elements'
import styled from 'styled-components';
import { colors } from '../../consts/style';
import  BtnPrimary from '../buttons/ButtonRounded';
import { FormattedMessage} from 'react-intl';
const Form = styled.form`
  display:flex;
  flex-direction:column;
  label {display:none;}
`;

const Input = styled.input`
	display:block;
	width:100%;
	padding:1rem;
	background-color:${colors.blueLight};
	border-color: ${colors.dark};
	resize:vertical;
	border-style: none;
	margin-bottom:1.5rem!important;
`;
const Textarea = styled.textarea`
	display:block;
	width:100%;
	padding:1rem;
	background-color:${colors.blueLight};
	border-color: ${colors.yellow};
	resize:vertical;
	border-style: none;
	margin-bottom:1.5rem!important;
`;
const StyledFlex = styled(Flex)`
	align-items: baseline;
	justify-content:flex-start;
	gap:1rem;
	flex-direction:row;
	margin-bottom:1rem;
`;

const ContactForm = ({invisible=false}) => 
(
	
		<Form 
			name="Formulaire de contact" 
			action="/succes" 
			method="POST" 
			data-netlify="true" 
			netlify-honeypot="bot-field" 
		>
		   
		   
		     	<Input type="hidden" name="bot-field" />
		    	<Input type="hidden" name="form-name" value="Formulaire de contact" />
			   
			    <label htmlFor="email">Email</label>
			    <Input placeholder="Email" type="text" name="email" id="email" required  />
			           
		        <label htmlFor="message">Message</label>
		        <Textarea name="message" placeholder="Message"id="message" rows="6" required />
				<StyledFlex>
					<Input placeholder="Newsletter" type="checkbox" name="newsletter" id="newsletter" style={{width:"auto"}}/>
					<label htmlFor="newsletter">J'accepte de recevoir la newsletter trimestrielle Discordéon</label>
					<span>J'accepte de recevoir la newsletter trimestrielle Discordéon</span>
				</StyledFlex>
			    <div className="actions">
					   <FormattedMessage id="send">{txt =><BtnPrimary as="input" type="submit" value={txt} />}</FormattedMessage>
			    </div>
				<Spacer/>
			    <Legende>Note : Les données collectées via ce formulaire ont pour unique finalité de nous permettre de répondre à votre demande.</Legende>
		</Form>
)

export default ContactForm