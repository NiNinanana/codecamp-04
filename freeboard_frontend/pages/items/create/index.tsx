import { withAuth } from "../../../src/components/commons/withAuth";
import CreateItem from "../../../src/components/units/items/create/createItem.container";

const CreateItemPage = () => {
  return <CreateItem />;
};

export default withAuth(CreateItemPage);
