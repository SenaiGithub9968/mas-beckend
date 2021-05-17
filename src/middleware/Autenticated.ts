import {NextFunction, Request, Response} from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface Token {
    sub:string;
    role: string;
}

export default function autenticated(request:Request, response:Response, next:NextFunction){

    const headerAutorization = request.headers.authorization

    if(!headerAutorization){
        return {
            error: 'JWT token not found'
        }
    }

    const [, token] = headerAutorization.split(' ');

    const verifyToken = verify(token, authConfig.jwt.secret);

        if(!verifyToken){
            throw new Error()
        }

    const {sub,role} = verifyToken as Token

        request.body.user = {
            id: sub,
            role: role
        }

    return next();
}