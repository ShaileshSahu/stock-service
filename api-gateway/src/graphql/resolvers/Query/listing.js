import ListingService from './../../../adapters/ListingServivce';
const listingResolver = async () => {
    return await ListingService.fetchListing();
}

export default listingResolver;