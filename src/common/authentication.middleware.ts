/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { auth } from 'express-oauth2-jwt-bearer'; // Import the auth middleware
// import * as dotenv from 'dotenv';
// dotenv.config();
   
// @Injectable()
// export class AuthenticationMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next) {
//     // Use the auth middleware to handle authentication and authorization
//     auth({
//       audience: 'http://localhost:5000/graphql',
//       issuerBaseURL: 'https://dev-st4zy53myhpbn3os.us.auth0.com',
//       // algorithms: ["RS256"],
//     })(req, res, (err) => {
//       if (err) {
//         throw new UnauthorizedException('Invalid token');
//       }
//       next();
//     });
//   }
// }


import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { auth } from 'express-oauth2-jwt-bearer';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next) {
    // Use the auth middleware to handle authentication and authorization
    auth({
      audience: 'http://localhost:5000/graphql',
      issuerBaseURL: 'https://dev-st4zy53myhpbn3os.us.auth0.com',
      // algorithms: ["RS256"],
    })(req, res, (err) => {
      if (err) {
        res.status(401).json({ message: 'Invalid token' }); // Send 401 Unauthorized response
      } else {
        next();
      }
    });
  }
}
