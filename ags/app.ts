import { App } from "astal/gtk3";
import Bar from "./src/widget/bar";

import { writeFile } from "astal/file";
import { exec } from "astal/process";

// So there's got to be a better way, right?
import barStyle from "inline:./scss/bar.scss";
import notifStyle from "inline:./scss/notif.scss";
import panelStyle from "inline:./scss/panel.scss";
import launcherStyle from "inline:./scss/launcher.scss";

import { HOME } from "./src/lib/constants";
const colorsPath = `${HOME}/.config/ags_res/colors.scss`;
const tmpscss = "/tmp/style.scss";
const target = "/tmp/style.css";

// My guy I am clinically insane.
writeFile(
  tmpscss,
  `
  @import "${colorsPath}";
  ${barStyle}
  ${notifStyle}
  ${panelStyle}
  ${launcherStyle}
`,
);

exec(`sass ${tmpscss} ${target}`);

App.start({
  css: target,
  main() {
    Bar();
  },
});
