import { render, fireEvent, screen } from "@testing-library/react-native";
import { UsersScreenComponent } from "./users-component";

describe("UsersScreenComponent", () => {
  const mockUsers = [
    { id: "1", name: "John Doe", address: { city: "New York" } },
    { id: "2", name: "Jane Smith", address: { city: "Los Angeles" } },
  ];

  const mockLoadUsers = jest.fn();

  test("renders the list of users", () => {
    render(
      <UsersScreenComponent users={mockUsers} loadUsers={mockLoadUsers} />,
    );

    expect(screen.getByText("John Doe")).toBeTruthy();
    expect(screen.getByText("New York")).toBeTruthy();
    expect(screen.getByText("Jane Smith")).toBeTruthy();
    expect(screen.getByText("Los Angeles")).toBeTruthy();
  });

  test("calls loadUsers when the button is pressed", () => {
    render(
      <UsersScreenComponent users={mockUsers} loadUsers={mockLoadUsers} />,
    );

    fireEvent.press(screen.getByText("Refetch Users"));
    expect(mockLoadUsers).toHaveBeenCalled();
  });
});
