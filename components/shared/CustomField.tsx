/**
 * react-hook-form과 zod를 사용하여 폼 필드를 렌더링
 * 이 컴포넌트는 폼 필드의 제어 객체와 렌더링 함수, 필드 이름, 라벨, 추가 CSS 클래스 등을 받아서 폼 필드를 생성
 *
 * @param {Control<z.infer<typeof formSchema>> | undefined} control - react-hook-form의 제어 객체
 * @param {(props: { field: any }) => React.ReactNode} render - 필드를 렌더링하는 함수
 * @param {keyof z.infer<typeof formSchema>} name - 폼 필드의 이름
 * @param {string} [formLabel] - 폼 필드의 라벨 (선택 사항)
 * @param {string} [className] - 추가적인 CSS 클래스를 적용하기 위한 문자열 (선택 사항)
 *
 * @returns {JSX.Element} - 렌더링된 커스텀 폼 필드
 */

import React from "react";
import { Control } from "react-hook-form";
import { z } from "zod";

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "../ui/form";

import { formSchema } from "./TransformationForm";

type CustomFieldProps = {
  control: Control<z.infer<typeof formSchema>> | undefined;
  render: (props: { field: any }) => React.ReactNode;
  name: keyof z.infer<typeof formSchema>;
  formLabel?: string;
  className?: string;
};

export const CustomField = ({
  control,
  render,
  name,
  formLabel,
  className,
}: CustomFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          <FormControl>{render({ field })}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
