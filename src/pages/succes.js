import React, { Fragment } from "react"
import { colors } from "../consts/style"

import BtnPrimary from "../components/buttons/ButtonRounded"
import { FormattedMessage} from 'react-intl';
import {
  PageWrapper,
  PageInner,
  PageTitle,
  SectionTitle,
  Text,
  FocusText,
 
} from "../components/Elements"



export default function SuccesPage() {
  
  return (
    <Fragment>
      <PageWrapper>
        <PageInner>
          <PageTitle>Message envoyé</PageTitle>
          <div>
            <FocusText>
              <FormattedMessage id="formulaire__succes"/>
            </FocusText>
          </div>
         
                
          
        </PageInner>
      </PageWrapper>
    </Fragment>
  )
}
