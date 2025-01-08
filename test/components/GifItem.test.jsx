const { render } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");

describe("Testing GifItem component", () => {
  const title = "One Piece";
  const url = "https://slfajfl.com";
  test("should match the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });
});
