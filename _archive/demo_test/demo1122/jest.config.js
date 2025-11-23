module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/backend/**/*.spec.ts', '**/tests/backend/**/*.test.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}