import * as aws from 'aws-sdk';
import {
    PassThrough
} from 'stream';
aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: 'ap-south-1'
});
const s3 = new aws.S3();

export class AWSService {

    //** upload the file */
    static async uploadFile({
        file,
        fileName,
        bucketName,
        type
    }) {
        try {
            const params = {
                Bucket: bucketName,
                Body: file,
                Key: fileName,
                ACL: 'public-read',
                Download: false
            };
            if (type == 'image') {
                params.ContentType = `image/${fileName.split('.')[-1]}`;
            }
            console.log('aws upload series', params);
            const s3Upload = await s3.upload(params).promise();

            console.log('file  to be uploaded', s3Upload);
        } catch (err) {
            console.log('upload the error occuring during the upload file', err);
        }
    }

    //** used the file via stream mechanism into the system !! */
    static uploadFileStream({
        fileName,
        bucketName,
        type
    }) {
        try {
            const file = new PassThrough(); // read the stram in buffer!!
            console.log('file of the data which is define', file);
            const params = {
                Bucket: bucketName,
                Body: file,
                Key: fileName,
                ACL: 'public-read',
                Download: false
            };
            if (type == 'image') {
                params.ContentType = `image/${fileName.split('.')[-1]}`;
            }
            const flow = s3.upload(params);
            flow.on('httpUploadProgress', (progress) => {
                console.log(`upload progress ${JSON.stringify(progress)}`);
            });
            flow.promise().then(data => {
                console.log('data uploaded', data);
            }).catch(e => console.log('error during upload file'));
            return file;
        } catch (err) {
            console.log('upload the error occuring during the upload file stream', err);
        }
    }
}