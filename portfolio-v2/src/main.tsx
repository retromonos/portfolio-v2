import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

export function mapArray(n:number, start:number)
{
  let res = []
  for(let i=start; i < n+start; i++)
    res.push(i)

  return res
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
