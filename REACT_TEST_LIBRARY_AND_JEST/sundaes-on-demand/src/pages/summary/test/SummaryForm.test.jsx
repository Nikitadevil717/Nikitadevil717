import {render, screen, waitForElementToBeRemoved} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event/dist";

test('render checkbox', () => {
    render(<SummaryForm/>);
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i
    });
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button', {
        name: /confirm order/i
    });
    expect(confirmButton).toBeDisabled();
});

test('Checkbox disables button on first click and enables on second click', () => {
    render(<SummaryForm/>);
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i
    });
    const confirmButton = screen.getByRole('button', {
        name: /confirm orde/i
    });

    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
});

test('popover responds to hover', async () => {
   render(<SummaryForm />);

   const nullPopover = screen.queryByText(
       /no ice cream will actually be delivered/i
   );
   expect(nullPopover).not.toBeInTheDocument();

   const termsAndConditions = screen.getByText(/terms and conditions/i);
   userEvent.hover(termsAndConditions);

   const popover = screen.getByText(
       /no ice cream will actually be delivered/i
   );
   expect(popover).toBeInTheDocument();

   userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
        screen.queryByText(/no ice cream will actually be delivered/i)
    );
});