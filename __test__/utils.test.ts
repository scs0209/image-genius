import { debounce, deepMergeObjects } from "@/lib/utils";

// 테스트 그룹을 설명하는 describe 블록 시작
describe("debounce 함수", () => {
  // debounce 함수의 특정 동작을 설명하는 테스트 케이스 시작
  it("주어진 함수를 일정 시간동안 지연시킵니다", () => {
    // setTimeout 함수를 jest.spyOn을 사용하여 가로채어 감시
    jest.useFakeTimers();

    // 테스트에 사용할 가짜 함수 생성
    const mockFunction = jest.fn();

    // debounce 함수 호출
    const debouncedFunction = debounce(mockFunction, 1000);

    // 가짜 함수를 인자로 호출
    debouncedFunction();

    // 500밀리초만큼 시간 경과
    jest.advanceTimersByTime(500);

    // 가짜 함수가 아직 호출되지 않았음을 확인
    expect(mockFunction).not.toHaveBeenCalled();

    // 1000밀리초만큼 더 시간 경과
    jest.advanceTimersByTime(1000);

    // 가짜 함수가 호출되었음을 확인
    expect(mockFunction).toHaveBeenCalled();
  });
});

// deepMergeObjects 함수의 테스트 그룹 설명
describe("deepMergeObjects 함수", () => {
  // 두 객체를 깊게 병합하는지 확인하는 테스트 케이스
  it("두 개의 객체를 깊게 병합합니다", () => {
    // 테스트에 사용할 두 객체 생성
    const obj1 = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    };

    const obj2 = {
      b: {
        c: 4,
        d: {
          f: 5,
        },
      },
      g: 6,
    };

    // deepMergeObjects 함수 호출
    const mergedObject = deepMergeObjects(obj1, obj2);

    // 기대한 결과와 실제 결과를 비교하여 테스트
    expect(mergedObject).toEqual({
      a: 1,
      b: {
        c: 2, // obj2의 값을 우선시하여 병합되어야 함
        d: {
          e: 3,
          f: 5,
        },
      },
      g: 6,
    });
  });

  // obj2가 null 또는 undefined인 경우, obj1을 반환하는지 확인하는 테스트 케이스
  it("obj2가 null 또는 undefined인 경우, obj1을 반환합니다", () => {
    // 테스트에 사용할 객체 생성
    const obj1 = {
      a: 1,
      b: {
        c: 2,
      },
    };

    // obj2가 null인 경우 테스트
    expect(deepMergeObjects(obj1, null)).toEqual(obj1);

    // obj2가 undefined인 경우 테스트
    expect(deepMergeObjects(obj1, undefined)).toEqual(obj1);
  });
});
