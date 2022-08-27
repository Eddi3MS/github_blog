import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faCalendarDay,
  faChevronLeft,
  faComment,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header, Hero, Posts, Search } from "./components";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <Header />
      <Hero />
      <Posts />
    </QueryClientProvider>
  );
}

export default App;

{
  /*      <FontAwesomeIcon icon={faCalendarDay as IconProp} />
      <FontAwesomeIcon icon={faChevronLeft as IconProp} />
      <FontAwesomeIcon icon={faComment as IconProp} /> */
}
