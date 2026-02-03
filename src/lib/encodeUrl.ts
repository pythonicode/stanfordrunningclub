/**
 * Server-side utility to encode URLs for bot protection
 * This should only be used server-side or during build time
 */
export function encodeGroupMeUrl(url: string): string {
  try {
    const urlObj = new URL(url)
    const protocol = urlObj.protocol.replace(':', '')
    const domain = urlObj.hostname
    const path = urlObj.pathname.substring(1) + urlObj.search + urlObj.hash
    
    // Format: protocol::domain::path
    const combined = `${protocol}::${domain}::${path}`
    
    // Use Buffer for server-side base64 encoding
    if (typeof Buffer !== 'undefined') {
      return Buffer.from(combined).toString('base64')
    }
    
    // Fallback to btoa if Buffer is not available
    return btoa(combined)
  } catch (error) {
    console.error('Invalid URL:', error)
    return ''
  }
}

/**
 * Additional obfuscation: ROT13-like character shifting
 * This adds another layer of obfuscation on top of base64
 */
export function obfuscateUrl(url: string): string {
  const encoded = encodeGroupMeUrl(url)
  
  // Apply character shifting
  return encoded
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0)
      // Shift printable ASCII characters
      if (code >= 33 && code <= 126) {
        return String.fromCharCode(((code - 33 + 13) % 94) + 33)
      }
      return char
    })
    .join('')
}

/**
 * Deobfuscate URL (for client-side use)
 */
export function deobfuscateUrl(obfuscated: string): string {
  // Reverse the character shifting
  const encoded = obfuscated
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0)
      if (code >= 33 && code <= 126) {
        return String.fromCharCode(((code - 33 - 13 + 94) % 94) + 33)
      }
      return char
    })
    .join('')
  
  return encoded
}
