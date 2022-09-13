import { render, screen } from '../../../test-utils/testing-library-utils';

import Options from "../Options";
import userEvent from "@testing-library/user-event/dist";

test('displays image for each scoop option from server', async () => {
    render(<Options optionType="scoops" />);

    const scoopImages =  await screen.findAllByRole('img', {
        name: /scoop$/i
    });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text images
    const altText = scoopImages.map(element => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('Displays image for each toppings option from sever', async () => {
    render(<Options optionType="toppings" />);

    const scoopImages = await screen.findAllByRole('img', {
        name: /topping$/i
    });
    expect(scoopImages).toHaveLength(3);

    const altText = scoopImages.map(element => element.alt);
    expect(altText).toEqual([
        'Cherries topping',
        'M&Ms topping',
        'Hot fudge topping'
    ])
});

test('don\'t update total if scoops input is invalid', async () => {
    render(<Options optionType="scoops" />);

    const vanillaInput = await screen.findByRole('spinbutton', {
        name: 'Vanilla'
    });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '-1');

    const scoopsSubtotal = screen.getByText('Scoops total: $0.00');
    expect(scoopsSubtotal).toBeInTheDocument();
})