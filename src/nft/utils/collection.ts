import { GenieAsset } from 'nft/types'

export const isInSameSudoSwapPool = (assetA: GenieAsset, assetB: GenieAsset): boolean => {
  if (!assetA.sellorders || !assetB.sellorders) return false

  const assetASudoSwapPoolParameters = assetA.sellorders[0].protocolParameters
  const assetBSudoSwapPoolParameters = assetB.sellorders[0].protocolParameters

  const assetAPoolAddress = assetASudoSwapPoolParameters?.poolAddress
    ? (assetASudoSwapPoolParameters.poolAddress as string)
    : undefined
  const assetBPoolAddress = assetBSudoSwapPoolParameters?.poolAddress
    ? (assetBSudoSwapPoolParameters.poolAddress as string)
    : undefined

  if (!assetAPoolAddress || !assetBPoolAddress) return false
  if (assetAPoolAddress !== assetBPoolAddress) return false

  return true
}

export const isInSameMarketplaceCollection = (assetA: GenieAsset, assetB: GenieAsset): boolean => {
  return assetA.address === assetB.address && assetA.marketplace === assetB.marketplace
}

export const blocklistedCollections = [
  '0xd5eeac01b0d1d929d6cffaaf78020af137277293',
  '0x85c08fffa9510f87019efdcf986301873cbb10d6',
  '0x32d7e58933fceea6b73a13f8e30605d80915b616',
  '0x85c08fffa9510f87019efdcf986301873cbb10d6',
  '0xd5eeac01b0d1d929d6cffaaf78020af137277293',
  '0x88e49f9fd4cc3d30f2f46c652f59fb52c4874f23',
  '0xabefbc9fd2f806065b4f3c237d4b59d9a97bcac7',
  '0xd945f759d422ae30a6166838317b937de08380e3',
  '0x8e52fb89b6311bd9ec36bd7cea9a0c311fd27a92',
  '0x2079c2765462af6d78a9ccbddb6ff3c6d4ba2e24',
  '0xd4d871419714b778ebec2e22c7c53572b573706e',
]
