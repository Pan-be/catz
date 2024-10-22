import React from "react";
import { render, screen } from "@testing-library/react";
import CatPic from "../CatPic";
import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import "./setuTests.js"

// Mock API response with MSW
// const server = setupServer(
//     rest.get("https://api.thecatapi.com/v1/images/search", (req, res, ctx) => {
//         return res(
//             ctx.json([{ url: "https://example.com/cat.jpg" }])
//         );
//     })
// );

// // Setup the server before running the tests
// beforeAll(() => server.listen());

// // Reset any request handlers that are added during the tests
// afterEach(() => server.resetHandlers());

// // Stop the server after the tests are finished
// afterAll(() => server.close());

describe("CatPic Component", () => {
    it("displays the loading icon initially", () => {
        render(<CatPic />);
        expect(screen.getByAltText(/loading icon/i)).toBeInTheDocument();
    });

    it("displays a cat picture after the image is loaded", async () => {
        render(<CatPic />);

        // Wait for the cat image to be loaded
        const catImage = await screen.findByAltText(/a cat/i);

        expect(catImage).toBeInTheDocument();
        expect(catImage.src).toBe("https://example.com/cat.jpg");
    });
});
