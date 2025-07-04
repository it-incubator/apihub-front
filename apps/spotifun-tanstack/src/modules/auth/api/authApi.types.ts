import type { components } from '@/common/api/schema.ts'

export type RefreshOutput = components['schemas']['RefreshOutput']

export type RefreshRequestPayload = components['schemas']['RefreshRequestPayload']

export type LoginRequestPayload = components['schemas']['LoginRequestPayload']

export const localStorageKeys = {
  refreshToken: 'spotifun-refresh-token',
  accessToken: 'spotifun-access-token',
}
