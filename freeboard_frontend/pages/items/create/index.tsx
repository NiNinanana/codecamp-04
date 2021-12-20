import { withAuth } from "../../../src/components/commons/withAuth";
import CreateItem from "../../../src/components/units/items/create/createItem.container";

const CreateItemPage = () => {
  return <CreateItem isEdit={false} />;
};

export default withAuth(CreateItemPage);
