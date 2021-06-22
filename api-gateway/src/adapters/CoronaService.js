import got from 'got';

const LISTING_SERVICE_URI = "http://listing:8082/v1";

export class CoronaService {

    static async fetchCorona({
        limit,
        search
    }) {
        const query = Object.assign({}, limit && {
            limit
        }, search && {
            search
        });
        try {
            const result = await got.get(LISTING_SERVICE_URI + '/coronas', {
                searchParams: query

            }).json();
            return result;
        } catch (error) {
            console.log('error in fetch corona ', error);
        }
    }
}