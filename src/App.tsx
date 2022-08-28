import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Post from "./views/Post";
import { ErrorModalContext } from "./context/ErrorFeedbackContext";
import { useContextSelector } from "use-context-selector";
import { ErrorFeedbackModal, Portal } from "./components";
import Loading from "./components/Loading/Loading";
import { LoadingContext } from "./context/LoadingContext";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  const { error, setErrorModal } = useContextSelector(
    ErrorModalContext,
    (state) => state
  );

  const loading = useContextSelector(LoadingContext, (state) => state.loading);

  return (
    <>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>

      {!!error && (
        <Portal show={!!error}>
          <ErrorFeedbackModal
            onHide={() => setErrorModal(null)}
            message={error.message}
          />
        </Portal>
      )}

      {!!loading && (
        <Portal show={!!loading}>
          <Loading />
        </Portal>
      )}
    </>
  );
}

export default App;
