import express from 'express';
import { mockStateGet, mockStateUpdateOne } from './state';

const app = express();
const port = 3000;

app.get('/time/:offset', async (req, res) => {
    console.log('Received request for time');
    const { offset } = req.params as { offset: string }
    const date = new Date()
    const localDate = date.getTime() // local time
    const localOffset = date.getTimezoneOffset() * 60000
    const formattedOffset = Number(offset.replace(':', '.'))
    const target = localDate + localOffset + 3600000 * formattedOffset

    // Add 400 ms delay to simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 400));

    res.status(200).json({ time: new Date(target).toUTCString() });
});

app.get('/posts/:id', async (req, res) => {
    console.log('Received request for post');
    const { id } = req.params as { id: string }
    mockStateUpdateOne(Number(id));
    const state = mockStateGet();
    res.status(200).json(state.entities[id]);
});

function start() {
    app.listen(port, () => {
        console.log(`Mock service app listening at http://localhost:${port}`);
    });
}

start();