export const oktaConfig = {
    clientId: '0oaijzbxkyEU48Erd5d7',
    issuer: 'http://-dev-83473011.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}