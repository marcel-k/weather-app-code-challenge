import { render } from '@testing-library/react';
import React from 'react';

import { Card } from './Card';

test('renders a default card', () => {
  const { container: card } = render(<Card>Some content</Card>);

  expect(card).toMatchInlineSnapshot(`
<div>
  <div
    class="sc-bczRLJ hcceGu"
  >
    Some content
  </div>
</div>
`);
});
