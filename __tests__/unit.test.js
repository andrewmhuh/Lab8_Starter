// unit.test.js

const { expect } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('valid phone 1', () => {
    expect(functions.isPhoneNumber('(111)111-1111')).toBe(true);
});

test('valid phone 2', () => {
    expect(functions.isPhoneNumber('(222)222-2222')).toBe(true);
});

test('invalid phone 1', () => {
    expect(functions.isPhoneNumber('nophone!')).toBe(false);
});

test('invalid phone 2', () => {
    expect(functions.isPhoneNumber('(1)111-eggs')).toBe(false);
});

test('valid email 1', () => {
    expect(functions.isEmail('wowthisisacoolemail@email.com')).toBe(true);
});

test('valid email 2', () => {
    expect(functions.isEmail('wowthisisanothercoolemail@email.com')).toBe(true);
});

test('invalid email 1', () => {
    expect(functions.isEmail('not@nemail')).toBe(false);
});

test('invalid email 2', () => {
    expect(functions.isEmail('wownoem@il!')).toBe(false);
});

test('valid pw 1', () => {
    expect(functions.isStrongPassword('Abcd1')).toBe(true);
});

test('valid pw 2', () => {
    expect(functions.isStrongPassword('password1')).toBe(true);
});

test('invalid pw 1', () => {
    expect(functions.isStrongPassword('3995')).toBe(false);
});

test('invalid pw 2', () => {
    expect(functions.isStrongPassword('1nval1d')).toBe(false);
});

test('valid date 1', () => {
    expect(functions.isDate('10/10/1001')).toBe(true);
});

test('valid date 2', () => {
    expect(functions.isDate('11/11/1111')).toBe(true);
});

test('invalid date 1', () => {
    expect(functions.isDate('notadate!')).toBe(false);
});

test('invalid date 2', () => {
    expect(functions.isDate('111/11/11111')).toBe(false);
});

test('valid color 1', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});

test('valid color 2', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('invalid color 1', () => {
    expect(functions.isHexColor('#123123123')).toBe(false);
});

test('invalid color 2', () => {
    expect(functions.isHexColor('#BLUE')).toBe(false);
});

