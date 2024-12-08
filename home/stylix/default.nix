{
  pkgs,
  config,
  ...
}: {
  stylix = {
    enable = true;

    # Placeholder (literally doesn't matter)
    image = config.wallpaper;

    base16Scheme = ./themes/${config.theme}.yaml;
    polarity = "light";

    cursor = {
      name = "phinger-cursors-light";
      package = pkgs.phinger-cursors;
      size = 24;
    };

    targets = {
      hyprland.enable = false;
      neovim.enable = false;
      nixvim.enable = false;
      spicetify.enable = false;
      fzf.enable = false;
      tmux.enable = false;
      hyprlock.enable = false;
      gtk.extraCss = with config.lib.stylix.colors; ''
        @define-color accent_color #${base0D};
        @define-color accent_bg_color #${base0D};
      '';
    };

    fonts = {
      monospace = {
        name = "Iosevka Nerd Font Propo";
        package = pkgs.nerd-fonts.iosevka;
      };
      sansSerif = {
        name = "rubik";
        package = pkgs.rubik;
      };
    };
  };

  gtk = {
    enable = true;
    iconTheme = {
      name = "Papirus-Light";
      package = pkgs.papirus-icon-theme.override {color = "blue";};
    };
  };

  qt = {
    enable = true;
  };
}
