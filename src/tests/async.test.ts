function fetchData() {
    return Promise.resolve("peanut butter")
}

function fetchDataError() {
    return Promise.reject("peanut butter")
}

describe('Async fucntion in Javascript', () => {
    test('the data is peanut butter', () => {
        return fetchData().then(data => {
            expect(data).toBe('peanut butter');
        });
    });
    test('the data is peanut butter', async () => {
        const data = await fetchData();
        expect(data).toBe('peanut butter');
    });

    test('the fetch fails with an error', async () => {
        expect.assertions(1);
        try {
            await fetchDataError();
        } catch (e) {
            expect(e).toMatch('peanut butter');
        }
    });

    test('the data is peanut butter', async () => {
        await expect(fetchData()).resolves.toBe('peanut butter');
    });

    test('the fetch fails with an error', async () => {
        await expect(fetchDataError()).rejects.toMatch('peanut butter');
    });

    test('the fetch fails with an error', () => {
        expect.assertions(1);
        return fetchDataError().catch(e => expect(e).toMatch('peanut butter'));
    });
})