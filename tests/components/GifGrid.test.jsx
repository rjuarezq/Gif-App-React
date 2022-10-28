import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Al momento de realizar un mock de toda esta parte, Jest esta esperando
//La implementación ya puesta del useFetchGits
jest.mock("../../src/hooks/useFetchGifs");

describe("Test for <GifGrid/> component", () => {
  const newCategory = "CyberPunk";

  test("Check the initial loading message  before load the gifs are shown ", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={newCategory} />);
    //screen.debug();
    expect(screen.getByText("Cargando imagenes...")).toBeTruthy();
    expect(screen.getByText(newCategory)).toBeTruthy();
  });

  test("Check if the gifs are showing according to the input value", () => {
    //Static Data
    const images = [
      {
        id: "l0ExlTPcZqobpseyY",
        title: "digital art tech GIF by Morena Daniela",
        url: "https://giphy.com/gifs/glitch-3d-space-l0ExlTPcZqobpseyY",
      },
      {
        id: "L3bj6t3opdeNddYCyl",
        title: "Season 4 GIF by Rick and Morty",
        url: "https://giphy.com/gifs/rickandmorty-season-4-episode-2-rick-and-morty-L3bj6t3opdeNddYCyl",
      },
    ];

    useFetchGifs.mockReturnValue({
      images,
      isLoading: false,
    });

    render(<GifGrid category={newCategory} />);
    expect( screen.getAllByRole('img').length).toBe(2);
    screen.debug();
  });
});
