module.exports = {
    "resource": "/notify/{proxy+}",
    "path": "/notify",
    "httpMethod": "GET",
    "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        "CloudFront-Forwarded-Proto": "https",
        "CloudFront-Is-Desktop-Viewer": "true",
        "CloudFront-Is-Mobile-Viewer": "false",
        "CloudFront-Is-SmartTV-Viewer": "false",
        "CloudFront-Is-Tablet-Viewer": "false",
        "CloudFront-Viewer-Country": "US",
        "Host": "m2tqk19m47.execute-api.us-west-2.amazonaws.com",
        "If-None-Match": "W/\"105-pbXaN+rMmIU07MA/7hl6zgQ+d0E\"",
        "origin": "http://localhost:3000",
        "Referer": "http://localhost:3000/notifications",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
        "Via": "2.0 da7a5d0ed7f424609000879e43743066.cloudfront.net (CloudFront)",
        "X-Amz-Cf-Id": "nD4cIyFvXUMGhLCjkhaK-U_Sypr50m0eQ5BpBjPmjE8_jiB5xJfk_Q==",
        "x-amz-date": "20180715T233102Z",
        "x-amz-security-token": "AgoGb3JpZ2luENP//////////wEaCXVzLXdlc3QtMiKAAj3yVuNFb2CGlDH12KyfJaS0L3J9LYiZXbtpoSJLpMmOtkMMQL83Lf5Rsa4V36dUpbjehl3cRFJlpK2ujucCBRb0v97KWr+n3M6f58BSs7DGY8G32/LF/mpc2joZtabKAulh4tgOTGDg32+ebfKgWqW0wnOQ5skjPOcVZ8djtBx2KuEaSo9D4OJiAkJcR6StvHe2OCruoWJdU8AaZRr7WG2dr6swQBbfGK+4fd4HvfgBSH+U3tmF434za5MXDcslw6+nTWYkUI1FJMBzqMkuA8Mkb1cBsC7uXRb3p9+xMv+cEe3jBVlKzBv6vSKNjniFl9RhjyTm3mmKT0B8lSY68iIqrwUImf//////////ARAAGgw5ODA4ODY5MjQ0NTEiDFcmL6oXgQFk6Pt8SCqDBWKRD7WhcQrbgmFuDvhZvZGisY+ttnNvslrZxMQCLsa63EYdgqkNOt/O0TL5HiWtDFNafH69A8a9HCupwI2SMXRlIeEvIIxTUbsRaKR7OelzhkIFKA6UuXpUqh2hkMaXwFnForjgirmipZRzn8gUqenmirww/Gl0x5E/+k4XjByS/sDqUGw2mNX3BLf0+XAmjkqNtp+uBN0sGAC6tn0hlP5+O30GB59b/brO3GLgTnR9KepkEoURLDTbiOE9hFXvp3yR5gpVDuUKHVKvUBJE67SosC6+H7J3nc9zpAovQcFqpziwao3yuYlXulLPK5AObRLMDmiNOC/bZU33ecCtaX1wCl21NbmLPIRBrDWrGyW8xk4kDZxuGwi6Y9pD5L8awGNSLhme6KjdiO95de9zZUpDCJwydPjRZruZEce9FIysOoBDm5sxOe0Hx0/F+xZlbItyjtTuBTM93iDrfKwfkrRYBIJ+p1deiEn9pU/vfI9SK5EoFt2zdI60mARpNzpFpUXycwbbRAmE2GvozLi9kvV9U5InfWLp4RsnslAIg4POkruIPwTW+5+Fz3qyxMO/Je+/lJt2NgkUMDL5rVYaw9AAv5e9CdinQ/m2S+mJ51hxSjeT16qwtQcDP9Z8aQrUjzR5smQmPHiXRd9a0j8TSYIdxOKD3ObgYmyxZ1OsKIGj45XGtXjh8GlfJ3XLsvuLrLNb2hgaBqOq8MSuS+nyybkyrFP+Pt7tqs7FIYBnAzsNL0HaYvH8AlV+VysyLeOMUkfp3tYgBOhitNTa3bV/N0wPmTSRnWDWwWWye33FhDTJhLnQ4M+2xw64Tlyoj91Ps3fWhZkTufi0/D7FYJhjgvJOg3UwtbKv2gU=",
        "X-Amzn-Trace-Id": "Root=1-5b4bd936-e29ba136b11d2c76339ec9db",
        "X-Forwarded-For": "66.214.146.106, 205.251.214.103",
        "X-Forwarded-Port": "443",
        "X-Forwarded-Proto": "https"
    },
    "queryStringParameters": null,
    "pathParameters": {
        "proxy": "user"
    },
    "stageVariables": {
        "stage": "Development"
    },
    "requestContext": {
        "resourceId": "j0vlgr",
        "resourcePath": "/notify/{proxy+}",
        "httpMethod": "GET",
        "extendedRequestId": "KF7gfFlhPHcF-OA=",
        "requestTime": "15/Jul/2018:23:31:02 +0000",
        "path": "/Development/notify",
        "accountId": "980886924451",
        "protocol": "HTTP/1.1",
        "stage": "Development",
        "requestTimeEpoch": 1531697462347,
        "requestId": "22f87248-8887-11e8-89a9-c1c3225dc193",
        "identity": {
            "cognitoIdentityPoolId": "us-west-2:7b29dc84-6cb3-4c24-9243-42d4c84d43c5",
            "accountId": "980886924451",
            "cognitoIdentityId": "us-west-2:6e8d5425-9266-41c6-b03d-31196c931688",
            "caller": "AROAJYDYKV4CK2OZO3KDW:CognitoIdentityCredentials",
            "sourceIp": "66.214.146.106",
            "accessKey": "ASIAJWBGBPBZNYM6FWTQ",
            "cognitoAuthenticationType": "authenticated",
            "cognitoAuthenticationProvider": "cognito-idp.us-west-2.amazonaws.com/us-west-2_OmR6oi2A8,cognito-idp.us-west-2.amazonaws.com/us-west-2_OmR6oi2A8:CognitoSignIn:86adb9d7-d6c0-4eb9-9b98-cf1b9c7b4748",
            "userArn": "arn:aws:sts::980886924451:assumed-role/happyplaceapp_auth_MOBILEHUB_1689228557/CognitoIdentityCredentials",
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
            "user": "AROAJYDYKV4CK2OZO3KDW:CognitoIdentityCredentials"
        },
        "apiId": "m2tqk19m47"
    },
    "body": null,
    "isBase64Encoded": false
}