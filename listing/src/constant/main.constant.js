export const CONSTANT = {

    ERROR: {
        GATEWAY_ERROR: {
            statusCode: 500,
            message: 'Gateway Error!!',
        },

        VALIDATION_ERROR: {
            statusCode: 400,
            message: 'Validation Error!!'
        }
    },

    SUCCESS: {
        LIST: {
            statusCode: 200,
            message: 'List fetch success !!'
        },
        BLOG_DETAILS: {
            status: 200,
            messgae: 'blog detail !!'
        }
    },

    REQ_TYPE: {
        BODY: 'body',
        PARAMS: 'params',
        QUERY: 'query',
        HEADERS: 'headers'
    },

    PAGINATION: {
        LIMIT: 10
    },

    AWS: {
        BUCKET: {
            MICROSERVICE: {
                MAIN: 'microserviceshailesh',
                CSV: 'microserviceshailesh/csv',
                IMAGE: 'microserviceshailesh/images'
            }
        }
    },
    FILE: {
        TYPE: {
            IMAGE: 'image',
            text: 'text',
            csv: 'csv'
        }
    }
}