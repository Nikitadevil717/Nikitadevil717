import { render , screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event/dist";

import App from "../App";
import OrderEntry from "../pages/entry/OrderEntry";
import {OrderDetailsProvider} from "../contexts/OrderDetails";

test('order phases for happy path', async () => {
   render(
       <App />
   );

   const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla'
   });

   userEvent.clear(vanillaInput);
   userEvent.type(vanillaInput, '1');

   const chocolateInput = screen.getByRole('spinbutton', {
      name: 'Chocolate'
   });
   userEvent.clear(chocolateInput);
   userEvent.type(chocolateInput, '2');

   const cherriesCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries'
   });
   userEvent.click(cherriesCheckbox);

   const orderSummaryButton = screen.getByRole('button', {
      name: /order sundae/i
   });
   userEvent.click(orderSummaryButton);

   const summaryHeading = screen.getByText('Order Summary');
   expect(summaryHeading).toBeInTheDocument();

   const scoopsHeading = screen.getByText('Scoops: $6.00');
   expect(scoopsHeading).toBeInTheDocument();

   const toppingsHeading = screen.getByText('Scoops: $6.00');
   expect(toppingsHeading).toBeInTheDocument();

   expect(screen.getByText('1 Vanilla')).toBeInTheDocument();
   expect(screen.getByText('2 Chocolate')).toBeInTheDocument();
   expect(screen.getByText('Cherries')).toBeInTheDocument();

   const optionItems = screen.getAllByRole('listitem');
   const optionItemsText = optionItems.map(item => item.textContent);
   expect(optionItemsText).toEqual([
       '1 Vanilla',
      '2 Chocolate',
      'Cherries'
   ]);

   const tcCheckbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i
   });
   userEvent.click(tcCheckbox);

   const confirmOrderButton = screen.getByRole('button', {
      name: /confirm order/i
   });
   userEvent.click(confirmOrderButton);

   const loading = screen.getByText(/loading/i);
   expect(loading).toBeInTheDocument();

   const thankYouHeader = await screen.findByRole('heading', {
      name: /thank you/i
   });
   expect(thankYouHeader).toBeInTheDocument();

   const notLoading = screen.queryByText(/loading/i);
   expect(notLoading).not.toBeInTheDocument();

   const orderNumber = await screen.findByText('order number', {
      exact: false
   });
   expect(orderNumber).toBeInTheDocument();

   const newOrderButton = screen.getByRole('button', {
      name: /new order/i
   });
   userEvent.click(newOrderButton);

   const scoopsTotal = screen.getByText('Scoops total: $0.00');
   expect(scoopsTotal).toBeInTheDocument();
   const toppingsTotal = screen.getByText('Scoops total: $0.00');
   expect(toppingsTotal).toBeInTheDocument();

   await screen.findByRole('spinbutton', {
      name: 'Vanilla'
   });
   await screen.findByRole('checkbox', {
      name: 'Cherries'
   })
});

test('Topppings header is not on summary page if no toppings ordered', async () => {
   render(
       <App />
   );

   const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla'
   });

   userEvent.clear(vanillaInput);
   userEvent.type(vanillaInput, '1');

   const chocolateInput = screen.getByRole('spinbutton', {
      name: 'Chocolate'
   });
   userEvent.clear(chocolateInput);
   userEvent.type(chocolateInput, '2');

   const orderSummaryButton = screen.getByRole('button', {
      name: /order sundae/i
   });
   userEvent.click(orderSummaryButton);

   const scoopsHeading = screen.getByRole('heading', {
      name: 'Scoops: $6.00'
   });
   expect(scoopsHeading).toBeInTheDocument();

   const toppingsHeading = screen.queryByRole('heading', {
      name: /otppings/i
   });
   expect(toppingsHeading).not.toBeInTheDocument();
});

test('disable order button if three are no scoops ordered', async () => {
   render(
       <OrderDetailsProvider>
          <OrderEntry setOrderPhase={jest.fn()}/>
       </OrderDetailsProvider>
   );

   const orderButton = screen.getByRole('button', {
      name: /order sundae/i
   });
   expect(orderButton).toBeDisabled();

   const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla'
   });

   userEvent.clear(vanillaInput);
   userEvent.type(vanillaInput, '1');
   expect(orderButton).toBeEnabled();

   userEvent.clear(vanillaInput);
   userEvent.type(vanillaInput, '0');
   expect(orderButton).toBeDisabled();
});