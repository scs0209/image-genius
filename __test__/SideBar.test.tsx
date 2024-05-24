import { render, screen, waitFor } from "@testing-library/react";
import { navLinks } from "@/constants";
import SideBar from "@/components/shared/SideBar";

// Clerk 컴포넌트를 mock 합니다.
jest.mock("@clerk/nextjs", () => ({
  SignedIn: ({ children }: any) => <>{children}</>,
  SignedOut: ({ children }: any) => <>{children}</>,
  UserButton: () => <div>User Button</div>,
}));

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("SideBar", () => {
  it("renders the sidebar logo", () => {
    render(<SideBar />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the navigation links for signed-in users", () => {
    render(<SideBar />);
    navLinks.slice(0, 6).forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it("renders the UserButton for signed-in users", () => {
    render(<SideBar />);
    expect(screen.getByText("User Button")).toBeInTheDocument();
  });

  it("renders the login button for signed-out users", () => {
    jest.mock("@clerk/nextjs", () => ({
      SignedIn: () => null,
      SignedOut: ({ children }: any) => <>{children}</>,
    }));
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
