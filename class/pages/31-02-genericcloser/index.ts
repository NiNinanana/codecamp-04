// 클로저(함수선언식) - 기초
// prettier-ignore
const firstFunc = (arg1: string) => (arg2: number): [string, number] => {
  return [arg1, arg2];
};
const resultClosure1 = firstFunc("영희")(123);

//
//
// 클로저(함수선언식) - 기초(any)
// prettier-ignore
const firstFunc2 = (arg1: any) => (arg2: any): [any, any] => {
  return [arg1, arg2];
};
const resultClosure2 = firstFunc2(true)(234);

//
//
// 클로저(함수선언식) - 기초(generic)
// prettier-ignore
const firstFunc3 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
  return [arg1, arg2];
};
const resultClosure3 = firstFunc3(true)(234);

//
//
// 클로저(함수선언식) - 기초(generic)
// prettier-ignore
const firstFunc4 = <C, P extends{aaa: string}>(component: C) => (props: P) => {
    
  return [component, props];
};
const resultClosure4 = firstFunc4("presenter")({ aaa: "철수" });
