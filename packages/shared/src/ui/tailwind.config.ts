import type { Config } from 'tailwindcss'

export default {
  content: [
    './apps/host/src/**/*.{vue,ts,js}',
    './apps/base/src/**/*.{vue,ts,js}',
    './packages/shared/ui/**/*.{vue,ts,js}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config
