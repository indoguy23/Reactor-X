import { AppLayout } from "./app/layout"

const App = () => {
  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to Reactor-X</h1>
        <p className="text-lg text-gray-600">
          This is a sample application using React and TypeScript.
        </p>
      </div>
    </AppLayout>
  )
}

export default App