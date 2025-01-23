import { render, screen } from "@testing-library/react-native";

import { OnboardingScreenComponent } from "./onboarding-screen-component";

const createProps = ({
  userUpdated = jest.fn(),
  profileName = "John",
} = {}) => ({
  userUpdated,
  profileName,
});

describe("OnboardingScreen component", () => {
  test("given the user re-visits onboarding: input should be showed and button with text 'Update'", () => {
    const props = createProps();

    render(<OnboardingScreenComponent {...props} />);

    expect(screen.getByPlaceholderText("Enter Name")).toBeOnTheScreen();

    expect(screen.getByRole("button", { name: /Update/i })).toBeOnTheScreen();
  });
});
