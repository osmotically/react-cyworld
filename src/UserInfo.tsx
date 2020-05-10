import { createContext } from 'react';
import { ReactFacebookLoginInfo } from 'react-facebook-login';

export const UserInfo = createContext<ReactFacebookLoginInfo | null>(null);