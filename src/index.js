import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/Authcontext";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { routes } from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <Suspense fallback={<h1>loading............</h1>}>
            <RouterProvider router={routes} />
          </Suspense>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
