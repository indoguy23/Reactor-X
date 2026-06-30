import { AppLayout } from "./app/layout";
import { Hero } from "./features/hero";
import { Navbar } from "./shared/components/navigation";

const App = () => {
  return (
    <AppLayout>
      <Navbar />
      <Hero />
    </AppLayout>
  );
};

export default App;