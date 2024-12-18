import { Variable, GLib } from "astal";

export default function Clock({ format = "%d %b %I:%M %p" }) {
  const time = Variable<string>("").poll(
    1000,
    () => GLib.DateTime.new_now_local().format(format)!,
  );

  return (
    <box className="clock">
      <label  onDestroy={() => time.drop()} label={time()} />
    </box>
  );
}
