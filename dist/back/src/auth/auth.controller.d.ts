import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerDto';
import { SignInDto } from './dto/signInDto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<any>;
    register(registerDto: RegisterDto): unknown;
}
