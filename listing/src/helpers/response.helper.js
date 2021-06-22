// prettier-ignore
export const success = async (payload, res) => {
    // const timeTake = Date.now() - res.locals.apiHittedTime;
    const responsePayload = Object.assign({
        // prettier-ignore
        statusCode: payload.statusCode ? payload.statusCode : 200,
        message: payload.message || 'Success',
        data: payload.data || [],
        available: payload.available || false
        // apiTimeTaken: timeTake + 'ms'
    });
    return res.status(payload.statusCode || 200).json(responsePayload);
};

export const error = async (payload, res) => {
    console.log('--- error via api ----', payload);
    // const timeTake = Date.now() - res.locals.apiHittedTime;
    const responsePayload = Object.assign({
        statusCode: payload?.statusCode || 500,
        message: payload?.message || 'Failed',
        data: payload?.data || [],
        // apiTimeTaken: timeTake + 'ms'
    });
    return res.status(payload.statusCode || 500).json(responsePayload);
};