import Login from "components/Auth/Login/Login";
import Register from "components/Auth/Register/Register";
import Home from "components/Home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const client = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: 0,
			refetchOnWindowFocus: false,
		},
	},
});

const App = () => {
	return (
		<QueryClientProvider client={client}>
			<RecoilRoot>
				<BrowserRouter>
					<Routes>
						<Route index element={<Home />} />
						<Route path="register" element={<Register />} />
						<Route path="login" element={<Login />} />
					</Routes>
				</BrowserRouter>
			</RecoilRoot>
		</QueryClientProvider>
	);
};

export default App;
