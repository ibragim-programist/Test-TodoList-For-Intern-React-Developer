import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { OneTodoWrapper } from './components/oneTodoWrapper/OneTodoWrapper.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:id' element={<OneTodoWrapper />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

