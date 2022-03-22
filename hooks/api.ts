export const ENDPOINT = {
    token: '/api/token',
    
}

export const api = async (url: RequestInfo, params?: RequestInit) => {
    return fetch(url, params).then(res => res.json());
}

export const post = async (url: RequestInfo, body: any) => {
    return await api(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}

export const fetcher = (...args: any) => api.apply(null, args);
