import { Gtk } from "astal/gtk3";
import { Binding } from "astal";

type ToggleProps = {
  title: string;
  clicked(self: Gtk.EventBox): void;
  info: Gtk.Widget;
  className?: string | Binding<string | undefined> | undefined;
};
export default function Toggle(toggleProps: ToggleProps) {
  const { title, clicked, info, className } = toggleProps;
  return (
    <eventbox onClick={clicked} cursor={"pointer"}>
      <centerbox
        vertical
        heightRequest={60}
        className={className}
        startWidget={
          <label
            halign={Gtk.Align.START}
            valign={Gtk.Align.START}
            label={title}
          />
        }
        endWidget={info}
      />
    </eventbox>
  );
}