import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer wVQo_U121P-nCunVZKVTaqzERnX3_JsqIoxgiu9-Q5d3Gh32Uw7QWbDKvrEZD7T2TzPGYzNiKzkPV0j_wlWZ497uX0k4IWxxnGovHWECCViZxItYOd6I5y-Jw3PVXnYx'
    }
});
