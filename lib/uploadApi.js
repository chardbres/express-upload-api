require('dotenv').config()

const mime = require('mime-types')
const AWS = require('aws-sdk')
// Set AWS region
AWS.config.update({ region: 'us-east-1' })
// Create S3 object instance
const s3 = new AWS.S3()

// Define bucket based on environment variable
const bucketName = process.env.BUCKET_NAME

module.exports = function () {
  // Create params object for s3 upload
  const params = {
    Bucket: bucketName,
    Key: 'something',
    Body: fileData,
    ACL: 'public-read',
    ContentType: mime.lookup(filePath)
  }

  // Upload to s3
  s3.upload(params, (err, s3Data) => {
    if (err) throw err

    console.log(s3Data)
  })
}
