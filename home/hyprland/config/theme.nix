{ pkgs, ... }:

{
	wayland.windowManager.hyprland = {
		settings = {
			exec = [ "hyprctl setcursor Bibata-Modern-Ice 20" ];
			general = {
			    gaps_in = "4";
			    gaps_out =  "16";
			    border_size = "2";
			    "col.inactive_border" = "rgba(111115ff)";
			    "col.active_border" = "rgba(111115ff)";
			    layout = "dwindle";
			    resize_on_border = "true";
			};
			decoration = {
			    rounding = "12";
			    drop_shadow = "true";
			    shadow_range = "12";
			    "col.shadow" = "rgba(020202ee)";
			    shadow_render_power = "16";
			    inactive_opacity = "0.94";

			    blur = {
				 enabled = "yes";
				 size = "3";
				 passes = "4";
				 new_optimizations = "on";
				 ignore_opacity = "on";
				 xray = "false";
			    };
			};
		};
	};

}
