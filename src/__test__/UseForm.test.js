import { render, screen } from '@testing-library/react';
import UseForm from '../Components/UseForm';
import { vi } from 'vitest';

test('Checking Component Loaded', () => {
    render(<UseForm />);
    expect(screen.getByText('User Registration')).toBeInTheDocument();
});
