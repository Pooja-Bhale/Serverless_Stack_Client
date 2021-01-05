const config = {
  /*  s3: {
      REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
      BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME",
    }, */
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://vse0t2bvpe.execute-api.us-east-1.amazonaws.com/prod",
    }, 
    cognito: {
      REGION: "ap-south-1",
      USER_POOL_ID: "ap-south-1_mIfp8jt4C",
      APP_CLIENT_ID: "3vuphagq2uue9iqnfon89fs9jq",
      IDENTITY_POOL_ID: "ap-south-1:e0356652-9851-47d8-88f4-7cc4c7af4fe0",
    },

  };
  
  export default config;