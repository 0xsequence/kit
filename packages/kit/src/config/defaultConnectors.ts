import { CreateConnectorFn } from 'wagmi'

import { apple } from '../connectors/apple'
import { appleWaas } from '../connectors/apple/appleWaas'
import { coinbaseWallet } from '../connectors/coinbaseWallet'
import { email } from '../connectors/email'
import { emailWaas } from '../connectors/email/emailWaas'
import { facebook } from '../connectors/facebook'
import { google } from '../connectors/google'
import { googleWaas } from '../connectors/google/googleWaas'
import { sequence } from '../connectors/sequence'
import { twitch } from '../connectors/twitch'
import { walletConnect } from '../connectors/walletConnect'
import { getKitConnectWallets } from '../utils/getKitConnectWallets'

interface GetDefaultConnectors {
  walletConnectProjectId: string
  projectAccessKey: string
  appName: string
  defaultChainId?: number
}

export const getDefaultConnectors = ({
  walletConnectProjectId,
  defaultChainId,
  projectAccessKey,
  appName
}: GetDefaultConnectors): CreateConnectorFn[] => {
  const connectors = getKitConnectWallets(projectAccessKey, [
    email({
      defaultNetwork: defaultChainId,
      connect: {
        app: appName
      }
    }),
    google({
      defaultNetwork: defaultChainId,
      connect: {
        app: appName
      }
    }),
    facebook({
      defaultNetwork: defaultChainId,
      connect: {
        app: appName
      }
    }),
    twitch({
      defaultNetwork: defaultChainId,
      connect: {
        app: appName
      }
    }),
    apple({
      defaultNetwork: defaultChainId,
      connect: {
        app: appName
      }
    }),
    sequence({
      defaultNetwork: defaultChainId,
      connect: {
        app: appName
      }
    }),
    walletConnect({
      projectId: walletConnectProjectId
    })
  ])

  return connectors
}

interface GetDefaultWaasConnectors {
  projectAccessKey: string
  waasConfigKey: string
  googleClientId?: string
  appleClientId?: string
  appleRedirectURI?: string

  walletConnectProjectId: string

  appName: string
  defaultChainId?: number

  legacyEmailAuth?: boolean

  enableConfirmationModal?: boolean

  isDev?: boolean
}

export const getDefaultWaasConnectors = ({
  projectAccessKey,
  waasConfigKey,
  googleClientId,
  appleClientId,
  appleRedirectURI,
  walletConnectProjectId,
  appName,
  defaultChainId,
  enableConfirmationModal,
  legacyEmailAuth = false,
  isDev = false
}: GetDefaultWaasConnectors): CreateConnectorFn[] => {
  const wallets: any[] = [
    emailWaas({
      projectAccessKey,
      waasConfigKey,
      enableConfirmationModal,
      network: defaultChainId,
      legacyEmailAuth,
      isDev
    }),
    coinbaseWallet({
      appName
    }),
    walletConnect({
      projectId: walletConnectProjectId
    })
  ]
  if (googleClientId) {
    wallets.push(
      googleWaas({
        projectAccessKey,
        googleClientId,
        waasConfigKey,
        enableConfirmationModal,
        network: defaultChainId,
        isDev
      })
    )
  }
  if (appleClientId && appleRedirectURI) {
    wallets.push(
      appleWaas({
        projectAccessKey,
        appleClientId,
        appleRedirectURI,
        waasConfigKey,
        enableConfirmationModal,
        network: defaultChainId,
        isDev
      })
    )
  }

  const connectors = getKitConnectWallets(projectAccessKey, wallets)

  return connectors
}
