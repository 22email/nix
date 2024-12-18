import Wp from "gi://AstalWp";
import { bind, Variable } from "astal";
import { NetworkIcon, NetworkName } from "../../../shared/NetworkUtils";
import { Gtk } from "astal/gtk3";

export default function Indicators() {
  const speaker = Wp.get_default()?.audio.defaultSpeaker!;

  const speakerInfo = Variable.derive(
    [bind(speaker, "mute"), bind(speaker, "volume")],
    (mute, volume) => {
      if (mute) {
        return "MUTE";
      }
    },
  );

  return (
    <box className={"indicators"} spacing={8}>
      <eventbox
        onScroll={(_, event) => {
          if (event.delta_y < 0) {
            speaker.volume = Math.min(speaker.volume + 0.03, 1);
          } else if (event.delta_y > 0) {
            speaker.volume = Math.max(speaker.volume - 0.03, 0);
          }
        }}
      >
        <box className={"speaker"}>
          <centerbox
            className={"icon"}
            center_widget={
              <label
                halign={Gtk.Align.CENTER}
                label={bind(speaker, "mute").as((m) => (m ? " " : ""))}
              />
            }
          />
          <label
            label={bind(speaker, "volume").as(
              (v) => ` ${Math.floor(v * 100)}%`,
            )}
            className={"info"}
            widthChars={5}
          />
        </box>
      </eventbox>
      <box className={"network"}>
        <centerbox className={"icon"} centerWidget={NetworkIcon()} />
        {NetworkName()}
      </box>
    </box>
  );
}
