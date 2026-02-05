
export default {
  content: [
    './packages/shared/ui/**/*.{vue,ts,js}',
    './apps/host/src/**/*.{vue,ts}',
    './apps/base/src/**/*.{vue,ts}',
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
