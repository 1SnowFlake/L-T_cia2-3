import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone the request to mock an authorization token
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer mock-token-123456`,
      'X-Mock-Interceptor': 'true' // Just an extra header to prove interception works
    }
  });

  return next(clonedRequest);
};
