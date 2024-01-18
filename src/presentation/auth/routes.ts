import { Router } from 'express';
import { AuthController } from './AuthController';

export class AuthRoutes {
  static get routes(): Router {
    const router = Router(); 
    const authController = new AuthController();

    router.post( '/login', authController.loginUser );
    router.post( '/register', authController.register );

    router.get( '/validate-email/:token' );

    return router;
  }
}