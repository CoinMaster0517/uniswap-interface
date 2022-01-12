import useActiveWeb3React from 'hooks/useActiveWeb3React'

import { useInterfaceMulticall } from '../../hooks/useContract'
import { useBlockNumber } from '../application/hooks'
import { multicall } from './instance'

// Create Updater wrappers that pull needed info from store
export default function Updater() {
  const latestBlockNumber = useBlockNumber()
  const { chainId } = useActiveWeb3React()
  const multicall2Contract = useInterfaceMulticall()
  return <multicall.Updater chainId={chainId} latestBlockNumber={latestBlockNumber} contract={multicall2Contract} />
}
