

module.exports = {
  // run `npm run lint` on all `ts and tsx` files
  '**/*.{ts,tsx}': () => ['npm run lint', 'npm run format'],
}