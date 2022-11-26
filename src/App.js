import React from "react";
import Signup from './signup';
import { CssVarsProvider } from '@mui/joy/styles';
export default function App() {
  return (
    <CssVarsProvider>
      <Signup />
    </CssVarsProvider>

  );
}
