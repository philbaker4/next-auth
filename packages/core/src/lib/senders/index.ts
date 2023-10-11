import { GenericVerificationRequestParams } from "./shared.js"
import { SmsSenderOptions, SmsSenderUserOptions } from "./sms.js"
import { SmtpEmailSenderOptions, SmtpEmailSenderUserOptions } from "./smtp.js"

export type UserSenderTypes<TProvider> =
  | SmtpEmailSenderUserOptions<GenericVerificationRequestParams<TProvider>>
  | SmsSenderUserOptions<GenericVerificationRequestParams<TProvider>>

export type SenderTypes<TProvider> =
  | SmtpEmailSenderOptions<GenericVerificationRequestParams<TProvider>>
  | SmsSenderOptions<GenericVerificationRequestParams<TProvider>>

export * from "./smtp.js"
export * from "./shared.js"
