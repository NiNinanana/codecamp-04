import { ISidebarUIProps } from "./Sidebar.types";

export default function SidebarUI(props: ISidebarUIProps) {
  return (
    <>
      <div onClick={props.topButton}>button</div>
    </>
  );
}
