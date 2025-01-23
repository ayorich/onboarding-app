import { render, screen, fireEvent } from "@testing-library/react-native";
import { OnboardingFormComponent } from "./onboarding-form-component";

const createProps = ({
  onSubmit = jest.fn(),
  onChangeText = jest.fn(),
  name = "",
} = {}) => ({
  onSubmit,
  onChangeText,
  name,
});

describe("OnboardingFormComponent", () => {
  let props;

  beforeEach(() => {
    props = createProps();
  });

  test("should display input and 'Submit Name' button when user visits onboarding for the first time", () => {
    render(<OnboardingFormComponent {...props} />);

    expect(screen.getByPlaceholderText("Enter Name")).toBeOnTheScreen();
    expect(
      screen.getByRole("button", { name: /Submit Name/i }),
    ).toBeOnTheScreen();
  });

  test("should display input with persisted name and 'Update' button when user revisits onboarding", () => {
    props = createProps({ name: "John" });

    render(<OnboardingFormComponent {...props} />);

    expect(screen.getByPlaceholderText("Enter Name")).toBeOnTheScreen();
    expect(screen.getByDisplayValue("John")).toBeVisible();
    expect(screen.getByRole("button", { name: /Update/i })).toBeOnTheScreen();
  });

  it("calls onSubmit when the button is pressed", () => {
    render(<OnboardingFormComponent {...props} />);

    fireEvent.press(screen.getByRole("button", { name: /Submit Name/i }));
    expect(props.onSubmit).toHaveBeenCalled();
  });
});
