import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Testing GifExpertApp", () => {
  //1. tratar de escribir en input, tratar de postear el formulario y ver que pasa con onAddCategory
  //2. que pasaria si vuelvo a mandar la misma categoria
  //3 Que sucederia en el html si mando una categoria distinta

  test("should add new category if it does not already exist", () => {
    render(<GifExpertApp />);

    const input = screen.getByPlaceholderText("Buscar gifs");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "Saitama" } });
    fireEvent.submit(form);

    screen.debug();

    expect(screen.getByText("Saitama")).toBeTruthy();
  });

  test("should not add new category if it already exist", () => {
    render(<GifExpertApp />);

    const input = screen.getByPlaceholderText("Buscar gifs");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);

    expect(screen.getAllByText("One Punch").length).toBe(1);
  });
});
