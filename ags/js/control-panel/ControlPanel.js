import { PowerBox } from "./PowerBox.js";
import { Speaker, Microphone } from "./Sliders.js";
import { Wifi } from "./WifiWidget.js";
import { Calendar } from "./Calendar.js";
import { PopupWindow } from "../PopupWindow.js";

// It's funny cause I only need 2 boxes lol
const TopBox = () =>
  Widget.Box({
    spacing: 12,
    vertical: true,
    children: [Calendar()],
  });

const MiddleBox = () =>
  Widget.Box({
    spacing: 12,
    vertical: true,
    children: [Speaker(), Microphone(), Wifi()],
  });

const BottomBox = () =>
  Widget.Box({
    spacing: 12,
    children: [PowerBox()],
  });

export const ControlPanel = () =>
  PopupWindow({
    name: "control_panel",
    transition: "slide_right",
    transition_duration: 300,
    anchor: ["bottom", "left"],
    margins: [8],
    child: Widget.Box({
      className: "control-box",
      spacing: 12,
      vertical: true,
      children: [TopBox(), MiddleBox(), BottomBox()],
    }),
  });
