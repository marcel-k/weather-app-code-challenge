import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';

import { LocationSearchPopOver } from './LocationSearchPopover';

const server = setupServer(

  rest.get(`${(window as any).appConfig.forecastApiUrl}`, (req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json(
        { 'cod': '404', 'message': 'city not found' }
      ));
  })
)

beforeAll(() => {
  //arrange
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('renders nothing when popover is closed', () => {
  let { container: popover, rerender } = render(<LocationSearchPopOver open={false} />);

  expect(popover).toBeEmptyDOMElement();

  const handleClose = jest.fn();
  rerender(<LocationSearchPopOver open={true} onClose={handleClose} />);

  expect(popover).not.toBeEmptyDOMElement();

  // TODO: this test should be in the popover testing file
  fireEvent.click(screen.getByTestId('close-button-popover'));

  expect(handleClose).toBeCalledTimes(1);
});

test('renders error message when city cannot be found', async () => {
  render(<LocationSearchPopOver open={true} />);

  const cityInput = screen.getByTestId('cityname');
  const countryCodeInput = screen.getByTestId('countrycode');

  userEvent.type(cityInput, 'Nergens');
  userEvent.type(countryCodeInput, 'Land');

  expect(cityInput).toHaveValue('Nergens');
  expect(countryCodeInput).toHaveValue('Land');

  userEvent.click(screen.getByTestId('button-ok'));

  await waitFor(() => {
    expect(screen.getByTestId('error-message')).toBeInTheDocument();
  });

});



test('renders open location popover', () => {
  const { container: popover } = render(<LocationSearchPopOver open={true} />);

  expect(popover).toMatchInlineSnapshot(`
<div>
  <div
    class="sc-eCYdqJ eLhglr"
  >
    <dialog
      class="sc-hKMtZM jxtGFt"
      open=""
    >
      <button
        class="sc-dkzDqf jYIglh sc-gKXOVf eKSkyu"
        data-testid="close-button-popover"
      >
        <span
          class="sc-gsnTZi dyJvyD material-icons-outlined "
          color="#4e4a7c"
        >
          close
        </span>
      </button>
      <div
        class="sc-jSMfEi dbwkUx"
      >
        <form
          class="sc-iBkjds jBDjfO"
        >
          <fieldset
            class="sc-ftvSup hmGUTg"
          >
            <label
              class="sc-papXJ hUuIVL"
              for="cityname"
            >
              CityName
            </label>
            <input
              class="sc-jqUVSM cUZvJH"
              data-testid="cityname"
              name="cityname"
              required=""
              type="search"
            />
          </fieldset>
          <fieldset
            class="sc-ftvSup hmGUTg"
          >
            <label
              class="sc-papXJ hUuIVL"
              for="countrycode"
            >
              CountryCode (nl, de, uk, se, etc.)
            </label>
            <input
              class="sc-jqUVSM cUZvJH"
              data-testid="countrycode"
              name="countrycode"
              required=""
              type="search"
            />
          </fieldset>
          <button
            class="sc-dkzDqf jYIglh sc-kDDrLX csnxbP"
            data-testid="button-ok"
            type="submit"
          >
            OK
          </button>
        </form>
      </div>
    </dialog>
  </div>
</div>
`);
});
