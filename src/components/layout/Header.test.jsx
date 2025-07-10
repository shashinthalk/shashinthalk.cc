import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  test('renders site name link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const siteNameLink = screen.getByText(/shashinthalk\.cc/i);
    expect(siteNameLink).toBeInTheDocument();
    expect(siteNameLink).toHaveAttribute('href', '/');
  });

  test('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/services/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
