'use client'

import { Box, Modal, ThemeProvider, Scroll } from '@0xsequence/design-system'
import { getModalPositionCss, useTheme } from '@0xsequence/kit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react'

import { HEADER_HEIGHT } from '../../constants'
import { History, Navigation, NavigationContextProvider, WalletModalContextProvider } from '../../contexts'

import { getHeader, getContent } from './utils'

export type KitWalletProviderProps = {
  children: React.ReactNode
}

const DEFAULT_LOCATION: Navigation = {
  location: 'home'
}

export const KitWalletProvider = (props: KitWalletProviderProps) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <KitWalletContent {...props} />
    </QueryClientProvider>
  )
}

export const KitWalletContent = ({ children }: KitWalletProviderProps) => {
  const { theme, position } = useTheme()

  // Wallet Modal Context
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)

  // Navigation Context
  const [history, setHistory] = useState<History>([])
  const [isBackButtonEnabled, setIsBackButtonEnabled] = useState(true)
  const navigation = history.length > 0 ? history[history.length - 1] : DEFAULT_LOCATION

  const displayScrollbar =
    navigation.location === 'home' ||
    navigation.location === 'collection-details' ||
    navigation.location === 'collectible-details' ||
    navigation.location === 'coin-details' ||
    navigation.location === 'history' ||
    navigation.location === 'search' ||
    navigation.location === 'search-view-all' ||
    navigation.location === 'settings-currency'

  useEffect(() => {
    if (openWalletModal) {
      setHistory([])
    }
  }, [openWalletModal])

  return (
    <WalletModalContextProvider value={{ setOpenWalletModal, openWalletModalState: openWalletModal }}>
      <NavigationContextProvider value={{ setHistory, history, isBackButtonEnabled, setIsBackButtonEnabled }}>
        <div id="kit-wallet">
          <ThemeProvider root="#kit-wallet" scope="kit" theme={theme}>
            <AnimatePresence>
              {openWalletModal && (
                <Modal
                  contentProps={{
                    style: {
                      maxWidth: '400px',
                      height: 'fit-content',
                      ...getModalPositionCss(position)
                    }
                  }}
                  scroll={false}
                  backdropColor="backgroundBackdrop"
                  onClose={() => setOpenWalletModal(false)}
                >
                  <Box id="sequence-kit-wallet-content">
                    {getHeader(navigation)}

                    {displayScrollbar ? (
                      <Scroll style={{ paddingTop: HEADER_HEIGHT, height: 'min(800px, 80vh)' }}>{getContent(navigation)}</Scroll>
                    ) : (
                      getContent(navigation)
                    )}
                  </Box>
                </Modal>
              )}
            </AnimatePresence>
          </ThemeProvider>
        </div>
        {children}
      </NavigationContextProvider>
    </WalletModalContextProvider>
  )
}
