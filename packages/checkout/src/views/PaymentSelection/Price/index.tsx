import { useContractInfo } from '@0xsequence/kit'
import { Box, Spinner, Text, TokenImage, tokenImageUrl } from '@0xsequence/design-system'
import { findSupportedNetwork } from '@0xsequence/network'
import { formatUnits } from 'viem'

import { useSelectPaymentModal } from '../../../hooks'

export const Price = () => {
  const { selectPaymentSettings } = useSelectPaymentModal()
  const nftQuantity = selectPaymentSettings!.nftQuantity
  const price = selectPaymentSettings!.price
  const chain = selectPaymentSettings!.chain
  const network = findSupportedNetwork(chain)
  const chainId = network?.chainId || 137
  const currencyAddress = selectPaymentSettings!.currencyAddress
  const { data: currencyInfo, isLoading: isLoadingCurrencyInfo } = useContractInfo(chainId, currencyAddress)
  const fullPrice = BigInt(price) * BigInt(nftQuantity)

  const isLoading = isLoadingCurrencyInfo

  if (isLoading) {
    return (
      <Box
        paddingX="6"
        justifyContent="center"
        alignItems="center"
        width="full"
        style={{
          height: '48px'
        }}
      >
        <Spinner />
      </Box>
    )
  }

  const tokenLogo = currencyInfo?.logoURI
  const tokenSymbol = currencyInfo?.symbol
  const tokenDecimals = currencyInfo?.decimals
  const formattedPrice = formatUnits(fullPrice, tokenDecimals || 0)
  
  // TODO: get fiat price and convert the full price
  const priceFiat = '~111 USD'

  return (
    <Box
      paddingX="6"
      justifyContent="space-between"
      alignItems="center"
      width="full"
      style={{
        height: '48px'
      }}
    >
      <Box>
        <Text variant="small" color="text50" fontWeight="medium">
          Price
        </Text>
      </Box>
      <Box
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Box
          gap="2"
          alignItems="center"
        >
          <TokenImage
            src={tokenLogo}
            style={{
              width: '20px'
            }}
          />
          <Text variant="large" fontWeight="bold" color="text100">{`${formattedPrice} ${tokenSymbol}`}</Text>
        </Box>
        <Box>
          <Text variant="normal" fontWeight="medium" color="text50">
            {priceFiat}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}