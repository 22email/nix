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
  ];

  options = {
    wallpaper = lib.mkOption {
      default = ../wallpapers/fury.jpg;
      type = lib.types.path;
    };

    theme = lib.mkOption {
      default = "oxocarbon";
      type = lib.types.enum [
        "oxocarbon"
        "far"
        "material-darker"
        "material"
        "oxocarbon"
        "paradise"
      ];
    };

    font = lib.mkOption {
      type = lib.types.str;
    };
  };

  config = {
    wallpaper = ../wallpapers/doodad-oxocarbon.png;
    theme = "paradise";
    font = "Iosevka";
  };
}
