import { Box, Button, SendIcon, SwapIcon, Text, TokenImage } from '@0xsequence/design-system'
import {
  compareAddress,
  formatDisplay,
  getNativeTokenInfoByChainId,
  useExchangeRate,
  useCoinPrices,
  useTransactionHistory,
  useCoinBalanceSummary,
  ContractVerificationStatus
} from '@0xsequence/kit'
import { ethers } from 'ethers'
import { useAccount, useConfig } from 'wagmi'

import { HEADER_HEIGHT } from '../../constants'
import { useSettings, useNavigation } from '../../hooks'
import { InfiniteScroll } from '../../shared/InfiniteScroll'
import { NetworkBadge } from '../../shared/NetworkBadge'
import { TransactionHistoryList } from '../../shared/TransactionHistoryList'
import { computeBalanceFiat, flattenPaginatedTransactionHistory } from '../../utils'

import { CoinDetailsSkeleton } from './Skeleton'

export interface CoinDetailsProps {
  contractAddress: string
  chainId: number
}

export const CoinDetails = ({ contractAddress, chainId }: CoinDetailsProps) => {
  const { chains } = useConfig()
  const { setNavigation } = useNavigation()
  const { fiatCurrency, hideUnlistedTokens } = useSettings()
  const { address: accountAddress } = useAccount()

  const isReadOnly = !chains.map(chain => chain.id).includes(chainId)

  const {
    data: dataTransactionHistory,
    isPending: isPendingTransactionHistory,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useTransactionHistory({
    chainId,
    accountAddress: accountAddress || '',
    contractAddress
  })

  const transactionHistory = flattenPaginatedTransactionHistory(dataTransactionHistory)

  const { data: dataCoinBalance, isPending: isPendingCoinBalance } = useCoinBalanceSummary({
    filter: {
      accountAddresses: [accountAddress || ''],
      contractStatus: hideUnlistedTokens ? ContractVerificationStatus.VERIFIED : ContractVerificationStatus.ALL,
      contractWhitelist: [contractAddress],
      omitNativeBalances: true
    },
    chainId
  })

  const { data: dataCoinPrices, isPending: isPendingCoinPrices } = useCoinPrices([
    {
      chainId,
      contractAddress
    }
  ])

  const { data: conversionRate = 1, isPending: isPendingConversionRate } = useExchangeRate(fiatCurrency.symbol)

  const isPending = isPendingCoinBalance || isPendingCoinPrices || isPendingConversionRate

  if (isPending) {
    return <CoinDetailsSkeleton chainId={chainId} isReadOnly={isReadOnly} />
  }

  const isNativeToken = compareAddress(contractAddress, ethers.ZeroAddress)
  const logo = isNativeToken ? getNativeTokenInfoByChainId(chainId, chains).logoURI : dataCoinBalance?.contractInfo?.logoURI
  const symbol = isNativeToken ? getNativeTokenInfoByChainId(chainId, chains).symbol : dataCoinBalance?.contractInfo?.symbol
  const name = isNativeToken ? getNativeTokenInfoByChainId(chainId, chains).name : dataCoinBalance?.contractInfo?.name
  const decimals = isNativeToken ? getNativeTokenInfoByChainId(chainId, chains).decimals : dataCoinBalance?.contractInfo?.decimals
  const formattedBalance = ethers.formatUnits(dataCoinBalance?.balance || '0', decimals)
  const balanceDisplayed = formatDisplay(formattedBalance)

  const coinBalanceFiat = dataCoinBalance
    ? computeBalanceFiat({
        balance: dataCoinBalance,
        prices: dataCoinPrices || [],
        conversionRate,
        decimals: decimals || 0
      })
    : '0'

  const onClickSend = () => {
    setNavigation({
      location: 'send-coin',
      params: {
        chainId,
        contractAddress
      }
    })
  }

  const onClickSwap = () => {
    setNavigation({
      location: 'swap-coin',
      params: {
        chainId,
        contractAddress
      }
    })
  }
  return (
    <Box style={{ paddingTop: HEADER_HEIGHT }}>
      <Box flexDirection="column" gap="10" paddingBottom="5" paddingX="4" paddingTop="0" style={{ marginTop: '-20px' }}>
        <Box marginBottom="10" gap="2" alignItems="center" justifyContent="center" flexDirection="column">
          <TokenImage src={logo} size="xl" />
          <Text variant="large" color="text100" fontWeight="bold">
            {name}
          </Text>
          <NetworkBadge chainId={chainId} />
        </Box>
        <Box>
          <Text variant="normal" fontWeight="medium" color="text50">
            Balance
          </Text>
          <Box flexDirection="row" alignItems="flex-end" justifyContent="space-between">
            <Text variant="xlarge" fontWeight="bold" color="text100">{`${balanceDisplayed} ${symbol}`}</Text>
            <Text variant="normal" fontWeight="medium" color="text50">{`${fiatCurrency.sign}${coinBalanceFiat}`}</Text>
          </Box>
        </Box>
        {!isReadOnly && (
          <Box gap="2">
            <Button width="full" variant="primary" leftIcon={SendIcon} color="text100" label="Send" onClick={onClickSend} />
            <Button width="full" variant="primary" leftIcon={SwapIcon} color="text100" label="Buy" onClick={onClickSwap} />
          </Box>
        )}
        <Box>
          <InfiniteScroll onLoad={() => fetchNextPage()} hasMore={hasNextPage}>
            <TransactionHistoryList
              transactions={transactionHistory}
              isPending={isPendingTransactionHistory}
              isFetchingNextPage={isFetchingNextPage}
            />
          </InfiniteScroll>
        </Box>
      </Box>
    </Box>
  )
}
