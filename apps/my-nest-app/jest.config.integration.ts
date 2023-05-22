/* eslint-disable */
export default {
    displayName: 'my-nest-app',
    preset: '../../jest.preset.js',
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json'
      }
    },
    setupFilesAfterEnv: ["./src/test/setup.ts"],
    testEnvironment: 'node',
    transform: {
      '^.+\\.[tj]s$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: '../../coverage/apps/my-nest-app'
  };
