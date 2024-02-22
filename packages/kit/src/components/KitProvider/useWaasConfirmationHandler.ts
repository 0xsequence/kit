import { ethers } from 'ethers'
import { useState, useEffect } from 'react'

let _pendingConfirmation: Deferred<{ id: string; confirmed: boolean }> | undefined

export type WaasRequestConfirmation = {
  id: string
  type: 'signTransaction' | 'signMessage'
  message?: string
  txs?: ethers.Transaction[]
  chainId?: number
}

export function useWaasConfirmationHandler(
  waasConnector?: any
): [WaasRequestConfirmation | undefined, (id: string) => void, (id: string) => void] {
  const [pendingRequestConfirmation, setPendingRequestConfirmation] = useState<WaasRequestConfirmation | undefined>()

  function confirmPendingRequest(id: string) {
    _pendingConfirmation?.resolve({ id, confirmed: true })
    setPendingRequestConfirmation(undefined)
    _pendingConfirmation = undefined
  }

  function rejectPendingRequest(id: string) {
    _pendingConfirmation?.reject({ id, confirmed: false })
    setPendingRequestConfirmation(undefined)
    _pendingConfirmation = undefined
  }

  if (!waasConnector) return [undefined, confirmPendingRequest, rejectPendingRequest]

  useEffect(() => {
    async function setup() {
      const waasProvider = await waasConnector.getProvider()

      waasProvider.requestConfirmationHandler = {
        confirmSignTransactionRequest(
          id: string,
          txs: ethers.Transaction[],
          chainId: number
        ): Promise<{ id: string; confirmed: boolean }> {
          const pending = new Deferred<{ id: string; confirmed: boolean }>()
          setPendingRequestConfirmation({ id, type: 'signTransaction', txs, chainId })
          _pendingConfirmation = pending
          return pending.promise
        },
        confirmSignMessageRequest(id: string, message: string, chainId: number): Promise<{ id: string; confirmed: boolean }> {
          const pending = new Deferred<{ id: string; confirmed: boolean }>()
          setPendingRequestConfirmation({ id, type: 'signMessage', message, chainId })
          _pendingConfirmation = pending
          return pending.promise
        }
      }
    }
    setup()
  })

  return [pendingRequestConfirmation, confirmPendingRequest, rejectPendingRequest]
}

class Deferred<T> {
  private _resolve: (value: T) => void = () => {}
  private _reject: (value: T) => void = () => {}

  private _promise: Promise<T> = new Promise<T>((resolve, reject) => {
    this._reject = reject
    this._resolve = resolve
  })

  get promise(): Promise<T> {
    return this._promise
  }

  resolve(value: T) {
    this._resolve(value)
  }

  reject(value: T) {
    this._reject(value)
  }
}