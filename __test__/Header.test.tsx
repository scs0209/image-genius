import Header from "@/components/shared/Header";
import { render, screen } from "@testing-library/react";

describe("Header 컴포넌트", () => {
  it("제목이 올바르게 렌더링되어야 함", () => {
    const title = "Test Title";

    render(<Header title={title} />);

    // 제목 요소 확인
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument(); // 제목이 화면에 나타나는지 확인
    expect(titleElement).toHaveClass("h2-bold");
    expect(titleElement).toHaveClass("text-dark-600");
  });

  it("부제목이 주어지면 올바르게 렌더링되어야 함", () => {
    // 테스트에 필요한 가짜 데이터 설정
    const title = "Test Title";
    const subtitle = "Test Subtitle";

    // 컴포넌트 렌더링
    render(<Header title={title} subtitle={subtitle} />);

    // 부제목 요소 확인
    const subtitleElement = screen.getByText(subtitle);
    expect(subtitleElement).toBeInTheDocument(); // 부제목이 화면에 나타나는지 확인
    expect(subtitleElement).toHaveClass("p-16-regular");
    expect(subtitleElement).toHaveClass("mt-4");
  });

  it("부제목이 주어지지 않으면 렌더링되지 않아야 함", () => {
    const title = "Test Title";

    render(<Header title={title} />);

    const subtitleElement = screen.queryByText(/Test Subtitle/);
    expect(subtitleElement).not.toBeInTheDocument();
  });
});
