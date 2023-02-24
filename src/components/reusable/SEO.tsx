import React from 'react'

export interface ISEOProps {
  title: string
  description: string
}

export default function SEO(props: ISEOProps) {
  const { title, description } = props
  const imageUrl = 'https://squawkmarket.com/og.png'
  const formattedTitle = `Squawk Market | ${title}`
  const resolveOgUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href
    }
  }

  const ogUrl = resolveOgUrl()

  return (
    <>
      <title>{formattedTitle}</title>
      <meta name="title" content={formattedTitle} />
      <meta name="description" content={description} />

      {/*  Google / Search Engine Tags  */}
      <meta itemProp="name" content={formattedTitle} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={imageUrl} />

      {/*  Facebook Meta Tags  */}
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={description} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:title" content={process.env.GATSBY_PRODUCT_NAME} />
      <meta name="twitter:card" content="The best real-time & market-wide audio feed." />
      <meta name="twitter:creator" content="Full Stack Craft LCC" />
      <meta name="twitter:description" content={description} />
    </>
  )
}
