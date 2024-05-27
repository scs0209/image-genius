# Image Genius

<p align="center">
  <img src="https://github.com/scs0209/modubuy/assets/110822847/87414022-b0e3-4d64-b543-77caab91d397" alt="Logo" width="300" height="200" />
</p>

## 배포 링크

[Image Genius Deployment Link](https://image-genius-two.vercel.app/)

## Description

이미지 지니어스는 Next.js와 Cloudinary AI를 사용하여 직관적인 인터페이스로 이미지를 생성하고 조작할 수 있는 웹 애플리케이션입니다. 사용자 경험과 성능에 중점을 둔 원활한 이미지 처리 기능을 제공합니다.

## 주의사항

<p>$\huge{\rm{\color{#DD6565}테스트\ 결제\ 시\ 카드\ 번호: 4242\ 4242\ 4242\ 4242}}$</p>

## Demo

![Screen Recording - May 27, 2024](https://github.com/scs0209/modubuy/assets/110822847/da348d08-4a55-4c58-9866-3dcf02b39bd6)

## 목차

- [Image Genius](#image-genius)
  - [배포 링크](#배포-링크)
  - [Description](#description)
  - [주의사항](#주의사항)
  - [Demo](#demo)
  - [목차](#목차)
  - [Installation](#installation)
  - [기능](#기능)
  - [기술 스택](#기술-스택)
    - [프런트엔드](#프런트엔드)
    - [백엔드](#백엔드)
    - [테스트](#테스트)
    - [결제](#결제)
  - [종속성](#종속성)
  - [구성](#구성)
  - [사용법](#사용법)
  - [예제](#예제)
    - [이미지 생성](#이미지-생성)
    - [이미지 조작](#이미지-조작)
  - [문제 해결](#문제-해결)
  - [❤ git commit message 컨벤션](#-git-commit-message-컨벤션)
  - [기여자](#기여자)
  - [라이선스](#라이선스)

## Installation

로컬에서 프로젝트를 설정하려면 다음 단계를 따르세요:

1. 저장소 클론:

   ```sh
   git clone https://github.com/scs0209/image-genius.git
   cd image-genius
   ```

2. 종속성 설치:

   ```sh
   npm install
   # 또는
   yarn install
   ```

3. 개발 서버 실행:

   ```sh
   npm run dev
   # 또는
   yarn dev
   ```

4. 브라우저를 열고 [http://localhost:3000](http://localhost:3000)으로 이동하여 애플리케이션을 확인하세요.

## 기능

- 로그인(소셜 로그인), 회원가입(clerk 사용)
- 이미지 조작(배경 제거, 퀄리티 상승, 색 변경, 주요 물체 제거)
- 이미지 다운로드
- 사용자 친화적인 인터페이스(반응형 디자인)
- 언어 번역
- 결제 기능
- Next.js의 server action 사용

## 기술 스택

### 프런트엔드

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

---

### 백엔드

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-ffffff?style=for-the-badge&logo=clerk&logoColor=black)
![Cloudinary](https://img.shields.io/badge/Cloudinary-60CFFF?style=for-the-badge&logo=cloudinary&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-336791?style=for-the-badge&logo=yarn&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

---

### 테스트

![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![React Testing Library](https://img.shields.io/badge/React_Testing_Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)

---

### 결제

![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)

## 종속성

프로젝트는 다음 주요 종속성에 의존합니다:

- Next.js
- TypeScript
- Tailwind CSS

## 구성

프로젝트는 다음 파일을 편집하여 구성할 수 있습니다:

- `next.config.mjs`: Next.js 구성
- `tailwind.config.ts`: Tailwind CSS 구성
- `.env`: 환경 변수 (있는 경우)

## 사용법

프로젝트를 설정한 후 브라우저에서 애플리케이션으로 이동하여 사용을 시작할 수 있습니다. `app/page.tsx`를 수정하여 애플리케이션의 메인 페이지를 업데이트할 수 있습니다. 변경 사항은 실시간으로 반영됩니다.

## 예제

이미지 지니어스를 사용하는 예제:

### 이미지 생성

1. 애플리케이션을 엽니다.
2. 원하는 이미지 생성 매개변수를 선택합니다.
3. "생성" 버튼을 클릭하여 이미지를 만듭니다.

### 이미지 조작

1. 이미지를 업로드합니다.
2. 사용 가능한 도구를 사용하여 이미지를 편집합니다 (자르기, 크기 조정, 필터 적용).
3. 편집된 이미지를 다운로드합니다.

## 문제 해결

문제가 발생하면 다음 단계를 시도하세요:

1. 모든 종속성이 올바르게 설치되었는지 확인합니다.
2. 콘솔에 오류가 있는지 확인합니다.
3. 구성 파일에 잘못된 설정이 없는지 검토합니다.

## ❤ git commit message 컨벤션

| 커밋 유형 | 의미                       |
| --------- | -------------------------- |
| feat      | 새로운 기능 추가           |
| fix       | 버그, 기능 수정            |
| Docs      | 문서 수정                  |
| style     | 스타일 코드 추가           |
| refactor  | 코드 리팩토링              |
| chore     | 기능과 관련 없는 내용 수정 |

## 기여자

|                                                            성창수                                                            |
| :--------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/jsdmas/jsdmas.github.io/assets/105098581/e237b4f3-26f3-4a37-8818-86787f5d858b" width="160px" /> |
|                                       [🙎🏻‍♂️ FE 팀원 : 창수](https://github.com/scs0209)                                        |
|                                                                                                                              |

## 라이선스

이 프로젝트는 MIT 라이선스 하에 라이선스가 부여되었습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
