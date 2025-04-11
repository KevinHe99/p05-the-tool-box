import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from './routes/Home.tsx'
import Test2 from "./routes/test/test/Test2.tsx";
import Test from "./routes/test/Test.tsx";
import ToolsPage from "./routes/tools/ToolsPage.tsx";
import CalculatorPage from "./routes/tools/calculator/CalculatorPage.tsx";

/*
    Documentation help for routing
    https://reactrouter.com/start/declarative/routing
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />

              <Route path="test">
                  <Route index element={<Test />} />
                  <Route path="test2" element={<Test2 />} />
              </Route>

              <Route path="tools">
                  <Route index element={<ToolsPage />} />
                  <Route path="calculator" element={<CalculatorPage />} />
              </Route>
          </Routes>

      </BrowserRouter>
  </StrictMode>,
)
