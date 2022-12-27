import { SafeAreaView } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import CoinList from "./components/CoinList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <CoinList />
      </SafeAreaView>
      <StatusBar style="auto" />
    </QueryClientProvider>
  );
};

export default App;
