import {
    CoronaController
} from '@src/modules/corona/corona.controller';
import path from 'path';
import fs from 'fs';
import {
    AWSService
} from './aws';
import {
    CONSTANT
} from '../constant/main.constant';
import {
    PassThrough
} from 'stream';
export class PreIntialize {

    constructor() {
        CoronaController.defaultDateSet();
        // this.uploadAWSStream();
    }

    async uploadAWs() {
        try {
            const filePath = path.resolve(__dirname, '../../file/csv/corona.csv');
            const file = fs.readFileSync(filePath);
            const fileBuffer = Buffer.from(file);
            AWSService.uploadFile({
                file: fileBuffer,
                fileName: 'corna.csv',
                bucketName: CONSTANT.AWS.BUCKET.MICROSERVICE.CSV,
                type: CONSTANT.FILE.TYPE.CSV
            });
        } catch (err) {
            console.log('error in preintailize about the err', err);
        }
    }

    async uploadAWSStream() {
        try {
            const filePath = path.resolve(__dirname, '../../file/images/1.jpg');
            const fileStream = fs.createReadStream(filePath, {
                highWaterMark: 100
            });
            // decrease chunk size to render the actual streaming flow !!

            const filePipeStream = fileStream.pipe(AWSService.uploadFileStream({
                fileName: 'corna3.jpg',
                bucketName: CONSTANT.AWS.BUCKET.MICROSERVICE.IMAGE,
                type: CONSTANT.FILE.TYPE.IMAGE
            }));
            filePipeStream.on('error', (err) => {
                console.log('error occuring when updating via aws upload', err);
            });
            filePipeStream.on('close', () => {
                console.log('upload has been done and readon completed');
            });
            filePipeStream.on('data', (data) => {
                console.log(`let see the stream flow going into the upload aws ${ data.length }`);
            });
        } catch (e) {
            console.log(`erorr in upload stream aws upload ${e}`);
        }
    }


}