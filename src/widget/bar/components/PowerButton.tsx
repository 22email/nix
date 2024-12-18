import { togglePopupWindow } from "../../PopupWindow";

export default function PowerButton() {
  return (
    <button
      className="power-button"
      onClicked={() => togglePopupWindow("power-menu")}
    >
      <label label={""} />
    </button>
  );
}
