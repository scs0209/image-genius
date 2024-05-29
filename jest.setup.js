import "@testing-library/jest-dom";
import "whatwg-fetch";

jest.mock("@clerk/nextjs", () => ({
  SignedIn: ({ children }) => <div>{children}</div>,
  SignedOut: ({ children }) => <div>{children}</div>,
  UserButton: () => <button>UserButton</button>,
}));
