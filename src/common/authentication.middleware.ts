/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { auth } from 'express-oauth2-jwt-bearer';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next) {
    // Use the auth middleware to handle authentication and authorization
    auth({
      audience: 'https://juzoace.booky-nest-apiAuth0.repl.co/graphql',
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
