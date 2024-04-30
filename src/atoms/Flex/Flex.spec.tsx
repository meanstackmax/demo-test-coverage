import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import Flex from './Flex';

describe('Flex', () => {
  it('renders Flex', () => {
    render(<Flex />);
    expect(screen.getByTestId('wd-flex')).toBeInTheDocument();
    expect(screen.getByTestId('wd-flex')).toHaveClass('wd-flex');
    expect(screen.getByTestId('wd-flex')).toBeVisible();
  });

  it('handles justifyContent property', () => {
    const flex = <Flex justifyContent="start" />;
    render(flex);
    expect(screen.getByTestId('wd-flex')).toBeInTheDocument();
    expect(screen.getByTestId('wd-flex')).toHaveClass('justify-content-start');
  });

  it('handles alignItems property', () => {
    const flex = <Flex alignItems="start" />;
    render(flex);
    expect(screen.getByTestId('wd-flex')).toBeInTheDocument();
    expect(screen.getByTestId('wd-flex')).toHaveClass('align-items-start');
  });

  it('handles flexDirection property', () => {
    const flex = <Flex flexDirection="row-reverse" />;
    render(flex);
    expect(screen.getByTestId('wd-flex')).toBeInTheDocument();
    expect(screen.getByTestId('wd-flex')).toHaveClass('flex-row-reverse');
  });

  it('handles wrap property', () => {
    const flex = <Flex wrap="nowrap" />;
    render(flex);
    expect(screen.getByTestId('wd-flex')).toBeInTheDocument();
    expect(screen.getByTestId('wd-flex')).toHaveClass('flex-nowrap');
  });
});
