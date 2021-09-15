import axios from 'axios'


const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

export const apiUrl = '';


export class CookieStand {

    constructor(info) {
        this.id = info.id;
        this.location = info.location;
        this.minCustomersPerHour = info.minimum_customers_per_hour;
        this.maxCustomersPerHour = info.maximum_customers_per_hour;
        this.avgCookiesPerSale = info.average_cookies_per_sale;
        this.cookiesEachHour = info.hourly_sales || [...hours].fill(0);
        this.totalDailyCookies = this.cookiesEachHour.reduce((sum, val) => sum + val);
    }

    static fromValues(values) {
        const info = {
            id: -1, 
            location: values.location,
            minimum_customers_per_hour: values.min,
            maximum_customers_per_hour: values.max,
            average_cookies_per_sale: values.avg,
        }

        return new CookieStand(info);
    }
}


export async function getToken(values) {
    const url = "";

    const response = await axios.post(url, values);

    const refreshUrl = "";

    const refreshResponse = await axios.post(refreshUrl, { refresh: response.data.refresh });

    return refreshResponse.data.access;
}


export async function fetchWithToken(url, token) {

    const config = makeConfig(token);

    const response = await axios.get(url, config);

    const stands = response.data.map(info => new CookieStand(info));

  
    stands.sort((a, b) => {
        if (a.location < b.location) return -1;
        if (a.location > b.location) return 1;
        return 0;
    });

    return stands;
}



export async function postWithToken(token, values) {

    const body = {
        id: -1, 
        location: values.location,
        minimum_customers_per_hour: values.min,
        maximum_customers_per_hour: values.max,
        average_cookies_per_sale: values.avg,
    }

    const config = makeConfig(token);

    const response = await axios.post(apiUrl, body, config);

    return response.data;
}

export async function deleteWithToken(id, token) {
    const config = makeConfig(token);

    const url = apiUrl + id + '/';

    await axios.delete(url, config);

}


function makeConfig(token) {
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
}