// 1. 문자
const getString = (arg: string): string => {
  return arg;
};
const result1 = getString("철수");

// 철수는 arg옆 스트링, return arg해서 나오는 리턴은 (): 스트링 이거

// 2. 숫자
const getNumber = (arg: number): number => {
  return arg;
};
const result2 = getNumber(3);

// 3. 모두
const getAny = (arg: any): any => {
  return arg;
};
const result31 = getAny(3);
const result32 = getAny(true);
const result33 = getAny("hihi");

// 4. 모두(generic - 일반적인)
const getGeneric = <T>(arg: T): T => {
  return arg;
};

const result41 = getGeneric(8);
const result42 = getGeneric(false);
const result43 = getGeneric("byebye");
// 우리가 만든 타입, 들어간거랑 나온거랑 같게

// 5. 모두(any) - 응용
const getReverse = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};
const result51 = getReverse("철수", "다람쥐초등학교", 8);
const result52 = getReverse(true, "국민학교", 56);
const result53 = getReverse("패스트파이브", 700, false);

// 6. 모두(generic) - 응용
// prettier-ignore
const getReverseType = <U1, U2, U3>(arg1: U1, arg2: U2, arg3: U3): [U3, U2, U1] => {
  return [arg3, arg2, arg1];
};
const result61 = getReverseType("철수", "다람쥐초등학교", 8);
const result62 = getReverseType(true, "국민학교", 56);
const result63 = getReverseType("패스트파이브", 700, false);

// 8. 모두(generic) - 축약
// prettier-ignore
const getReverseTUV = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};
const result81 = getReverseTUV("철수", "다람쥐초등학교", 8);
const result82 = getReverseTUV(true, "국민학교", 56);
const result83 = getReverseTUV("패스트파이브", 700, false);
