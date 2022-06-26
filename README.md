# 프로젝트 실행 방법

## 실행 환경

- nodejs: 16.15.1
- npm: 8.11.0
- 웹 브라우저: chrome 103.0.5060.53

## 설치

- yarn 설치

```sh
npm install -g yarn@1.22.19
```

- 패키지 설치

```sh
yarn install
```

## 실행

`yarn start`실행 후, 웹 브라우저에서 localhost:3000로 실행 결과물을 확인

```sh
yarn start
```

# 최종 스크린샷

![Screenshot](image/screenshot.gif)

<!-- ![screenshot](https://user-images.githubusercontent.com/50227228/175811791-4324bfd5-0d88-4d68-8332-f28cb3c77834.gif) -->

# 사용한 기술과 선택한 이유

> CRA(create-react-app) : 가장 빠르게 react 환경을 구축할 수 있음

## 프로젝트 구조

- component : 반복되는 요소 분리하여 구성
- page : components 등 조합하여 구성

```bash
├── public
├── src
│   ├── assert
│   ├── components
│   ├── page
│   └── index.js
├── .gitignore
├── .stylelintrc
├── eslintrc.js
├── package.json
├── prettierrc
├── README.md
└── yarn.lock
```

## 영역별 등장 애니메이션

- css animation 이용하여 opacity와 translateY 값을 조정
- animation-delay 를 통해 순차 등장 애니메이션 구현

## 숫자가 올라가는 애니메이션

- useEffect 를 활용하여 render 후 숫자가 올라가는 애니메이션 구현
- setInterval과 미리 선언한 percent 배열을 통해 숫자 증가
