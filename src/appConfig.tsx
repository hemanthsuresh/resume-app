import React from 'react';
export const AppConfigContext = React.createContext({
  apiUrl: "https://api.example.com",
  tokenKey: "auth_token",
  siteName: "Quick Resume"
});