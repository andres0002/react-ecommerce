const BASEURL = process.env.REACT_APP_API_URL

export const fetchWithoutToken = (endpoint, data, method='GET') => {
    const url = `${BASEURL}/${endpoint}`;

    if (method === 'GET') {
        return fetch (url).then(response => {
            // console.log(`main fetch -> success -> status code -> ${response.status}`);
            return response;
        }).catch(error => {
            // console.log(`main fetch -> error -> ${error}`);
            return null;
        }).finally(() => {
            // console.log('main fetch -> finally');
        });
    } else {
        return fetch (url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            // console.log(`main fetch -> success -> status code -> ${response.status}`);
            return response;
        }).catch(error => {
            // console.log(`main fetch -> error -> ${error}`);
            return null;
        }).finally(() => {
            // console.log('main fetch -> finally');
        });
    }
}

export const fetchWithToken = (endpoint, data, method='GET') => {
    const url = `${BASEURL}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {
        return fetch (url, {
            method,
            headers: {
                'Authorization': `Token ${token}`
            }
        }).then(response => {
            // console.log(`main fetch -> success -> status code -> ${response.status}`);
            return response;
        }).catch(error => {
            // console.log(`main fetch -> error -> ${error}`);
            return null;
        }).finally(() => {
            // console.log('main fetch -> finally');
        });
    } else {
        return fetch (url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(data)
        }).then(response => {
            // console.log(`main fetch -> success -> status code -> ${response.status}`);
            return response;
        }).catch(error => {
            // console.log(`main fetch -> error -> ${error}`);
            return null;
        }).finally(() => {
            // console.log('main fetch -> finally');
        });
    }
}