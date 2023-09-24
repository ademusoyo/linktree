import React from 'react';
import { render, screen } from '@testing-library/react';
import LinkPage  from './links';


describe('Links Page', () => {

    it('renders welcome message', () => {
        render(<LinkPage />);
        const welcomeMessage = screen.getByText(/Welcome! These are all your links!/i);
        expect(welcomeMessage).toBeInTheDocument();
      });

     it('renders the add new link button', () => {
        render(<LinkPage />);
        const addButton = screen.getByRole('button', { name: /add new link/i });
        expect(addButton).toBeInTheDocument();
        
      });
  });






