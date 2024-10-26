import { App, Astal, Gtk } from "astal/gtk3";
import { Variable } from "astal";

import Clock from "./components/Clock";

const time = Variable("").poll(1000, "date");

const boxcss = "margin: 0.2rem 0.8rem";

function BarStart() {
  return (
    <box halign={Gtk.Align.START} css={boxcss} spacing={8}>
      <label label={"My Guy Im clincally insane"}></label>
    </box>
  );
}

function BarCenter() {
  return (
    <box css={boxcss} spacing={8}>
      <label label={"My Guy Im clincally insane"}></label>
    </box>
  );
}

function BarEnd() {
  return (
    <box halign={Gtk.Align.END} css={boxcss} spacing={8}>
      <Clock />
    </box>
  );
}

export default function Bar(monitor = 0) {
  const anchor =
    Astal.WindowAnchor.RIGHT |
    Astal.WindowAnchor.BOTTOM |
    Astal.WindowAnchor.LEFT;
  return (
    <window
      name={`bar-${monitor}`}
      // Important because it allows to toggle windows KTHXBYE
      // Why are you toggling the bar 😂
      application={App}
      className="bar"
      monitor={monitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={anchor}
    >
      <centerbox
        className="cbox"
        startWidget={BarStart()}
        centerWidget={BarCenter()}
        endWidget={BarEnd()}
      ></centerbox>
    </window>
  );
}
