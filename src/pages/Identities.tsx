import React from 'react'
import { BodyWrapper, MediumHeaderWrapper } from './AppBody'
import DelegateList from '../components/governance/DelegateList'
import { RouteComponentProps } from 'react-router-dom'
import { useActiveWeb3React } from '../hooks'
import { ChainId } from '@uniswap/sdk'
import { OutlineCard } from '../components/Card'
import { useProtocolUpdate } from '../hooks/useProtocolUpdate'
import { AutoColumn } from '../components/Column'
import Dropdown from '../components/governance/Dropdown'
import { TYPE } from '../theme'
import { useActiveProtocol } from '../state/governance/hooks'
import { RowFixed } from '../components/Row'
import { WrappedListLogo } from '../components/governance/styled'
import Tabs from '../components/governance/Tabs'
import Profile from '../components/Profile'
import { CONNECT_CONFIG } from '../state/governance/reducer'
import { useDispatch } from 'react-redux'
import { updateLastSelectedProtocolID } from '../state/user/actions'

import { Above1080Only, Below1080Only } from '../theme/components'
import { AppDispatch } from 'state'

export default function Identities() {
  const dispatch = useDispatch<AppDispatch>()
  // reuse the protocol id 'connect' for redirects purpose
  dispatch(updateLastSelectedProtocolID({ protocolID: CONNECT_CONFIG.id }))

  return (
    <BodyWrapper>
      <AutoColumn gap="1rem">
        {/* <MediumHeaderWrapper>
          <AutoColumn gap="sm">
            <Above1080Only>
              <RowFixed>
                <WrappedListLogo src={activeProtocol?.logo} />
                <TYPE.mediumHeader ml="8px" fontWeight={600} color={activeProtocol?.primaryColor}>
                  above 1080
                </TYPE.mediumHeader>
              </RowFixed>
            </Above1080Only>
            <Below1080Only>below 1080</Below1080Only>
            show connect button here
          </AutoColumn>
        </MediumHeaderWrapper> */}
        <Profile />
      </AutoColumn>
    </BodyWrapper>
  )
}
