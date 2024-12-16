import { Gtk, Astal, App, Gdk } from "astal/gtk3";
import { bind } from "astal";
import { WIDTH, NotifMap } from "../notifs/NotifMap";
import AstalNotifd from "gi://AstalNotifd";

function NC() {
  const notifs = new NotifMap(true);
  const notifd = AstalNotifd.get_default();

  const NotifScroll = (
    <scrollable
      name={"notif-scroll"}
      vexpand
      widthRequest={WIDTH}
      hscroll={Gtk.PolicyType.NEVER}
    >
      <box vertical={true} className={"notifications"}>
        {bind(notifs)}
      </box>
    </scrollable>
  );

  const NoNotifs = (
    <centerbox
      vexpand
      widthRequest={WIDTH}
      name={"no-notifs"}
      centerWidget={
        <box
          vertical
          expand={false}
          spacing={8}
          className={"no-notifs"}
          valign={Gtk.Align.CENTER}
        >
          <label label={"No Notifications ..."} />
        </box>
      }
    />
  );

  return (
    <box className={"nc"} vertical={true} heightRequest={500}>
      <centerbox
        className={"nc-header"}
        startWidget={
          <label
            heightRequest={24}
            label={"Notifications"}
            halign={Gtk.Align.START}
          />
        }
        endWidget={
          <button
            className={"clear-button"}
            heightRequest={24}
            widthRequest={24}
            halign={Gtk.Align.END}
            onClick={() => {
              print("hi");

              const notifs = notifd.get_notifications();

              for (const n of notifs) {
                notifd.get_notification(n.id).dismiss();
              }
            }}
          >
            <label label={""} />
          </button>
        }
      />
      <stack
        shown={bind(notifs).as((ns) =>
          ns.length > 0 ? "notif-scroll" : "no-notifs",
        )}
      >
        {NotifScroll}
        {NoNotifs}
      </stack>
    </box>
  );
}

export default function NotifCentre() {
  const anchor = Astal.WindowAnchor.BOTTOM;

  return (
    <window
      name="notif-centre"
      application={App}
      anchor={anchor}
      keymode={Astal.Keymode.ON_DEMAND}
      visible={false}
      onKeyPressEvent={(_, event) => {
        const keyVal = event.get_keyval()[1];
        if (keyVal === Gdk.KEY_Escape) {
          App.toggle_window("notif-centre");
        }
      }}
    >
      <NC />
    </window>
  );
}
