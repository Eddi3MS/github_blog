import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Post from "./views/Post";
import { ErrorModalContext } from "./context/ErrorFeedbackContext";
import { useContextSelector } from "use-context-selector";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  const error = useContextSelector(ErrorModalContext, (state) => state.error);

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

      {!!error && <p>Deu ruim!!</p>}
    </>
  );
}

export default App;
