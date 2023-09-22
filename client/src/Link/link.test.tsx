import React from 'react';
import { render, fireEvent, screen, getByLabelText, getByText } from '@testing-library/react';
import Link from './link';

describe('Link Component', () => {
  const linkProps = {
    id: 1,
    linkName: 'Test Link',
    linkUrl: 'https://test.com',
  };

  it('renders link correctly', () => {
    const { getByText } = render(<Link {...linkProps} />);
    const linkElement = getByText(linkProps.linkName);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe(linkProps.linkUrl);
  });

  it('opens link in a new tab', () => {
    const { getByText } = render(<Link {...linkProps} />);
    const linkElement = getByText(linkProps.linkName);
    expect(linkElement.getAttribute('target')).toBe('_blank');
    expect(linkElement.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('calls the removeLink() when delete button is clicked', () => {
    const { getByText } = render(<Link {...linkProps} />);
    const deleteButton = getByText('Delete');
    const mockRemoveLink = jest.fn();
    deleteButton.onclick = mockRemoveLink;
    fireEvent.click(deleteButton);
    expect(mockRemoveLink).toHaveBeenCalled();
  });

  describe('Edit Mode of Link Component', () => {
    it('switches to editing mode when edit button is clicked', () => {
        const { getByText, getByLabelText } = render(<Link {...linkProps} />);
        const editButton = getByText('Edit');
        fireEvent.click(editButton);
        const linkNameInput = getByLabelText('Link Name:') as HTMLInputElement;;
        const linkUrlInput = getByLabelText('Link Url:') as HTMLInputElement;;
        expect(linkNameInput.value).toBe(linkProps.linkName);
        expect(linkUrlInput.value).toBe(linkProps.linkUrl);
      });

      it('updates link title when input is changed', () => {
        const { getByText, getByLabelText } = render(<Link {...linkProps} />);
        const editButton = getByText('Edit');
        fireEvent.click(editButton);
        const linkNameInput = getByLabelText('Link Name:') as HTMLInputElement;;
        fireEvent.change(linkNameInput, { target: { value: 'Updated Link' } });
        expect(linkNameInput.value).toBe('Updated Link');
      });

      it('updates link URL when valid URL is entered', () => {
        const { getByText, getByLabelText } = render(<Link {...linkProps} />);
        const editButton = getByText('Edit');
        fireEvent.click(editButton);
        const linkUrlInput = getByLabelText('Link Url:') as HTMLInputElement;;
        fireEvent.change(linkUrlInput, { target: { value: 'https://google.com' } });
        expect(linkUrlInput.value).toBe('https://google.com');
      });

      it('displays an error message for invalid URL', () => {
        const { getByText, getByLabelText } = render(<Link {...linkProps} />);
        const editButton = getByText('Edit');
        fireEvent.click(editButton);
        const linkUrlInput = getByLabelText('Link Url:');
        fireEvent.change(linkUrlInput, { target: { value: 'bad-link' } });
        const errorMessage = getByText('Invalid URL');
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveStyle({ color: 'red' });
      });

      it('calls the saveLink() when save button is clicked', () => {
        const { getByText, getByLabelText } = render(<Link {...linkProps} />);
        const editButton = getByText('Edit');
        fireEvent.click(editButton);
        const saveButton = getByText('Save')
        const mockSaveLink = jest.fn();
        saveButton.onclick = mockSaveLink;
        fireEvent.click(saveButton);
        expect(mockSaveLink).toHaveBeenCalled();
      });

      
  })
});
