import { cleanup, render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import AlignmentContainer from './AlignmentContainer';

const MULTIPLE_CHILDREN_MISSING_ERROR = 'AlignmentContainer needs multiple children!';

describe('AlignmentContainer', () => {
  it('should render correctly', () => {
    render(
      <AlignmentContainer data-testid="alignment-container">
        <div data-testid="child">Child</div>
      </AlignmentContainer>
    );
    const alignmentContainer = screen.getByTestId('alignment-container');
    const child = screen.getByTestId('child');

    expect(alignmentContainer).toBeInTheDocument();
    expect(child).toBeInTheDocument();
    expect(child.parentElement?.parentElement).toBe(alignmentContainer);
  });

  it('should apply justifyContent and alignItems', () => {
    render(
      <AlignmentContainer
        justifyContent="center"
        alignItems="center"
      >
        <div data-testid="child">Child</div>
      </AlignmentContainer>
    );
    const childParent = screen.getByTestId('child').parentElement;
    expect(childParent).toHaveClass('justify-content-center', 'align-items-center');
  });

  it('should throw error without children', () => {
    const renderWithoutChildren = () => render(<AlignmentContainer />);
    expect(renderWithoutChildren).toThrowError(MULTIPLE_CHILDREN_MISSING_ERROR);
  });

  it('should throw error and not have wd-alignment-container__item class without children', () => {
    const renderWithoutChildren = () => render(<AlignmentContainer data-testid={'test-id'} />);
    expect(renderWithoutChildren).toThrowError(MULTIPLE_CHILDREN_MISSING_ERROR);
    const alignmentContainer = screen.queryByTestId('test-id');
    expect(alignmentContainer).not.toBeInTheDocument();
    expect(document.querySelector('.wd-alignment-container__item')).toBeNull();
  });

  it('should render multiple children', () => {
    render(
      <AlignmentContainer>
        <div>Child 1</div>
        <div>Child 2</div>
      </AlignmentContainer>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('should pass through rest props', () => {
    render(
      <AlignmentContainer
        data-testid="alignment-container"
        aria-label="test"
      >
        <div>Child</div>
      </AlignmentContainer>
    );
    const alignmentContainer = screen.getByTestId('alignment-container');
    expect(alignmentContainer).toHaveAttribute('aria-label', 'test');
  });

  it('should correctly handle multiple and single class names', () => {
    render(
      <AlignmentContainer
        className="custom-container extra-class"
        itemClassName="custom-item extra-item-class"
      >
        <div>Child</div>
      </AlignmentContainer>
    );
    let container = screen.getByText('Child').parentElement?.parentElement;
    let item = screen.getByText('Child').parentElement;

    expect(container).toHaveClass('wd-alignment-container', 'custom-container', 'extra-class');
    expect(item).toHaveClass('wd-alignment-container__item', 'custom-item', 'extra-item-class');

    cleanup();

    render(
      <AlignmentContainer
        className="single-class"
        itemClassName="single-item-class"
      >
        <div>Child</div>
      </AlignmentContainer>
    );
    container = screen.getByText('Child').parentElement?.parentElement;
    item = screen.getByText('Child').parentElement;

    expect(container).toHaveClass('wd-alignment-container', 'single-class');
    expect(item).toHaveClass('wd-alignment-container__item', 'single-item-class');

    cleanup();

    render(
      <AlignmentContainer>
        <div>Child</div>
      </AlignmentContainer>
    );
    container = screen.getByText('Child').parentElement?.parentElement;
    item = screen.getByText('Child').parentElement;

    expect(container).toHaveClass('wd-alignment-container');
    expect(item).toHaveClass('wd-alignment-container__item');
  });
});
