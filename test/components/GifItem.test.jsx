const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");

describe("Testing GifItem component", () => {
  const title = "One Piece";
  const url = {
    url: "https://slfajfl.com",
  };

  test("should match the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("should show image with url y el alt indicado", () => {
    render(<GifItem title={title} url={url} />);

    // expect(screen.getByRole("img").src).toBe(url.url + "/");
    // expect(screen.getByRole("img").alt).toBe(title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url.url + "/");
    expect(alt).toBe(title);
  });

  test("should show title in component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
