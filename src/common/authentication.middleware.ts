/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
// import { auth } from 'express-oauth2-jwt-bearer';
import { auth } from 'express-openid-connect';


@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next) {
    console.log("here in auth middleware")
    // console.log(`${process.env.SECRET}`)
    // console.log(process.env.CLIENTID)
    // console.log(process.env.BASEURL)
    // console.log(process.env.iSSUERBASEURL)
    auth({
        authRequired: true,
        issuerBaseURL: `https://dev-st4zy53myhpbn3os.us.auth0.com`,
        baseURL: `https://book-api-auth0-e4ad716ccb6a.herokuapp.com`,
        clientID: `WQT5E0yE5LfqoZaHuJRYnojpJ8zy9GXb`,
        secret: `N8deeMmR7Bc9_EMtZtStNAY-BvCI38FJWMSpK8Hw_UtWg4vFCwbdRbGIxRj2lwO7`,
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
