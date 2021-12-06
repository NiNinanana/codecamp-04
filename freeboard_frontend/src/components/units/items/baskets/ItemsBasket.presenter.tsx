export default function ItemsBasketUI(props) {
  return (
    <>
      {props.basketItems.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.name}</span>
          <span>{el.price}</span>
          <button id={el._id} onClick={props.delete}>
            삭제
          </button>
        </div>
      ))}
    </>
  );
}
