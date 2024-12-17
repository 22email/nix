import { App } from "astal/gtk3";
import Bar from "./src/widget/bar";
import Launcher from "./src/widget/launcher";
import NotificationPopups from "./src/widget/notifs/popups";
import NotifCentre from "./src/widget/notifcentre";

import { togglePopupWindow } from "./src/widget/PopupWindow";
import { exec } from "astal/process";

const style = `${SRC}/style.scss`;
const target = "/tmp/style.css";

exec(`sass ${style} ${target}`);

exec(`sass ${style} ${target}`);

App.start({
  instanceName: "shell",
  icons: `${SRC}/assets/icons`,
  css: target,
  requestHandler(req, res) {
    const [cmd, ...args] = req.split(" ");
    if (cmd == "toggle-popup") {
      togglePopupWindow(args[0]);
      res("");
    }
  },

  main() {
    App.get_monitors().map(Bar);
    Launcher();
    NotificationPopups();
    NotifCentre();
  },
});
