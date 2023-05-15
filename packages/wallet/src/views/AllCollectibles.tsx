import React from 'react'
import { ChevronLeftIcon, Box, Button } from '@0xsequence/design-system'

import { CollectionRow } from '../components/CollectionRow'
import { useNavigation } from '../hooks'

interface AllCollectiblesProps {
  collectionAddress: string
}

export const AllCollectibles = ({ collectionAddress }: AllCollectiblesProps) => {
  const { setNavigation } = useNavigation()

  const onClickBack = () => {
    setNavigation && setNavigation({
      location: 'home'
    })
  }

  const getContent = () => {
    return (
      <Box>
        <CollectionRow
          collectionAddress={collectionAddress}
          showAll
        />
      </Box>
    )
  }

  return (
    <Box paddingX="4" paddingBottom="4">
      <Box alignItems="center" style={{ height: '60px' }}>
        <Button leftIcon={ChevronLeftIcon} onClick={onClickBack} label="Home" />
      </Box>

      {getContent()}
    </Box>
  )
}