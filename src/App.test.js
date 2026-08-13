// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AxonNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AxonNode/i);
    expect(titleElement).toBeInTheDocument();
});
