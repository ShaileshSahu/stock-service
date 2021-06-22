// merge the objects
export const responseMerge = (MainCode, {
    data,
    available = false
}) => {
    return {
        ...MainCode,
        ...{
            data: data,
            available
        }
    };
};



export const pagination = async ({
    model,
    query,
    limit,
    _id,
    sortName,
    sortType
}) => {
    try {
        let available = false;
        if (_id) query._id = {
            $gt: _id
        };
        const defaultSort = {
            createdAt: 1
        };
        // sort mechanism !!!
        if (sortName && sortType) {
            if (sortName != 'createdAt') {
                defaultSort[sortName] = parseInt(sortType);
            } else {
                defaultSort.createdAt = parseInt(sortType);
            }
        }

        const data = await model.find(query).limit(limit + 1).sort();
        if (data.length == (limit + 1)) {
            data.pop();
            available = true;
        }

        return {
            data,
            available
        };
    } catch (error) {
        console.log('error in pagination', error);
        Promise.reject();
    }
};