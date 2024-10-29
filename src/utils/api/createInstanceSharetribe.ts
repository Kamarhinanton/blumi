// eslint-disable-next-line @typescript-eslint/no-require-imports
const sharetribeSdk = require('sharetribe-flex-sdk')

const sdk = sharetribeSdk.createInstance({
  clientId: process.env.NEXT_PUBLIC_SHARETRIBE_INTEGRATION_CLIENT_ID_test,
  clientSecret:
    process.env.NEXT_PUBLIC_SHARETRIBE_INTEGRATION_CLIENT_SECRET_test,
})

export default sdk
