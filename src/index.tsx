import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './Style/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 30000,
      refetchInterval: 0,
      refetchOnWindowFocus: false
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
