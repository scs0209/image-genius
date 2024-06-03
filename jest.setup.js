import "@testing-library/jest-dom";
import "jest-location-mock";
import "whatwg-fetch";
import { server } from "./mocks/server";
import { TextEncoder, TextDecoder } from "util";

jest.mock("@clerk/nextjs", () => ({
  SignedIn: ({ children }) => <div>{children}</div>,
  SignedOut: ({ children }) => <div>{children}</div>,
  UserButton: () => <button>UserButton</button>,
}));

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
