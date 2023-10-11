import { Awaitable, Theme } from "src/types"

export interface BaseSenderOptions {
  type: string
}

export interface GenericVerificationRequestParams<TProvider> {
    identifier: string
    url: string
    expires: Date
    provider: TProvider
    token: string
    theme: Theme
    request: Request
  }

  export interface SendVerificationRequest <TParams>{
    (params: TParams): Awaitable<void>
  }