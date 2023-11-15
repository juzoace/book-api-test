/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
// import { auth } from 'express-oauth2-jwt-bearer';
import { auth } from 'express-openid-connect';


@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next) {
    console.log("here in auth middleware")
    console.log(`${process.env.SECRET}`)
    console.log(process.env.CLIENTID)
    console.log(process.env.BASEURL)
    console.log(process.env.iSSUERBASEURL)
    auth({
        authRequired: true,
        issuerBaseURL: `${process.env.iSSUERBASEURL}`,
        baseURL: `${process.env.BASEURL}`,
        clientID: `${process.env.CLIENTID}`,
        secret: `${process.env.SECRET}`,
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
