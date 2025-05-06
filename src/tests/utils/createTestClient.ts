import type { Elysia } from 'elysia';

export function createTestClient(app: Elysia, defaultHeaders: Record<string, string> = {}) {
  return {
    get: (path: string, headers?: Record<string, string>) => 
      testFetch('GET', path, undefined, headers),
    post: (path: string, body?: any, headers?: Record<string, string>) => 
      testFetch('POST', path, body, headers),
    patch: (path: string, body?: any, headers?: Record<string, string>) => 
      testFetch('PATCH', path, body, headers),
    put: (path: string, body?: any, headers?: Record<string, string>) => 
      testFetch('PUT', path, body, headers),
    delete: (path: string, headers?: Record<string, string>) => 
      testFetch('DELETE', path, undefined, headers),
  };

  async function testFetch(
    method: string, 
    path: string, 
    body?: any,
    requestHeaders?: Record<string, string>
  ) {
    // Merge headers properly
    const headers = new Headers({
      'Content-Type': 'application/json',
      ...defaultHeaders,
      ...requestHeaders,
    });

    const request = new Request(`http://localhost${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const response = await app.handle(request);
    
    return {
      status: response.status,
      headers: response.headers,
      json: <T>() => response.json() as Promise<T>,
    };
  }
}