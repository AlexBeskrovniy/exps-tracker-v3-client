import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import { client } from './client';

import AuthProvider from './providers/AuthProvider';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <ApolloProvider client={ client }>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </ApolloProvider>
  </AuthProvider>
)
