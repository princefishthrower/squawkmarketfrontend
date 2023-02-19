import React, { PropsWithChildren } from 'react'

export interface ISEOProps {
  title: string
  description: string
}

export default function SEO(props: PropsWithChildren<ISEOProps>) {
  const { title, description, children } = props
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

      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={description} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:title" content={process.env.GATSBY_PRODUCT_NAME} />
      <meta name="twitter:card" content="Screening the entire options market - daily!" />
      <meta name="twitter:creator" content="Full Stack Craft LCC" />
      <meta name="twitter:description" content={description} />

      {/* Gumroad JS - 1990s style */}
      <script src="https://gumroad.com/js/gumroad.js"></script>
      {/* fix for react-beautiful-dnd unmount explosions, see: https://github.com/umijs/qiankun/issues/2046 */}
      <script>
        {`
          const { removeChild } = HTMLElement.prototype;
          HTMLElement.prototype.removeChild = function (node) {
            if (this.contains(node)) {
              removeChild.call(this, node)
            }
            return node
          }
          `}
      </script>
      {children}
    </>
  )
}
