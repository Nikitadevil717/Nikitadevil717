import { rest } from 'msw';

export const handlers = [
    rest.get('http://localhost:3000/scoops', (req, res, ctx) => {
       return res(
           ctx.json([
               {
                   name: 'Chocolate',
                   imagePath: '/images/chocolate.png'
               }, {
                    name: 'Vanilla',
                    imagePath: '/images/vanilla.png'
               }
           ])
       )
    }),
    rest.get('http://localhost:3000/toppings', (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    name: 'Cherries',
                    imagePath: '/images/chocolate.png'
                }, {
                    name: 'M&Ms',
                    imagePath: '/images/vanilla.png'
                }, {
                    name: 'Hot fudge',
                    imagePath: '/images/vanilla.png'
                }
            ])
        )
    }),
    rest.post('http://localhost:3000/order', (req, res, ctx) => {
        return res(ctx.json({ orderNumber: 123455676 }));
    })
];