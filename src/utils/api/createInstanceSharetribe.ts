// eslint-disable-next-line @typescript-eslint/no-require-imports
const sharetribeSdk = require('sharetribe-flex-sdk')

const sdk = sharetribeSdk.createInstance({
  clientId: process.env.NEXT_PUBLIC_SHARETRIBE_INTEGRATION_CLIENT_ID,
  clientSecret: process.env.SHARETRIBE_INTEGRATION_CLIENT_SECRET,
  tokenStore: sharetribeSdk.tokenStore.memoryStore(),
})

export default sdk
