const LISTING_SERVICE_URI = "http://listing:8080/v1"
import got from 'got';
export default class ListingService {
    static async fetchListing() {
        const data =  await got.get(LISTING_SERVICE_URI + '/listing').json();
        return data;
    }
}