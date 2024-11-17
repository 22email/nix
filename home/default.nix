{lib, ...}: {
  imports = [
    ./mksh
    ./misc
    ./foot
    ./hyprland
    ./ags
    ./stylix
    ./git
    ./dev
    ./yazi
    ./zathura
    ./firefox
    ./tmux
  ];

  options = {
    wallpaper = lib.mkOption {
      default = ../wallpapers/fury.jpg;
      type = lib.types.path;
    };

    font = lib.mkOption {
      type = lib.types.str;
    };
  };

  config = {
    wallpaper = ../wallpapers/doodad-oxocarbon.png;
    font = "Iosevka";
  };
}
