/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { auth } from 'express-openid-connect';


// @Injectable()
// export class AuthenticationMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next) {
//     console.log("here in auth middleware")
  
//     auth({
//         authRequired: true,
//         issuerBaseURL: `https://dev-st4zy53myhpbn3os.us.auth0.com`,
//         baseURL: `https://book-app-frontend-prod-2.vercel.app`,
//         clientID: `jv4vyLvq9sNnHSlv7PlPnZhKmod05Q8R`,
//         secret: `nQi73YCYDFpA5wt3uedYcBHXMmZnHdH14AcXhtjwIRhtfCBC7TFonI0dt6_9kVY8`,
//         idpLogout: true,
//       })

//     (req, res, (err) => {
//       if (err) {
//         console.log(err)
//         res.status(401).json({ message: 'Invalid token' }); // Send 401 Unauthorized response
//       } else {
//         console.log("No error in  authentication");
//         next();
//       }
//     });
//   }
// }

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next) {
    const accessToken = req.headers.authorization?.replace('Bearer ', '');
    console.log(accessToken);
    if (!accessToken) {
      return res.status(401).json({ message: 'Access token is missing' });
    }

    // You can optionally verify the access token here
    // For example, you can make an introspection request to Auth0
    // to validate the token's authenticity

    // Replace this with your token verification logic
    // For simplicity, we are not performing token validation here
    // You can use libraries like jsonwebtoken to validate the token

    try {
      // Example token verification (you should implement your own logic here)
      // const decodedToken = jwt.verify(accessToken, YOUR_PUBLIC_KEY);

      // Optionally, you can attach the decoded token to the request object
      // req.user = decodedToken;

      next();
    } catch (error) {
      console.error('Token validation error:', error);
      res.status(401).json({ message: 'Invalid token' });
    }
  }
}
