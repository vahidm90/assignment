export default {
    coverageDirectory: './coverage',
    preset: 'ts-jest',
    transform: {
        '^.+\\.(tsx?)$': ['ts-jest', {tsconfig: './tsconfig.json'}],
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__ mocks __/fileMock.js',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./setupTests.ts'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[t]sx?$',
};
