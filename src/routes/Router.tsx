import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UseEffectPage } from "../pages/UseEffectPage";
import { UseEffectApi } from "../pages/UseEffectApi";
import { UseCallbackPage } from "../pages/UseCallbackPage";
import { UseMemoPage } from "../pages/UseMemoPage";
import { UseRefPage } from "../pages/UseRefPage";
import { UseRefMutableValue } from "../pages/UseRefMutableValue";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/useeffect" element={<UseEffectPage />} />
        <Route path="/useeffectapi" element={<UseEffectApi />} />
        <Route path="/usecallback" element={<UseCallbackPage />} />
        <Route path="/usememo" element={<UseMemoPage />} />
        <Route path="/useref" element={<UseRefPage />} />
        <Route path="/userefmutable" element={<UseRefMutableValue />} />
      </Routes>
    </BrowserRouter>
  );
}
