import TransformationForm from "@/components/shared/TransformationForm";
import { render, screen } from "@testing-library/react";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

describe("TransformationForm", () => {
  it("renders form with default values", () => {
    render(
      <TransformationForm
        action="Add"
        type="fill"
        creditBalance={10}
        userId="123"
      />,
      { wrapper: MemoryRouterProvider }
    );
    expect(screen.getByRole("textbox", { name: /title/i })).toBeInTheDocument();
  });
});
