import crypto from 'crypto'

export function verifyTelegramWebAppData(initData: string, botToken: string) {
  const urlParams = new URLSearchParams(initData)

  const hash = urlParams.get('hash')
  if (!hash) return false

  urlParams.delete('hash')

  const dataCheckString = Array.from(urlParams.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map((entry) => entry[0] + '=' + entry[1])
    .join('\n')

  const secretKey = crypto
    .createHmac('sha256', 'WebAppData')
    .update(botToken)
    .digest()

  const hmac = crypto
    .createHmac('sha256', secretKey)
    .update(dataCheckString)
    .digest('hex')

  return hmac === hash
}