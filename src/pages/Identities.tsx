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

import { Above1080Only, Below1080Only } from '../theme/components'

export default function Identities({
  match: {
    params: { protocolID },
  },
}: RouteComponentProps<{ protocolID?: string }>) {
  // if valid protocol id passed in, update global active protocol
  useProtocolUpdate(protocolID)

  // if on testnet, show warning
  const { chainId } = useActiveWeb3React()

  const [activeProtocol] = useActiveProtocol()

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
