import { Gtk, Astal, App } from "astal/gtk3";
import { PopupWindow } from "../PopupWindow";
import { Speaker, MicToggle } from "./components/Audio";
import NetworkInfo from "./components/NetworkInfo";
import BluetoothInfo from "./components/BluetoothInfo";
import DoNotDisturb from "./components/DoNotDisturb";
import NotifCentre from "./components/NotifCentre";
import Media from "./components/Media";
import Uptime from "./components/Uptime";
import { USER } from "../../shared/constants";

export default function Panel() {
  const anchor =
    Astal.WindowAnchor.TOP |
    Astal.WindowAnchor.BOTTOM |
    Astal.WindowAnchor.RIGHT;

  const Toggles = (
    <box spacing={12} homogeneous>
      <box spacing={12} vertical>
        <BluetoothInfo />
        <DoNotDisturb />
      </box>
      <box spacing={12} vertical>
        <NetworkInfo />
        <MicToggle />
      </box>
    </box>
  );

  return (
    <PopupWindow
      name="panel"
      application={App}
      transition={Gtk.RevealerTransitionType.SLIDE_LEFT}
      anchor={anchor}
      keymode={Astal.Keymode.ON_DEMAND}
    >
      <box className="panel-box" vertical={true}>
        <centerbox
          className={"header"}
          startWidget={<label halign={Gtk.Align.START} label={USER} />}
          heightRequest={24}
          endWidget={<Uptime />}
        />
        <box spacing={12} className={"pb-lower"} vertical>
          {Toggles}
          <Speaker />
          <Media />
          <NotifCentre />
        </box>
      </box>
    </PopupWindow>
  );
}
