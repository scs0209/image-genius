import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { navLinks } from "@/constants";
import SideBar from "@/components/shared/SideBar";
import { mockRouter } from "./next-router.utils";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

describe("SideBar", () => {
  it("renders the sidebar logo", () => {
    render(<SideBar />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the navigation links for signed-in users", () => {
    render(<SideBar />, { wrapper: MemoryRouterProvider });
    navLinks.slice(0, 6).map((link) => {
      const linkElement = screen.getByRole("link", {
        name: `icon ${link.label}`,
      });
      // expect(linkElement).toBeInTheDocument();
      // expect(linkElement).toHaveAttribute("href", link.route);

      fireEvent.click(linkElement);

      expect(mockRouter.pathname).toEqual(link.route);
    });
  });

  it("renders additional navigation links for signed-in users", () => {
    render(<SideBar />);
    navLinks.slice(6).forEach((link) => {
      const linkElement = screen.getByRole("link", {
        name: new RegExp(link.label, "i"),
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
