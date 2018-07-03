export default class SeshSourceApi {
    constructor(auth) {
        this.domain = 'http://localhost'
        this.fetch = this.fetch.bind(this)
        this.create = this.create.bind(this)
        this.auth = auth;
    }

    create(event) {
        console.log(event);
        // Get a token
        return this.fetch(`${this.domain}/api/events/`, {
            method: 'POST',
            body: JSON.stringify(event)
        }).then(res => {
            console.log(res);
            return Promise.resolve(res)
        })
    }

    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        if (this.auth.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.auth.getToken()
        }

        return fetch(url, {
                headers,
                ...options
            })
            .then(this.auth._checkStatus)
            .then(response => response.json())
    }
}