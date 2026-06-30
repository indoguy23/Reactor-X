import { AppLayout } from "./app/layout";
import { Button } from "./shared/components/ui/Button";

const App = () => {
  return (
    <AppLayout>
      <div className="flex h-screen items-center justify-center">
        <Button>Explore Reactor</Button>
      </div>
    </AppLayout>
  );
};

export default App;