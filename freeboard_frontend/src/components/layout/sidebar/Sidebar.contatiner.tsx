import SidebarUI from "./Sidebar.presenter";

export default function Sidebar() {
  const onClickTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SidebarUI topButton={onClickTopButton} />
    </>
  );
}
