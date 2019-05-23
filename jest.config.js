module.exports = {
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    roots: ['./src'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)?$',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '^.+\\.js?$': 'babel-jest'
    }
}
