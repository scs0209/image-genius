import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { navLinks } from "@/constants";
import MobileNav from "@/components/shared/MobileNav";

import { mockRouter } from "./next-router.utils";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

describe("MobileNav", () => {
  it("로고를 렌더링한다", () => {
    render(<MobileNav />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("로그인한 사용자의 내비게이션 링크를 렌더링한다", async () => {
    render(<MobileNav />, { wrapper: MemoryRouterProvider });

    const menuButton = screen.getByAltText("menu");
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);

    await waitFor(() => {
      navLinks.forEach((link) => {
        const linkElement = screen.getByRole("link", {
          name: `logo ${link.label}`,
        });
        expect(linkElement).toBeInTheDocument();

        fireEvent.click(linkElement);

        expect(mockRouter.pathname).toEqual(link.route);
      });
    });
  });

  it("로그아웃한 사용자를 위한 로그인 버튼을 렌더링한다", () => {
    render(<MobileNav />);
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });
});
