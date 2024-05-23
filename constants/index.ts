export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Image Restore",
    route: "/transformations/add/restore",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Generative Fill",
    route: "/transformations/add/fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Object Remove",
    route: "/transformations/add/remove",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "Object Recolor",
    route: "/transformations/add/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Background Remove",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: "/assets/icons/bag.svg",
  },
];

// 다양한 이미지 변환 작업데 대한 설정을 저장
// 각 변환 작업은 고유의 키와 함께 여러 가지 속성을 가짐
export const transformationTypes = {
  // 이미지 복원을 위한 설정
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "image.svg",
  },
  // 배경 제거를 위한 설정
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  // 이미지 채우기를 위한 설정
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  // 객체 제거를 위한 설정
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    // 제거 프롬프트, 그림자 제거 여부, 다중 제거 여부 포함
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  // 객체 재색을 위한 설정
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    // 재색 프롬프트, 색상 변경 대상, 다중 재색 여부 포함
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

// react-hook-form에 사용할 defaultValues(초깃값이 설정이 안되어있을 때 사용)
export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};
