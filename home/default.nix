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
    ./nixvim
    ./spicetify
  ];

  options = {
    wallpaper = lib.mkOption {
      default = ../wallpapers/mountains.jpg;
      type = lib.types.path;
    };

    theme = lib.mkOption {
      default = "material-darker";
      type = lib.types.enum [
        "far"
        "material-darker"
        "material"
        "oxocarbon"
        "paradise"
        "test"
        "decay"
        "rose-pine-dawn"
        "yoru"
      ];
    };

    font = lib.mkOption {
      type = lib.types.str;
    };
  };

  config = {
    wallpaper = ../wallpapers/nanmokaken.jpg;
    theme = "rose-pine-dawn";
    font = "Iosevka";
  };
}
