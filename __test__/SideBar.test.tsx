import { render, screen, waitFor } from "@testing-library/react";
import { navLinks } from "@/constants";
import SideBar from "@/components/shared/SideBar";

const mockUsePathname = jest.fn();

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  usePathname() {
    return mockUsePathname();
  },
}));

describe("SideBar", () => {
  it("renders the sidebar logo", () => {
    render(<SideBar />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the navigation links for signed-in users", () => {
    render(<SideBar />);
    navLinks.slice(0, 6).map((link) => {
      const linkElement = screen.getByRole("link", {
        name: `icon ${link.label}`,
      });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", link.route);
    });
  });

  it("renders the login button for signed-out users", () => {
    render(<SideBar />);
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });

  it("renders images for each navigation link", async () => {
    render(<SideBar />);
    await waitFor(() => {
      navLinks.slice(0, 6).forEach((link) => {
        const image = screen.getByText(link.label);
        expect(image).toBeInTheDocument();
      });
    });
  });
});
