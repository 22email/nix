import { App, Astal, Gtk, Gdk } from "astal/gtk3";

import Workspaces from "./components/Workspaces";
import SysTray from "./components/SysTray";
import Clock from "./components/Clock";
import BatteryLevel from "./components/Battery";
import Indicators from "./components/Indicators";
import NotifCentreButton from "./components/NotifCentreButton";

function BarStart() {
  return (
    <box halign={Gtk.Align.START} spacing={8}>
      <NotifCentreButton />
      <Clock />
    </box>
  );
}

function BarCenter() {
  return (
    <box spacing={8}>
      <Workspaces />
    </box>
  );
}

function BarEnd() {
  return (
    <box halign={Gtk.Align.END} spacing={8}>
      <SysTray />
      <BatteryLevel />
      <Indicators />
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
      marginRight={100}
      marginLeft={100}
      heightRequest={12}
    >
      <centerbox
        className="cbox"
        spacing={8}
        expand
        startWidget={BarStart()}
        centerWidget={BarCenter()}
        endWidget={BarEnd()}
      ></centerbox>
    </window>
  );
}
