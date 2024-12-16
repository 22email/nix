import { App } from "astal/gtk3";
import { WINDOW_NAME } from "../../launcher";

export default function LauncherButton() {
  return (
    <button
      className={"launcher-button"}
      onClicked={() => App.toggle_window(WINDOW_NAME)}
    >
      <icon
        icon={"view-grid-symbolic"}
        css="font-size: 13px; margin-left: 1px;"
      />
    </button>
  );
}
