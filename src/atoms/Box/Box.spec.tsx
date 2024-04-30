import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import Box from './Box';

describe('Box', () => {
  it('renders Box', () => {
    render(<Box />);
    expect(screen.getByTestId('wd-box')).toBeInTheDocument();
    expect(screen.getByTestId('wd-box')).toHaveClass('wd-box');
    expect(screen.getByTestId('wd-box')).toBeVisible();
  });

  it('handles display property', () => {
    const box = <Box display="flex" />;
    render(box);
    expect(screen.getByTestId('wd-box')).toBeInTheDocument();
    expect(screen.getByTestId('wd-box')).toHaveClass('flex');
  });

  it('handles as property', () => {
    const box = <Box as="button" />;
    render(box);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('wd-box');
  });
});
