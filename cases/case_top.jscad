function _top_case_walls_extrude__6_6_outline_fn(){
    return new CSG.Path2D([[87.05,-109.5],[87.05,-33.5]]).appendArc([90.5,-30.05],{"radius":3.45,"clockwise":true,"large":false}).appendPoint([204.5,-30.05]).appendArc([207.95,-33.5],{"radius":3.45,"clockwise":true,"large":false}).appendPoint([207.95,-109.5]).appendArc([204.5,-112.95],{"radius":3.45,"clockwise":true,"large":false}).appendPoint([90.5,-112.95]).appendArc([87.05,-109.5],{"radius":3.45,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[88.25,-109.5],[88.25,-33.5]]).appendArc([90.5,-31.25],{"radius":2.25,"clockwise":true,"large":false}).appendPoint([204.5,-31.25]).appendArc([206.75,-33.5],{"radius":2.25,"clockwise":true,"large":false}).appendPoint([206.75,-109.5]).appendArc([204.5,-111.75],{"radius":2.25,"clockwise":true,"large":false}).appendPoint([90.5,-111.75]).appendArc([88.25,-109.5],{"radius":2.25,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, -6.6] });
}


function top_case_inner_plate_extrude__1_6_outline_fn(){
    return new CSG.Path2D([[88.25,-109.5],[88.25,-33.5]]).appendArc([90.5,-31.25],{"radius":2.25,"clockwise":true,"large":false}).appendPoint([204.5,-31.25]).appendArc([206.75,-33.5],{"radius":2.25,"clockwise":true,"large":false}).appendPoint([206.75,-109.5]).appendArc([204.5,-111.75],{"radius":2.25,"clockwise":true,"large":false}).appendPoint([90.5,-111.75]).appendArc([88.25,-109.5],{"radius":2.25,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[188,-50],[202,-50]]).appendPoint([202,-36]).appendPoint([188,-36]).appendPoint([188,-50]).close().innerToCAG()
.union(
    new CSG.Path2D([[188,-69],[202,-69]]).appendPoint([202,-55]).appendPoint([188,-55]).appendPoint([188,-69]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-88],[202,-88]]).appendPoint([202,-74]).appendPoint([188,-74]).appendPoint([188,-88]).close().innerToCAG()
).union(
    new CSG.Path2D([[188,-107],[202,-107]]).appendPoint([202,-93]).appendPoint([188,-93]).appendPoint([188,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-50],[183,-50]]).appendPoint([183,-36]).appendPoint([169,-36]).appendPoint([169,-50]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-69],[183,-69]]).appendPoint([183,-55]).appendPoint([169,-55]).appendPoint([169,-69]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-88],[183,-88]]).appendPoint([183,-74]).appendPoint([169,-74]).appendPoint([169,-88]).close().innerToCAG()
).union(
    new CSG.Path2D([[169,-107],[183,-107]]).appendPoint([183,-93]).appendPoint([169,-93]).appendPoint([169,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-50],[164,-50]]).appendPoint([164,-36]).appendPoint([150,-36]).appendPoint([150,-50]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-69],[164,-69]]).appendPoint([164,-55]).appendPoint([150,-55]).appendPoint([150,-69]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-88],[164,-88]]).appendPoint([164,-74]).appendPoint([150,-74]).appendPoint([150,-88]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-107],[164,-107]]).appendPoint([164,-93]).appendPoint([150,-93]).appendPoint([150,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-50],[145,-50]]).appendPoint([145,-36]).appendPoint([131,-36]).appendPoint([131,-50]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-69],[145,-69]]).appendPoint([145,-55]).appendPoint([131,-55]).appendPoint([131,-69]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-88],[145,-88]]).appendPoint([145,-74]).appendPoint([131,-74]).appendPoint([131,-88]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-107],[145,-107]]).appendPoint([145,-93]).appendPoint([131,-93]).appendPoint([131,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-50],[126,-50]]).appendPoint([126,-36]).appendPoint([112,-36]).appendPoint([112,-50]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-69],[126,-69]]).appendPoint([126,-55]).appendPoint([112,-55]).appendPoint([112,-69]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-88],[126,-88]]).appendPoint([126,-74]).appendPoint([112,-74]).appendPoint([112,-88]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-107],[126,-107]]).appendPoint([126,-93]).appendPoint([112,-93]).appendPoint([112,-107]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-50],[107,-50]]).appendPoint([107,-36]).appendPoint([93,-36]).appendPoint([93,-50]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-69],[107,-69]]).appendPoint([107,-55]).appendPoint([93,-55]).appendPoint([93,-69]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-88],[107,-88]]).appendPoint([107,-74]).appendPoint([93,-74]).appendPoint([93,-88]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-107],[107,-107]]).appendPoint([107,-93]).appendPoint([93,-93]).appendPoint([93,-107]).close().innerToCAG()
)).extrude({ offset: [0, 0, -1.6] });
}




                function case_top_case_fn() {
                    

                // creating part 0 of case case_top
                let case_top__part_0 = _top_case_walls_extrude__6_6_outline_fn();

                // make sure that rotations are relative
                let case_top__part_0_bounds = case_top__part_0.getBounds();
                let case_top__part_0_x = case_top__part_0_bounds[0].x + (case_top__part_0_bounds[1].x - case_top__part_0_bounds[0].x) / 2
                let case_top__part_0_y = case_top__part_0_bounds[0].y + (case_top__part_0_bounds[1].y - case_top__part_0_bounds[0].y) / 2
                case_top__part_0 = translate([-case_top__part_0_x, -case_top__part_0_y, 0], case_top__part_0);
                case_top__part_0 = rotate([0,0,0], case_top__part_0);
                case_top__part_0 = translate([case_top__part_0_x, case_top__part_0_y, 0], case_top__part_0);

                case_top__part_0 = translate([0,0,0], case_top__part_0);
                let result = case_top__part_0;
                
            

                // creating part 1 of case case_top
                let case_top__part_1 = top_case_inner_plate_extrude__1_6_outline_fn();

                // make sure that rotations are relative
                let case_top__part_1_bounds = case_top__part_1.getBounds();
                let case_top__part_1_x = case_top__part_1_bounds[0].x + (case_top__part_1_bounds[1].x - case_top__part_1_bounds[0].x) / 2
                let case_top__part_1_y = case_top__part_1_bounds[0].y + (case_top__part_1_bounds[1].y - case_top__part_1_bounds[0].y) / 2
                case_top__part_1 = translate([-case_top__part_1_x, -case_top__part_1_y, 0], case_top__part_1);
                case_top__part_1 = rotate([0,0,0], case_top__part_1);
                case_top__part_1 = translate([case_top__part_1_x, case_top__part_1_y, 0], case_top__part_1);

                case_top__part_1 = translate([0,0,0], case_top__part_1);
                result = result.union(case_top__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_top_case_fn();
            }

        