import Wp from "gi://AstalWp";
import { bind } from "astal";
import { togglePopupWindow } from "../../PopupWindow";
import WifiIcon from "../../../lib/WifiIcon";

export default function Indicators() {
  const speaker = Wp.get_default()?.audio.defaultSpeaker!;

  return (
    <button onClicked={() => togglePopupWindow("panel")}>
      <box spacing={8}>
        {WifiIcon()}
        <icon icon={bind(speaker, "volumeIcon")} />
      </box>
    </button>
  );
}
