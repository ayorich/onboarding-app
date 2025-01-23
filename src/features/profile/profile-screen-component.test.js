import { render, screen } from "@testing-library/react-native";

import { ProfileScreenComponent } from "./profile-screen-component";

const createProps = ({ profileName = "John" } = {}) => ({
  profileName,
});

describe("ProfileScreenComponent", () => {
  test("should display the profile name", () => {
    const props = createProps();

    render(<ProfileScreenComponent {...props} />);

    expect(screen.getByText("John")).toBeTruthy();
  });

  test("should display the text 'My name is'", () => {
    const props = createProps({
      profileName: "",
    });

    render(<ProfileScreenComponent {...props} />);

    expect(screen.getByText("My name is")).toBeTruthy();
  });

  test("should apply the correct styles to the profile name", () => {
    const props = createProps();

    render(<ProfileScreenComponent {...props} />);

    const nameElement = screen.getByText("John");
    expect(nameElement.props.style).toMatchObject({
      color: "blue",
      fontWeight: "bold",
      paddingLeft: 8,
      display: "inline-block",
    });
  });
});
