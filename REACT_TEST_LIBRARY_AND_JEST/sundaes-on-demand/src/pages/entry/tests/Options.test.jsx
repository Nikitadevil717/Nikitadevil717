import {render, screen} from '@testing-library/react';

import Options from "../Options";

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
        name: /toppings$/i
    });
    expect(scoopImages).toHaveLength(3);

    const altText = scoopImages.map(element => element.alt);
    expect(altText).toEqual([
        'Cherries toppings',
        'M&Ms toppings',
        'Hot fudge toppings'
    ])
})