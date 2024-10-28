import { Gdk, App, Gtk } from "astal/gtk3";
import Tray from "gi://AstalTray";
import { bind, Variable } from "astal";

export default function SysTray() {
  const tray = Tray.get_default();
  const showSysTray = Variable(false);

  const TrayItems = (
    <revealer
      revealChild={showSysTray()}
      transitionDuration={200}
      transitionType={Gtk.RevealerTransitionType.SLIDE_LEFT}
    >
      <box className="tray" spacing={4}>
        {bind(tray, "items").as((items) =>
          items.map((item) => {
            if (item.iconThemePath) App.add_icons(item.iconThemePath);

            const menu = item.create_menu();
            return (
              <button
                tooltipMarkup={bind(item, "tooltipMarkup")}
                onDestroy={() => menu?.destroy()}
                onClickRelease={(self) => {
                  menu?.popup_at_widget(
                    self,
                    Gdk.Gravity.SOUTH,
                    Gdk.Gravity.NORTH,
                    null,
                  );
                }}
              >
                <icon gIcon={bind(item, "gicon")} />
              </button>
            );
          }),
        )}
      </box>
    </revealer>
  );
  const TrayButton = (
    <button
      className="tray-button"
      onClick={() => showSysTray.set(!showSysTray.get())}
    >
      <icon
        icon="keyboard-hide-symbolic"
        css="font-size: 10px;"
        className={showSysTray((showing) => (showing ? "showing" : ""))}
      />
    </button>
  );

  return (
    <box spacing={8}>
      {TrayButton}
      {TrayItems}
    </box>
  );
}