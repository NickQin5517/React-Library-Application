export const oktaConfig = {
    clientId: '0oa8g6lembVEvuJkD5d7',
    issuer: 'https://dev-61310118.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}