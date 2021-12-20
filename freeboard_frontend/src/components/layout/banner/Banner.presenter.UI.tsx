import { useRouter } from "next/router";
import { Contents } from "./Banner.styles";
import { IBannerTitleUIProps } from "./Banner.types";

export default function BannerTitleUI(props: IBannerTitleUIProps) {
  const router = useRouter();
  const onClickTitle = () => {
    router.push(`/boards/${props.el._id}`);
  };

  let title = props.el.title;

  if (title.length > 10) {
    title = title.slice(0, 10) + "...";
  }

  return (
    <>
      <Contents>
        <h3 onClick={onClickTitle}>
          {props.index + 1}. {title}
        </h3>
      </Contents>
    </>
  );
}
