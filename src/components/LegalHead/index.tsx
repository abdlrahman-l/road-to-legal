import { NextSeo } from 'next-seo'
import React from 'react'

const seo = {
    title: 'Novita & Rahman Wedding',
    description: 'Pernikahan Novita & Rahman yang InshaAllah akan dijadwalkan pada tanggal',
    image: 'https://static.vecteezy.com/system/resources/previews/009/889/707/original/wedding-couple-and-married-character-free-png.png',
}
const defaultSEO = {
	facebook: {
		appId: '898126714645415',
	},
	additionalMetaTags: [
		{
			name: 'twitter:title',
			content: seo.title,
		},
		{
			name: 'twitter:description',
			content: seo.description,
		},
		{
			name: 'twitter:image',
			content: seo.image,
		},
		{
			name: 'viewport',
			content:
				// eslint-disable-next-line max-len
				'width=device-width, minimum-scale=1, maximum-scale=3, initial-scale=1, shrink-to-fit=no, height=device-height, viewport-fit=cover',
		},
		{
			name: 'mobile-web-app-capable',
			content: 'yes',
		},
		{
			name: 'apple-mobile-web-app-capable',
			content: 'yes',
		},
		{
			name: 'application-name',
			content:  'Legal',
		},
		{
			name: 'apple-mobile-web-app-title',
			content: 'Legal',
		},
		{
			name: 'apple-mobile-web-app-status-bar-style',
			content: 'white-' + 'pink',
		},
		{
			name: 'msapplication-starturl',
			content: '/',
		},
		{
			name: 'msapplication-navbutton-color',
			content: 'pink',
		},
		{
			name: 'theme-color',
			content: 'pink',
		},
	],
	additionalLinkTags: [
		{
			rel: 'manifest',
			href: '/manifest.json',
		},
		{
			rel: 'icon',
			href: '/icons/512x512.png',
			type: 'image/png',
			sizes: '512x512',
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/512x512.png',
			type: 'image/png',
			sizes: '512x512',
		},
		{
			rel: 'icon',
			href: '/icons/192x192.png',
			type: 'image/png',
			sizes: '192x192',
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/192x192.png',
			type: 'image/png',
			sizes: '192x192',
		},
	],
}

const LegalHead = () => {
  return (
    <>
        <NextSeo
            title={seo.title}
            description={seo.description}
			canonical={'https://www.novitarahman.site/'}
            openGraph={{
              type: 'website',
              url: 'https://www.novitarahman.site/',
              title: seo.title,
              description: seo.description,
              images: [
                {
                  url: 'https://static.vecteezy.com/system/resources/previews/009/889/707/original/wedding-couple-and-married-character-free-png.png',
                  width: 800,
                  height: 800,
                  alt: seo.title,
                }
              ],
            }}
            {...defaultSEO}
        />
    </>
  )
}

export default LegalHead