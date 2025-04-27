import classNames from "classnames";
import { Icon as MinistaIcon } from "minista";

export default function Icon({
  className,
  name,
  hasFill = false,
  width,
  height,
}) {
  return (
    <MinistaIcon
      className={classNames(className)}
      iconId={name}
      fill={hasFill ? "currentColor" : "none"}
      stroke={hasFill ? "none" : "currentColor"}
      width={width || 24}
      height={height || 24}
    />
  );
}
