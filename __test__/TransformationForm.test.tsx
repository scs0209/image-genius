import TransformationForm from "@/components/shared/TransformationForm";
import { render, fireEvent, waitFor } from "@testing-library/react";

describe("TransformationForm", () => {
  it("renders form with default values", () => {
    const { getByText } = render(
      <TransformationForm
        action="Add"
        type="fill"
        creditBalance={10}
        userId="123"
      />
    );
    expect(getByText("Image Title")).toBeInTheDocument();
    expect(getByText("Select size")).toBeInTheDocument();
  });

  it("calls onSubmit when form is submitted", async () => {
    const onSubmit = jest.fn();
    const { getByText } = render(
      <TransformationForm
        action="Add"
        type="fill"
        creditBalance={10}
        userId="123"
      />
    );
    const form = getByText("Save Image");
    fireEvent.submit(form);
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
  });

  it("calls onSelectFieldHandler when aspect ratio is selected", async () => {
    const onSelectFieldHandler = jest.fn();
    const { getByText } = render(
      <TransformationForm
        action="Add"
        type="fill"
        creditBalance={10}
        userId="123"
      />
    );
    const select = getByText("Select size");
    fireEvent.change(select, { target: { value: "16:9" } });
    await waitFor(() => expect(onSelectFieldHandler).toHaveBeenCalledTimes(1));
  });

  it("calls onInputChangeHandler when input field is changed", async () => {
    const onInputChangeHandler = jest.fn();
    const { getByText } = render(
      <TransformationForm
        action="Add"
        type="fill"
        creditBalance={10}
        userId="123"
      />
    );
    const input = getByText("Image Title");
    fireEvent.change(input, { target: { value: "New title" } });
    await waitFor(() => expect(onInputChangeHandler).toHaveBeenCalledTimes(1));
  });

  it("renders InsufficientCreditsModal when credit balance is low", () => {
    const { getByText } = render(
      <TransformationForm
        action="Add"
        type="fill"
        creditBalance={0}
        userId="123"
      />
    );
    expect(getByText("Insufficient credits")).toBeInTheDocument();
  });
});
