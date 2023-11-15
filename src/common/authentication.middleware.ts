/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
// import { auth } from 'express-oauth2-jwt-bearer';
import { auth } from 'express-openid-connect';


@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next) {
    console.log("here in auth middleware")
  
    auth({
        authRequired: true,
        issuerBaseURL: `https://dev-st4zy53myhpbn3os.us.auth0.com`,
        baseURL: `https://book-app-frontend-prod-2.vercel.app`,
        clientID: `jv4vyLvq9sNnHSlv7PlPnZhKmod05Q8R`,
        secret: `nQi73YCYDFpA5wt3uedYcBHXMmZnHdH14AcXhtjwIRhtfCBC7TFonI0dt6_9kVY8`,
        idpLogout: true,
      })

    (req, res, (err) => {
      if (err) {
        console.log(err)
        res.status(401).json({ message: 'Invalid token' }); // Send 401 Unauthorized response
      } else {
        next();
      }
    });
  }
}
