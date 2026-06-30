import { AppLayout } from "./app/layout"
import { Loader } from "./features/loader"

const App = () => {
  return (
    <AppLayout>
      <Loader />
    </AppLayout>
  )
}

export default App