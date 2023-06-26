export default function setupTestDB() {

    const sleep = (message: string, timeout = 1000) => new Promise((res) => {
        setTimeout(() => res(console.log(message)), timeout)
    })
    
    beforeAll(() => {
        return sleep("Connected to db!")
    });

    beforeEach(() => {
        return sleep("Remove effect data from db!")
    });

    afterAll(() => {
        return sleep("Close connect db!")
    })
}