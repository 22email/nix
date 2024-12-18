import { execAsync } from "astal/process";
import { Gtk, Widget } from "astal/gtk3";
import { PopupWindow } from "../PopupWindow";
import { Astal } from "astal/gtk3";

type PowerButtonProps = Widget.ButtonProps & { cmd: string; desc: string };
function PowerButton({ cmd, desc, ...rest }: PowerButtonProps) {
  return (
    <button
      onClicked={() => execAsync(cmd)}
      heightRequest={24}
      widthRequest={24}
      {...rest}
    >
      <label label={desc} hexpand halign={Gtk.Align.START} />
    </button>
  );
}

export default function PowerMenu() {
  const anchor = Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.RIGHT;

  return (
    <PopupWindow
      name="power-menu"
      anchor={anchor}
      marginRight={88}
      transition={Gtk.RevealerTransitionType.SLIDE_UP}
      keymode={Astal.Keymode.ON_DEMAND}
    >
      <box vertical spacing={4} className={"pm"}>
        <PowerButton
          cmd={`ags run ${SRC}/lockscreen`}
          desc="Lock"
        />
        <PowerButton
          cmd="systemctl reboot"
          desc="Reboot"
        />
        <PowerButton
          cmd="systemctl poweroff"
          desc="Power Off"
        />
      </box>
    </PopupWindow>
  );
}
