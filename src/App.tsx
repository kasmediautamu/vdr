import React, { Suspense } from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.scss';
const Landing = React.lazy(()=>import('./containers/landing'));
const PaidPlan = React.lazy(()=>import ('./containers/paid-plan'));
const MyPage = React.lazy(()=>import('./containers/my-page'));
function App() {
  return (
  <>
  <Routes>
  
    <Route
    path='/'
    element={
      <Suspense fallback={<>Loading</>}>
        <Landing/>
      </Suspense>
    }
    />
    <Route
    path='/paid-plan'
    element={
      <Suspense fallback={<>Loading</>}>
        <PaidPlan/>
      </Suspense>
    }
    />
    <Route
    path='/my-page'
    element={
      <Suspense fallback={<>Loading</>}>
        <MyPage/>
      </Suspense>
    }
    />
    
  </Routes>
  </>
  );
}

export default App;
