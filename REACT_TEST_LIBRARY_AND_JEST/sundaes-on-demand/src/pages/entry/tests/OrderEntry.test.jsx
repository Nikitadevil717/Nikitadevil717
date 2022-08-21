import {render, screen, waitFor} from '../../../test-utils/testing-library-utils';
import OrderEntry from "../OrderEntry";
import { rest } from 'msw';
import { server } from "../../../mocks/server";

test.only('handles error for scoops and toppings routes', async () => {
    server.resetHandlers(
        rest.get('http://localhost:3000/scoops', (req, res, ctx) =>
            res(ctx.status(500))
        ),
        rest.get('http://localhost:3000/toppings', (req, res, ctx) =>
            res(ctx.status(500))
        )
    );

    render(<OrderEntry />);

    await waitFor(() => {
        const alerts = screen.getAllByRole('alert');
        expect(alerts).toHaveLength(2);
    });
});

test.skip('skip', () => {});