import { Button, Flex } from "@mantine/core";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Hello mantine/tailwind!</h1>
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: "lg" }}
        justify={{ sm: "center" }}
      >
        <Button>This is a mantine buttons with default styles</Button>
      <Button className="bg-cyan-500 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500">
        This is a mantine button styled with TailwindCSS
      </Button>
      </Flex>
      
    </div>
  );
}

export default App;
