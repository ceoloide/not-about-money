function _bottom_case_walls_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[87.05,-109.5],[87.05,-33.5]]).appendArc([90.5,-30.05],{"radius":3.45,"clockwise":true,"large":false}).appendPoint([204.5,-30.05]).appendArc([207.95,-33.5],{"radius":3.45,"clockwise":true,"large":false}).appendPoint([207.95,-109.5]).appendArc([204.5,-112.95],{"radius":3.45,"clockwise":true,"large":false}).appendPoint([90.5,-112.95]).appendArc([87.05,-109.5],{"radius":3.45,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[88.25,-109.5],[88.25,-33.5]]).appendArc([90.5,-31.25],{"radius":2.25,"clockwise":true,"large":false}).appendPoint([204.5,-31.25]).appendArc([206.75,-33.5],{"radius":2.25,"clockwise":true,"large":false}).appendPoint([206.75,-109.5]).appendArc([204.5,-111.75],{"radius":2.25,"clockwise":true,"large":false}).appendPoint([90.5,-111.75]).appendArc([88.25,-109.5],{"radius":2.25,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
}


function _bottom_case_outer_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[87.05,-109.5],[87.05,-33.5]]).appendArc([90.5,-30.05],{"radius":3.45,"clockwise":true,"large":false}).appendPoint([204.5,-30.05]).appendArc([207.95,-33.5],{"radius":3.45,"clockwise":true,"large":false}).appendPoint([207.95,-109.5]).appendArc([204.5,-112.95],{"radius":3.45,"clockwise":true,"large":false}).appendPoint([90.5,-112.95]).appendArc([87.05,-109.5],{"radius":3.45,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _screws_extrude_1_outline_fn(){
    return CAG.circle({"center":[147.5,-71.5],"radius":1.1})
.union(
    CAG.circle({"center":[109.5,-90.5],"radius":1.1})
).union(
    CAG.circle({"center":[185.5,-90.5],"radius":1.1})
).union(
    CAG.circle({"center":[185.5,-52.5],"radius":1.1})
).union(
    CAG.circle({"center":[128.5,-52.5],"radius":1.1})
).extrude({ offset: [0, 0, 1] });
}




                function bottom_tray_case_fn() {
                    

                // creating part 0 of case bottom_tray
                let bottom_tray__part_0 = _bottom_case_walls_extrude_6_6_outline_fn();

                // make sure that rotations are relative
                let bottom_tray__part_0_bounds = bottom_tray__part_0.getBounds();
                let bottom_tray__part_0_x = bottom_tray__part_0_bounds[0].x + (bottom_tray__part_0_bounds[1].x - bottom_tray__part_0_bounds[0].x) / 2
                let bottom_tray__part_0_y = bottom_tray__part_0_bounds[0].y + (bottom_tray__part_0_bounds[1].y - bottom_tray__part_0_bounds[0].y) / 2
                bottom_tray__part_0 = translate([-bottom_tray__part_0_x, -bottom_tray__part_0_y, 0], bottom_tray__part_0);
                bottom_tray__part_0 = rotate([0,0,0], bottom_tray__part_0);
                bottom_tray__part_0 = translate([bottom_tray__part_0_x, bottom_tray__part_0_y, 0], bottom_tray__part_0);

                bottom_tray__part_0 = translate([-75,0,0], bottom_tray__part_0);
                let result = bottom_tray__part_0;
                
            

                // creating part 1 of case bottom_tray
                let bottom_tray__part_1 = _bottom_case_outer_outline_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom_tray__part_1_bounds = bottom_tray__part_1.getBounds();
                let bottom_tray__part_1_x = bottom_tray__part_1_bounds[0].x + (bottom_tray__part_1_bounds[1].x - bottom_tray__part_1_bounds[0].x) / 2
                let bottom_tray__part_1_y = bottom_tray__part_1_bounds[0].y + (bottom_tray__part_1_bounds[1].y - bottom_tray__part_1_bounds[0].y) / 2
                bottom_tray__part_1 = translate([-bottom_tray__part_1_x, -bottom_tray__part_1_y, 0], bottom_tray__part_1);
                bottom_tray__part_1 = rotate([0,0,0], bottom_tray__part_1);
                bottom_tray__part_1 = translate([bottom_tray__part_1_x, bottom_tray__part_1_y, 0], bottom_tray__part_1);

                bottom_tray__part_1 = translate([-75,0,0], bottom_tray__part_1);
                result = result.union(bottom_tray__part_1);
                
            

                // creating part 2 of case bottom_tray
                let bottom_tray__part_2 = _screws_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom_tray__part_2_bounds = bottom_tray__part_2.getBounds();
                let bottom_tray__part_2_x = bottom_tray__part_2_bounds[0].x + (bottom_tray__part_2_bounds[1].x - bottom_tray__part_2_bounds[0].x) / 2
                let bottom_tray__part_2_y = bottom_tray__part_2_bounds[0].y + (bottom_tray__part_2_bounds[1].y - bottom_tray__part_2_bounds[0].y) / 2
                bottom_tray__part_2 = translate([-bottom_tray__part_2_x, -bottom_tray__part_2_y, 0], bottom_tray__part_2);
                bottom_tray__part_2 = rotate([0,0,0], bottom_tray__part_2);
                bottom_tray__part_2 = translate([bottom_tray__part_2_x, bottom_tray__part_2_y, 0], bottom_tray__part_2);

                bottom_tray__part_2 = translate([-75,0,0], bottom_tray__part_2);
                result = result.subtract(bottom_tray__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_tray_case_fn();
            }

        