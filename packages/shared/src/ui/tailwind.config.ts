
export default {
  content: [
    './apps/host/src/**/*.{vue,ts,js}',
    './apps/base/src/**/*.{vue,ts,js}',
    './packages/shared/ui/**/*.{vue,ts,js}'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './apps/host/src/**/*.{vue,ts,js}', './apps/base/src/**/*.{vue,ts,js}', './apps/base/index.html', './apps/host/index.html'],
}
