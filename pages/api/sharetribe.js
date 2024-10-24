// eslint-disable-next-line @typescript-eslint/no-require-imports
// const sharetribeSdk = require('sharetribe-flex-sdk')
//
// export default function handler(req, res) {
//   const sdk = sharetribeSdk.createInstance({
//     clientId: process.env.SHARETRIBE_INTEGRATION_CLIENT_ID_live,
//     clientSecret: process.env.SHARETRIBE_INTEGRATION_CLIENT_SECRET_live,
//   })
//   sdk
//     .assetByAlias({
//       path: 'users/user-types.json',
//       alias: 'latest',
//     })
//     .then((response) => {
//       res.status(200).json(response.data)
//     })
//     .catch((error) => {
//       res.status(500).json({ error: error.message })
//     })
// }
