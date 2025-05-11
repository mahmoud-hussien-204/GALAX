import {RouterProvider} from "react-router-dom";

import AuthProvider from "@/modules/auth/providers/AuthProvider";

import {router} from "./router/Router";

import LoadingScreen from "@/components/LoadingScreen";

import {AnimatePresence} from "framer-motion";

import ScreenTitleProvider from "./providers/ScreenTitleProvider";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import {ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <ScreenTitleProvider>
          <main className='overflow-x-hidden font-poppins'>
            <AnimatePresence>
              <RouterProvider router={router} fallbackElement={<LoadingScreen />} />
            </AnimatePresence>
          </main>
        </ScreenTitleProvider>
      </AuthProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
