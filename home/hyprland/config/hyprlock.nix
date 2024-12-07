{config, ...}: {
  programs.hyprlock = {
    enable = true;

    settings = {
      general = {
        disable_loading_bar = true;
        grace = 1;
        hide_cursor = true;
        no_fade_in = false;
      };

      background = [
        {
          blur_passes = 2;
          blur_size = 4;
          path = "${config.wallpaper}";
        }
      ];

      input-field = with config.lib.stylix.colors; [
        {
          size = "180, 50";
          rounding = -1;
          position = "0, 0";
          monitor = "";
          dots_center = true;
          dots_size = 0.2;
          dots_spacing = 0.25;
          fade_on_empty = false;
          font_color = "rgb(${base05})";
          inner_color = "rgb(${base00})";
          outer_color = "rgb(${base01})";
          check_color = "rgb(${base09})";
          fail_color = "rgb(${base08})";
          outline_thickness = 2;
          font_family = "Rubik";
          placeholder_text = ''Password...'';
          fail_text = ''Failed to Authenticate'';
        }
      ];
    };
  };
}
