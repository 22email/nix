import Network from "gi://AstalNetwork";
import { bind } from "astal";
import { Gtk } from "astal/gtk3";

const network = Network.get_default();
const { wifi } = network;

export function NetworkIcon() {
  return bind(network, "primary").as((primary) => {
    switch (primary) {
      case Network.Primary.WIFI:
        return <label label={""} halign={Gtk.Align.CENTER} />;
      case Network.Primary.WIRED:
        return (
          <label
            label={""}
            halign={Gtk.Align.CENTER}
            css={"margin-left: 1px;"}
          />
        );
      default:
        return <label label={""} halign={Gtk.Align.CENTER} />;
    }
  });
}

export function NetworkName() {
  return bind(network, "primary").as((primary) => {
    switch (primary) {
      case Network.Primary.WIFI:
        return (
          <label
            label={bind(wifi, "ssid")}
            className={"info"}
            widthChars={7}
            max_width_chars={7}
            truncate
          />
        );
      case Network.Primary.WIRED:
        return (
          <label
            className={"info"}
            label={"wired"}
            widthChars={7}
            max_width_chars={7}
            truncate
          />
        );
      default:
        return (
          <label
            className={"info"}
            label={"unknown"}
            widthChars={7}
            max_width_chars={7}
            truncate
          />
        );
    }
  });
}
