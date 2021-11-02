// Libraries
import { initializeApp } from 'firebase/app';

let instance = null;

export default function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance) return instance;

    // if (process.env.NODE_ENV === 'production') {
    //   const response = await fetch('/__/firebase/init.json');
    //   const config = await response.json();
    //   instance = initializeApp(config);
    //   return instance;
    // }

    // Firebase web config
    const config = {
      type: process.env.GATSBY_TYPE,
      projectId: process.env.GATSBY_PROJECT_ID,
      privateKeyId: process.env.GATSBY_PRIVATE_KEY_ID,
      privateKey: process.env.GATSBY_PRIVATE_KEY,
      clientEmail: process.env.GATSBY_CLIENT_EMAIL,
      clientId: process.env.GATSBY_CLIENT_ID,
      authUri: process.env.GATSBY_AUTH_URI,
      tokenUri: process.env.GATSBY_TOKEN_URI,
      authProviderX509CertUrl: process.env.GATSBY_AUTH_PROVIDER_X509_CERT_URL,
      clientX509CertUrl: process.env.GATSBY_CLIENT_X509_CERT_URL,
    };

    instance = initializeApp(config);
    return instance;
  }

  return null;
}
