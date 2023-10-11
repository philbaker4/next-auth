import { BaseSenderOptions, SendVerificationRequest } from "./shared"

export interface SmsSenderUserOptions<TParams> extends BaseSenderOptions {
  type: "sms"
  service: string
  sendVerificationRequest?: SendVerificationRequest<TParams>
}


export interface SmsSenderOptions<TParams>
  extends Required<
      Pick<SmsSenderUserOptions<TParams>, "sendVerificationRequest">
    >,
    Omit<SmsSenderUserOptions<TParams>, "sendVerificationRequest"> {}

