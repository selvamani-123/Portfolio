import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Selvamani M Portfolio',
    short_name: 'Selvamani',
    description: 'Portfolio of Selvamani M, Aspiring Software Engineer',
    start_url: './',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#050816',
    icons: [
      {
        src: 'profile.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: 'profile.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}
