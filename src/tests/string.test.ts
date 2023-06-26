import setupTestDB from "./utils/setupTestDB";

setupTestDB();

describe('String in Javascript', () => {
    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });

    test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/);
    });
})