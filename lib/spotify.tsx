import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'streaming',
  'user-read-private',
  'user-library-read',
  'user-top-read',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-follow-read',
].join(',')

const params = {
  scope: scopes,
}

const queryParamsString = new URLSearchParams(params)

// res.redirect('https://accounts.spotify.com/authorize?' +
// querystring.stringify({
//   response_type: 'code',
//   client_id: client_id,
//   scope: scope,
//   redirect_uri: redirect_uri,
//   state: state
// }));

const LOGIN_URL =
  'https://accounts.spotify.com/authorize?' + queryParamsString.toString()

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/api/auth/callback/spotify',
})

export default spotifyApi

export { LOGIN_URL }
