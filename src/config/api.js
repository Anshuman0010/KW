const isDevelopment = import.meta.env.MODE === 'development';

const config = {
  development: {
    serverUrl: 'https://kw-backend.onrender.com',
    apiPaths: {
      base: '/api',
      auth: {
        signup: '/signup',
        login: '/login',
        logout: '/logout',
        verifyEmail: '/verify-email'
      },
      user: {
        profile: '/profile'
      }
    }
  },
  production: {
    serverUrl: 'https://kw-backend.onrender.com',
    apiPaths: {
      base: '/api',
      auth: {
        signup: '/signup',
        login: '/login',
        logout: '/logout',
        verifyEmail: '/verify-email'
      },
      user: {
        profile: '/profile'
      }
    }
  }
};

const environment = config[isDevelopment ? 'development' : 'production'];

export const getApiUrl = (path) => {
  // Remove the /auth from the path parameter since it's already in apiPaths
  const fullPath = path.startsWith('/') ? path.substring(1) : path;
  const [section, endpoint] = fullPath.split('/');
  
  return `${environment.serverUrl}${environment.apiPaths.base}/${section}${environment.apiPaths[section][endpoint]}`;
};

export default environment; 