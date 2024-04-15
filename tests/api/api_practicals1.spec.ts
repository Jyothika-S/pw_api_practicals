import { test, expect } from '@playwright/test'

test('GET', async({request}) => {
    const reqURL = 'https://api.restful-api.dev/objects';
    const response = await request.get(reqURL);
    const resp = await response.json();
    console.log('Get all: ', resp)
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
})

test('POST', async({request}) => {
    const reqURL = 'https://api.restful-api.dev/objects';
    const response = await request.post(reqURL, {
        data:{
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }
    });
    const resp = await response.json();
    console.log('Add obj: ', resp)
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
})

test('PUT', async({request}) => {
    const reqURL = 'https://api.restful-api.dev/objects/ff8081818ed059c0018ee14a6b292883';
    const response = await request.put(reqURL, {
        data:{
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                "Warranty": "1 year"
            }
        }
    });
    const resp = await response.json();
    console.log('Updated obj: ', resp)
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
})

test('PATCH', async({request}) => {
    const reqURL = 'https://api.restful-api.dev/objects/ff8081818ed059c0018ee14a6b292883';
    const response = await request.patch(reqURL, {
        data:{
            "name": "Apple MacBook Pro 16 (updated)"
        }
    });
    const resp = await response.json();
    console.log('Partially updated data: ', resp)
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
})

test('DELETE', async({request}) => {
    const reqURL = 'https://api.restful-api.dev/objects/ff8081818ed059c0018ee14a6b292883';
    const response = await request.delete(reqURL);
    const resp = await response.json();
    console.log('Deleted obj: ', resp)
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
})
