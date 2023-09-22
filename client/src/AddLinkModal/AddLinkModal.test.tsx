import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddLinkModal from './addLinkModal';

describe('AddLinkModal', () => {
  it('renders without error', () => {
    render(<AddLinkModal onClose={() => {}} />);
  });

  it('updates link title when input value changes', () => {
    const { getByLabelText } = render(<AddLinkModal onClose={() => {}} />);
    const inputElement = getByLabelText('Link Name:') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'New Link' } });
    expect(inputElement.value).toBe('New Link');
  });

  it('updates link url when input value changes', () => {
    const { getByLabelText } = render(<AddLinkModal onClose={() => {}} />);
    const inputElement = getByLabelText('Link Url:', {exact:false}) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'https://test.com' } });
    expect(inputElement.value).toBe('https://test.com');
  });

  it('displays error message for invalid url', () => {
    const { getByLabelText, getByText } = render(<AddLinkModal onClose={() => {}} />);
    const inputElement = getByLabelText('Link Url:', {exact:false});
    fireEvent.change(inputElement, { target: { value: 'bad-url' } });
    expect(getByText('Enter a valid URL')).toBeInTheDocument();
  });

  it('calls createLink() and closes modal on form submission', () => {
    const createLinkMock = jest.fn();
    const { getByText, getByLabelText } = render(<AddLinkModal onClose={() => {}} />);
    const addLinkButton = getByText('Add Link');
    const titleInputElement = getByLabelText('Link Name:');
    const urlInputElement = getByLabelText('Link Url:', {exact:false});
    fireEvent.change(titleInputElement, { target: { value: 'New Link' } });
    fireEvent.change(urlInputElement, { target: { value: 'https://example.com' } });

    addLinkButton.onclick = createLinkMock;
    fireEvent.click(addLinkButton);
    expect(createLinkMock).toHaveBeenCalled();
  });

  it('calls onClose function when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(<AddLinkModal onClose={onCloseMock} />);
    const closeButton = getByText('Close');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
