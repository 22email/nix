import { togglePopupWindow } from "../../PopupWindow";
export default function NotifCentreButton() {
  return (
    <button
      className={"nc-button"}
      onClicked={() => togglePopupWindow("notif-centre")}
    >
      <label label={""} />
    </button>
  );
}
