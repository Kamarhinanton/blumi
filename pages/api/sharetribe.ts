// const sharetribeSdk = require('sharetribe-flex-sdk');
//
// export default function handler(req: Request, res: Response) {
//   const sdk = sharetribeSdk.createInstance({
//     clientId: process.env.SHARETRIBE_INTEGRATION_CLIENT_ID,
//     clientSecret: process.env.SHARETRIBE_INTEGRATION_CLIENT_SECRET,
//   });
//   sdk.assetByAlias({
//     path: 'content/pages/landing-page.json',
//     alias: 'latest',
//   })
//     .then(response => {
//       res.status(200).json(response.data);
//     })
//     .catch(error => {
//       res.status(500).json({ error: error.message });
//     });
// }
