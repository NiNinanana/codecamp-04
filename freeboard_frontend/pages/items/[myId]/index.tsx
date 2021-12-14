import DetailItem from "../../../src/components/units/items/detail/DetailItem.container";
import QNALIST from "../../../src/components/units/items/detail/questions&answers/list/Q&AList.container";
import QNAWrite from "../../../src/components/units/items/detail/questions&answers/write/Q&AWrite.container";

export default function DetailItemPage() {
  return (
    <>
      <DetailItem />
      <QNAWrite />
      <QNALIST />
    </>
  );
}
