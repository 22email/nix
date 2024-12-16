import { Variable, GLib } from "astal";

export default function Clock({ format = "%H:%M" }) {
  const time = Variable<string>("").poll(
    1000,
    () => GLib.DateTime.new_now_local().format(format)!,
  );

  return (
    <box className="clock">
      <box className={"icon"}>
        <label label={""} widthChars={4} />
      </box>
      <label className={"info"} onDestroy={() => time.drop()} label={time()} />
    </box>
  );
}
