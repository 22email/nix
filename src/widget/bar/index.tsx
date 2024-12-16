import { App, Astal, Gtk, Gdk } from "astal/gtk3";

import Workspaces from "./components/Workspaces";
import SysTray from "./components/SysTray";
import Clock from "./components/Clock";
import BatteryLevel from "./components/Battery";
import Indicators from "./components/Indicators";

function BarStart() {
  return (
    <box halign={Gtk.Align.START} spacing={8} hexpand={true}>
      <Workspaces />
    </box>
  );
}

function BarEnd() {
  const NotifCentreButton = (
    <button
      className={"nc-button"}
      onClicked={() => App.toggle_window("notif-centre")}
    >
      <label label={""} />
    </button>
  );
  return (
    <box halign={Gtk.Align.END} spacing={8}>
      <SysTray />
      <Clock />
      <Indicators />
      <BatteryLevel />
      {NotifCentreButton}
    </box>
  );
}

export default function Bar(monitor: Gdk.Monitor) {
  const anchor =
    Astal.WindowAnchor.LEFT |
    Astal.WindowAnchor.BOTTOM |
    Astal.WindowAnchor.RIGHT;
  return (
    <window
      name={`bar-${monitor}`}
      application={App}
      className="bar"
      gdkmonitor={monitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={anchor}
      heightRequest={12}
    >
      <centerbox
        className="cbox"
        spacing={8}
        expand={false}
        widthRequest={900}
        halign={Gtk.Align.CENTER}
        startWidget={BarStart()}
        endWidget={BarEnd()}
      ></centerbox>
    </window>
  );
}
