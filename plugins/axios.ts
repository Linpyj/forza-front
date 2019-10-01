export default function ({ $axios }): void {
  $axios.onRequest((config: any): void => {
    const token = ((document.cookie + ';').match('rin_token=([^;]*)') || [])[1]
    if (token) config.headers.common['Authorization'] = `Bearer ${decodeURIComponent(token)}`
  })

  $axios.onResponse((response: any): void => {
    const token = response.data.token
    if (token) document.cookie = `rin_token=${encodeURIComponent(token)}; max-age=2592000; path=/`
  })
}
