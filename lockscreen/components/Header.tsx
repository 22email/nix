import { Variable, GLib } from "astal";
import { Gtk } from "astal/gtk3";
import { execAsync } from "astal/process";

export default function Header() {
  const time = Variable<string>("").poll(
    1000,
    () => GLib.DateTime.new_now_local().format("%d %b %I:%M %p")!,
  );

  return (
    <centerbox
      className={"header"}
      startWidget={
        <label
          heightRequest={24}
          label={time()}
          onDestroy={() => time.drop()}
          halign={Gtk.Align.START}
        />
      }
      endWidget={
        <button
          onClicked={() => execAsync("systemctl poweroff")}
          can_focus={false}
          className={"poff"}
          heightRequest={24}
          widthRequest={24}
          halign={Gtk.Align.END}
        >
          <label label={""} />
        </button>
      }
    />
  );
}
