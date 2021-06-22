import path from 'path';
import fs from 'fs';
import {
    Corona
} from '@database/models/corona.model';
import mongoose from 'mongoose';
import csv from 'csv-parser';
import {
    CONSTANT
} from '@src/constant/main.constant';
import {
    responseMerge,
    pagination
} from '@src/helpers';
import {
    error
} from '@src/helpers';
export class CoronaController {

    static async defaultDateSet() {
        try {
            console.log(' ---- start of defing the data set ----');
            const filePath = path.resolve(__dirname, '../../../file/csv/corona.csv');
            console.log('file path of corona case file', filePath);
            let dataPath = [],
                limit = 1000,
                currentLimit = 0;
            const alreadyConronaDataExist = await Corona.findOne({});
            if (!alreadyConronaDataExist) {
                fs.createReadStream(filePath).pipe(csv()).on('data', function (row) {
                    dataPath._id = mongoose.Types.ObjectId();
                    dataPath.push(row);
                    currentLimit++;
                    if (currentLimit > limit) {
                        Corona.insertMany(dataPath);
                        dataPath = [];
                        currentLimit = 0;
                    }

                }).on('end', function () {
                    if (dataPath.length) {
                        Corona.insertMany(dataPath);
                    }
                    console.log('file read completed');
                });
            } else {
                console.log('Corona data already Exist into the system');
            }


        } catch (e) {
            console.log('error in creating the default data set', e);
            return CONSTANTS.ERROR.GATEWAY_ERROR;
        }
    }

    static async list({
        limit = CONSTANT.PAGINATION.LIMIT,
        _id,
        sortName,
        sortType,
        search,
        fromDate,
        toDate
    }) {
        try {
            console.log('--- corona lisitng is calling ---', limit);
            const query = {};
            if (fromDate && toDate) {
                query.date = {
                    $gt: fromDate,
                    $lt: toDate
                };
            } else if (toDate) {
                query.date = {
                    $lt: toDate
                };
            } else if (fromDate) {
                query.date = {
                    $gt: fromDate
                };
            }
            console.log('query', query);

            if (search) {
                const reg = new RegExp(search, 'i');
                query.location = {
                    $regex: reg
                };
            }
            const result = await pagination({
                query,
                sortName,
                sortType,
                _id,
                limit: parseInt(limit),
                model: Corona
            });
            // const data = await Corona.find({});
            // console.log('data', data);
            return responseMerge(CONSTANT.SUCCESS.LIST, {
                data: result.data,
                available: result.available
            });
        } catch (error) {
            console.log('error', error);
            return CONSTANT.ERROR.GATEWAY_ERROR;
        }




    }


    static async streamVideo(req, res) {
        try {
            const videoPath = path.resolve(__dirname, '../../../views/videos/videostream.mp4');
            const fileSize = fs.statSync(videoPath).size;
            if (!req.headers.range) {
                error(req, res);
            }
            const start = parseInt(req.headers.range.replace(/bytes=/, "").split('-')[0]);
            const end = fileSize - 1;
            const chunkFile = (end - start) + 1;
            const videoStream = fs.createReadStream(videoPath, {
                start,
                end,
                highWaterMark: 100
            });
            const headers = {
                "Content-Type": "video/mp4",
                "Content-Length": chunkFile,
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',

            };
            res.writeHead(206, headers);
            videoStream.pipe(res);
        } catch (err) {
            console.log(`error in the stream video of the corona controller ${err}`);
        }
    }

}