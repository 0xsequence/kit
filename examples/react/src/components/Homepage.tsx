import { Box, Button, Card, Text, Image, useTheme, CheckmarkIcon, breakpoints } from '@0xsequence/design-system'
import { useOpenConnectModal } from '@0xsequence/kit'
import { Footer } from '@0xsequence/kit-example-shared-components'
import { useAccount } from 'wagmi'

import { ConnectionMode } from '../config'

import { Connected } from './Connected'

// append ?debug to url to enable debug mode
const searchParams = new URLSearchParams(location.search)
const connectionMode: ConnectionMode = searchParams.get('mode') === 'universal' ? 'universal' : 'waas'

export const Homepage = () => {
  const { theme } = useTheme()
  const { isConnected } = useAccount()
  const { setOpenConnectModal } = useOpenConnectModal()

  const handleSwitchConnectionMode = (mode: ConnectionMode) => {
    const searchParams = new URLSearchParams()

    searchParams.set('mode', mode)
    window.location.search = searchParams.toString()
  }

  const onClickConnect = () => {
    setOpenConnectModal(true)
  }

  return (
    <main>
      {!isConnected ? (
        <Box flexDirection="column" alignItems="center" justifyContent="center" gap="5" height="vh">
          <Box flexDirection="row" alignItems="center" justifyContent="center" gap="3">
            <Image style={{ width: '48px' }} src="images/kit-logo.svg" />
            <Image
              style={{
                width: '32px',
                filter: theme === 'dark' ? 'invert(0)' : 'invert(1)'
              }}
              src="images/kit-logo-text.svg"
            />
          </Box>

          <Box gap="2" flexDirection="row" alignItems="center">
            <Button onClick={onClickConnect} variant="feature" label="Connect" />
          </Box>

          <Box gap="2" flexDirection="column" paddingX="4" marginTop="10" width="full" style={{ maxWidth: breakpoints.md }}>
            <ConnectionModeSelect
              mode="waas"
              title="Embedded Wallet (WaaS)"
              description="Connect to an embedded wallet for a seamless experience."
              onClick={handleSwitchConnectionMode}
            />

            <ConnectionModeSelect
              mode="universal"
              title="Universal Wallet"
              description="Connect to the universal sequence wallet or EIP6963 Injected wallet providers (web extension wallets)."
              onClick={handleSwitchConnectionMode}
            />
          </Box>
        </Box>
      ) : (
        <Connected />
      )}

      <Footer />
    </main>
  )
}

interface ConnectionModeSelectProps {
  mode: ConnectionMode
  title: string
  description: string
  onClick: (mode: ConnectionMode) => void
}

const ConnectionModeSelect = (props: ConnectionModeSelectProps) => {
  const { mode, title, description, onClick } = props

  const isSelected = connectionMode === mode

  return (
    <Card
      width="full"
      clickable
      outlined
      borderWidth="thick"
      style={{
        boxShadow: isSelected ? '0 0 24px rgb(127 59 158 / 0.8)' : 'none',
        borderColor: isSelected ? 'rgb(127 59 200)' : 'var(--seq-colors-border-normal)'
      }}
      onClick={() => onClick(mode)}
    >
      <Box gap="2">
        <Box>
          <Text variant="normal" fontWeight="bold" color={isSelected ? 'text100' : 'text80'}>
            {title}
          </Text>
          <Text as="div" variant="normal" color="text50" marginTop="2">
            {description}
          </Text>
        </Box>
        <CheckmarkIcon size="md" style={{ color: 'rgb(127 59 200)' }} visibility={isSelected ? 'visible' : 'hidden'} />
      </Box>
    </Card>
  )
}
