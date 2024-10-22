import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../Login";
import { UserContext } from "../../state/UserContext";


// Mockowanie login i logout
const mockLogin = vi.fn();
const mockLogout = vi.fn();

// Funkcja renderująca z mockowanym kontekstem
const renderWithUserContext = (user) => {
    return render(
        <UserContext.Provider value={{ user, login: mockLogin, logout: mockLogout }}>
            <Login />
        </UserContext.Provider>
    );
};

describe("Login Component", () => {
    it("renders login form when no user is logged in", () => {
        renderWithUserContext(null); // Brak zalogowanego użytkownika
        expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
    });

    it("calls login function when form is submitted", () => {
        renderWithUserContext(null);
        const input = screen.getByPlaceholderText("Enter your name");
        fireEvent.change(input, { target: { value: "John" } });
        fireEvent.submit(screen.getByRole("button", { name: /login/i }));

        expect(mockLogin).toHaveBeenCalledWith("John");
    });

    it("renders logout button when user is logged in", () => {
        const mockUser = { name: "John" }; // Symulowany zalogowany użytkownik
        renderWithUserContext(mockUser);
        expect(screen.getByText("Welcome, John!")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
    });
});
