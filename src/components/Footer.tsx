import React from 'react'

export default function Footer() {
  return (
    <footer className="max-w-screen-lg mx-auto p-2 md:p-4 text-center w-full border-t border-border mt-16">
      <p className="text-sm text-muted-foreground m-0">
        Stanford Running Club &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
