const LOCATION_GET = 'LOCATION_GET'

const getLocation = (payload) => ({ type: LOCATION_GET, payload });


export default {
    types: {
        LOCATION_GET
    },
    creators: {
        getLocation
    }
}