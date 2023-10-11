import { Transport, TransportOptions, createTransport } from "nodemailer"
import * as JSONTransport from "nodemailer/lib/json-transport/index.js"
import * as SendmailTransport from "nodemailer/lib/sendmail-transport/index.js"
import * as SESTransport from "nodemailer/lib/ses-transport/index.js"
import * as SMTPTransport from "nodemailer/lib/smtp-transport/index.js"
import * as SMTPPool from "nodemailer/lib/smtp-pool/index.js"
import * as StreamTransport from "nodemailer/lib/stream-transport/index.js"
import { BaseSenderOptions, SendVerificationRequest } from "./shared"
import { Awaitable } from "src/types"
import { GenericVerificationRequestParams } from "./shared"
import { Provider } from "src/providers"

// TODO: Make use of https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html for the string
type AllTransportOptions =
  | string
  | SMTPTransport
  | SMTPTransport.Options
  | SMTPPool
  | SMTPPool.Options
  | SendmailTransport
  | SendmailTransport.Options
  | StreamTransport
  | StreamTransport.Options
  | JSONTransport
  | JSONTransport.Options
  | SESTransport
  | SESTransport.Options
  | Transport<any>
  | TransportOptions

export type { AllTransportOptions }

export interface SmtpEmailSenderUserOptions<TParams> extends BaseSenderOptions {
  type: "smtp"
  server: AllTransportOptions
  from: string
  sendVerificationRequest?: SendVerificationRequest<TParams>
}
// export interface SmtpEmailSenderOptions<TParams> extends BaseSenderOptions {
//   type: "smtp"
//   server: AllTransportOptions
//   from: string
//   sendVerificationRequest: SendVerificationRequest<TParams>
// }

export interface SmtpEmailSenderOptions<TParams>
  extends Required<
      Pick<SmtpEmailSenderUserOptions<TParams>, "sendVerificationRequest">
    >,
    Omit<SmtpEmailSenderUserOptions<TParams>, "sendVerificationRequest"> {}


  