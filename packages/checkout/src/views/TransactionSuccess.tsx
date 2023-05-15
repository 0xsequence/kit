import React, { useEffect } from 'react'
import { Box, CheckmarkIcon, Text } from '@0xsequence/design-system'

import { useCheckoutModal } from '../hooks'

export const TransactionSuccess = () => {
  const { closeCheckout, settings } = useCheckoutModal()

  useEffect(() => {
    setTimeout(() => {
      closeCheckout && closeCheckout()
      settings?.onSuccess && settings.onSuccess()
    }, 3000)
  }, [])

  return (
    <Box>
      <Box
        flexDirection="column"
        alignItems="center"
        position="absolute"
        style={{top: '50%', right: '50%', transform: 'translate(50%, -50%)'}}
      >
        <NotificationSuccessIcon />
        <Text fontSize="xlarge">Success!</Text>
        <Text variant="normal" color="text80">
          The transaction was successful.
        </Text>
      </Box>
    </Box>
 )
}

export const NotificationSuccessIcon = () => (
  <Box
    color="white"
    background="positive"
    alignItems="center"
    justifyContent="center"
    width="16"
    height="16"
    borderRadius="circle"
    marginBottom="2"
  >
    <CheckmarkIcon />
  </Box>
)