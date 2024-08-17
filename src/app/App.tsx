import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/withRouter';
import Loader from '../shared/ui/loader/Loader';

function App() {
  return (
      <RouterProvider
          router={router}
          fallbackElement={<Loader/>}
      />
  );
}

export default App;
