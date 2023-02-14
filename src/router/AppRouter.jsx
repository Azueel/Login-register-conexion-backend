import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../auth/pages/LoginScreen';
import { RegisterScreen } from '../auth/pages/RegisterScreen';

export const AppRouter = () => {
	return (
		//Router principal
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginScreen />} />

				<Route path="/register" element={<RegisterScreen />} />
			</Routes>
		</BrowserRouter>
	);
};
