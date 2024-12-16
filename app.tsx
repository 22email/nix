import { HOME } from "./src/shared/constants";

import { App } from "astal/gtk3";
import Bar from "./src/widget/bar";
import Launcher from "./src/widget/launcher";
import NotificationPopups from "./src/widget/notifs/popups";
import NotifCentre from "./src/widget/notifcentre";

import { writeFile } from "astal/file";
import { exec } from "astal/process";

import barStyle from "inline:./scss/bar.scss";
import notifStyle from "inline:./scss/notif.scss";
import launcherStyle from "inline:./scss/launcher.scss";
import notifCentreStyle from "inline:./scss/notif-centre.scss";
import sharedStyle from "inline:./scss/shared.scss";

const colorsPath = `${HOME}/.config/ags_res/colors.scss`;
const tmpscss = "/tmp/style.scss";
const target = "/tmp/style.css";

// Insanity

writeFile(
  tmpscss,
  `
  @use 'sass:math';
  @import "${colorsPath}";

  ${sharedStyle}
  ${barStyle}
  ${notifCentreStyle}
  ${notifStyle}
  ${launcherStyle}
`,
);

exec(`sass ${tmpscss} ${target}`);

App.start({
  instanceName: "shell",
  icons: `${SRC}/assets/icons`,
  css: target,
  main() {
    App.get_monitors().map(Bar);
    Launcher();
    NotificationPopups();
    NotifCentre();
  },
});
