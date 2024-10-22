import { setupServer } from "msw/node";
import { rest } from "msw";
import 'whatwg-fetch';


export const server = setupServer(
    rest.get("https://api.thecatapi.com/v1/images/search", (req, res, ctx) => {
        return res(
            ctx.json([{ url: "https://example.com/cat.jpg" }])
        );
    })
);

// Start server before all tests
beforeAll(() => {
    console.log("server starting...")
    server.listen()
});

// Reset handlers after each test to avoid test interference
afterEach(() => server.resetHandlers());

// Stop server after all tests
afterAll(() => {
    console.log("server closing...")
    server.close()
});
