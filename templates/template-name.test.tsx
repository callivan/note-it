import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { TemplateName } from './template-name';

describe('<TemplateName />', () => {
  test('it should mount', () => {
    render(<TemplateName />);

    const theme = screen.getByTestId('TemplateName');

    expect(theme).toBeInTheDocument();
  });
});
