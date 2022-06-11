import { render } from "@testing-library/react";
import Test from "components/Test";

it("renders homepage unchanged", () => {
  const { container } = render(<Test />);
  expect(container).toMatchSnapshot();
});
