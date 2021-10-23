# TypeScript

## 목차

1. [타입스크립트 사용 이유](#타입스크립트-사용-이유)
2. [Yarn Setting](#yarn-setting)
3. [TypeScript 기본타입](#typescript-기본-타입)

---

## 타입스크립트 사용 이유

#### 1. IDE를 더욱 더 적극적으로 활용 가능 ( 자동 완성, 타입 확인 )

#### 2. 실수 방지

---

## Yarn Setting

1. 프로젝트 생성

   ```shell
   yarn init -y
   ```

   디렉터리에 `package.json` 이라는 파일 생성

2. 타입스크립트 설정 파일 생성

   typescript 글로벌 설치

   ```
   $ yarn global add typescript
   ```

   이후 프로젝트 디렉터리 안에서 `tsc-init` 명령어를 입력하면 tsconfig.json 파일이 자동생성됨

---

## TypeScript 기본 타입

기본적으로 자바스크립트의 `const` 와 `let`, `var`를 사용 가능하다.
여기에 더해 타입스크립트는 타입을 지정할 수 있는데 지정 방법은 아래와 같다

```ts
let num: number = 10; //와 같은 형태로 num의 값에는 number 타입의 변수만 들어올 수 있다
num = "1"; //의 경우 타입 오류가 발생한다
const message: string = "hello world"; // 문자열
const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ["hello", "world"]; // 문자열 배열

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있다
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있다

let color: "red" | "orange" | "yellow" = "red"; // red, orange, yellow 중 하나
color = "yellow";
color = "green"; // 에러 발생!
```

---

## 함수에서의 타입 정의

타입 스크립트에서는 함수의 `파라미터` 타입과 `return`값의 타입 또한 지정할 수다.

```ts
function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 2);
```

위 코드와 같이 **function sum() `: number`** 가 있는데 `:number`의 역할이 해당 함수의 결과물의 타입이다.

```ts
function sum(x: number, y: number): number {
  return null; //해당 줄에 빨간줄이 쳐지면서 오류가 발생한다
}
```

만약 이를 지정하고 `null`값을 반환하면 오류가 발생한다
