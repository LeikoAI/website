import { getPayload as getPayloadSDK } from 'payload'
import config from '@payload-config'

// Singleton: reuse the same Payload instance across hot reloads in dev
const globalForPayload = globalThis as unknown as {
  payload: ReturnType<typeof getPayloadSDK> | undefined
}

export async function getPayload() {
  if (!globalForPayload.payload) {
    globalForPayload.payload = getPayloadSDK({ config })
  }
  return globalForPayload.payload
}
