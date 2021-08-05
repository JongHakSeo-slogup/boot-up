import React from "react";
import AppLayout from "./components/AppLayout";
import Toast from "./components/Toast";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppLayout>
          <>
            <Router />
            <Toast />
          </>
        </AppLayout>
      </header>
    </div>
  );
}

export default App;
