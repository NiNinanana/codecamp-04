const withAuth = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);

// 밑에는 과정


function aaa(Component) {
  return function bbb(props) {
    // 로그인 검증
    return "리턴이요!";
  };
}

const aaa = (Component) => {
  return (props) => {
    // 로그인 검증
    return "리턴이요!";
  };
};

const asdf = () => {
  return 123;
};

const asdf = () => 123;

const aaa = (Component) => (props) => {
  // 로그인 검증
  return <Component {...props}>;
};
