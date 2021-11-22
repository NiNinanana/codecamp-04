import { Component } from "react";
import MyComponenet from "../../src/components/units/classcomponent";

interface IState {
  count: number;
}

export default class MyCounterPage extends Component {
  state: IState = {
    count: 0,
  };

  //   onClickCounter() {
  //     console.log(this.state.count);
  //   }

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <>
        <div>현재 카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
        {/* 버튼을 누른 순간 새로운 환경이 만들어지고 window를 뜻하는 this가 나오게 된다. */}
        {/* <button onClick={this.onClickCounter.bind(this)}>
          카운트 올리기!!!
        </button> */}
        {/* 뒤에 .bind(this)를 넣어서 그 함수에서 쓰는 this는 원래의 this라는 것을 알게 해준다. */}
        {/* 또는 onClickCounter를 화살표 함수로 만들어주면 bind안하고 알아서 잘 가져오게 된다. */}
        {/* 렉시컬 this라고 부른다. */}
        <MyComponenet count={this.state.count} />
      </>
    );
  }
}
