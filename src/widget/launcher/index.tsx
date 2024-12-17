import { App, Astal, Gtk, Gdk } from "astal/gtk3";
import Apps from "gi://AstalApps";
import { PopupWindow, togglePopupWindow } from "../PopupWindow";

export const WINDOW_NAME = "app-launcher";

function ApplicationItem(application: Apps.Application) {
  return (
    <button
      className="app-item"
      heightRequest={32}
      onClicked={() => {
        togglePopupWindow(WINDOW_NAME);
        application.launch();
      }}
    >
      <label
        className="title"
        label={application.name}
        valign={Gtk.Align.CENTER}
        halign={Gtk.Align.START}
        hexpand
      ></label>
    </button>
  );
}

type InnerProps = { width: number; height: number; spacing: number };

function InnerLauncher({ width, height, spacing }: InnerProps) {
  const apps = Apps.Apps.new();

  const applications = apps.fuzzy_query("");
  const applicationBtns = applications.map(ApplicationItem);

  const applicationMap: Map<Apps.Application, Gtk.Widget> = new Map();

  for (let i = 0; i < applications.length; i++) {
    applicationMap.set(applications[i], applicationBtns[i]);
  }

  const List = (
    <box vertical={true} spacing={spacing}>
      {applicationBtns}
    </box>
  );

  function launch() {
    for (const application of applicationMap.keys()) {
      if (applicationMap.get(application)?.visible) {
        togglePopupWindow(WINDOW_NAME);
        application.launch();
        return;
      }
    }
  }

  const Search = (
    <entry
      className="search-entry"
      heightRequest={32}
      hexpand={true}
      onActivate={() => launch()}
      onChanged={(self) => {
        for (const application of applicationMap.keys()) {
          if (apps.fuzzy_score(self.text, application) > apps.min_score) {
            applicationMap.get(application)?.set_visible(true);
          } else {
            applicationMap.get(application)?.set_visible(false);
          }
        }
      }}
    />
  );

  App.connect("window-toggled", (_, win) => {
    if (win.name === WINDOW_NAME) {
      (Search as Gtk.Entry).set_text("");
      (Search as Gtk.Entry).grab_focus();
    }
  });

  return (
    <box className={"launcher-box"} vertical={true}>
      <box vertical={true} spacing={spacing} className={"apps"}>
        {Search}
        <scrollable
          widthRequest={width}
          heightRequest={height}
          hscroll={Gtk.PolicyType.NEVER}
          child={List}
        ></scrollable>
      </box>
    </box>
  );
}

export default function Launcher() {
  return (
    <PopupWindow
      name={WINDOW_NAME}
      transition={Gtk.RevealerTransitionType.CROSSFADE}
      keymode={Astal.Keymode.EXCLUSIVE}
      monitor={0}
      onKeyPressEvent={(_, event) => {
        const keyVal = event.get_keyval()[1];
        if (keyVal === Gdk.KEY_Escape) {
          App.toggle_window(WINDOW_NAME);
        }
      }}
    >
      <box>
        <InnerLauncher width={256} height={280} spacing={8} />
      </box>
    </PopupWindow>
  );
}
