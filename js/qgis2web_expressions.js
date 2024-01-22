// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_Zbiornikiwodne_1rule0_eval_expression(context) {
    // fclass  IN ('dock', 'reservoir', 'riverbank', 'water')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'dock', 'reservoir', 'riverbank', 'water'".indexOf(feature.properties['fclass'] ) > -1 ;
    } else {
        return "'dock', 'reservoir', 'riverbank', 'water'".indexOf(feature['fclass'] ) > -1 ;
    }
}


function exp_Zbiornikiwodne_1rule1_eval_expression(context) {
    // fclass = 'wetland'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['fclass']  == 'wetland');
    } else {
        return (feature['fclass']  == 'wetland');
    }
}


function exp_Zbiornikiwodne_1rule0_eval_expression(context) {
    // fclass  IN ('dock', 'reservoir', 'riverbank', 'water')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'dock', 'reservoir', 'riverbank', 'water'".indexOf(feature.properties['fclass'] ) > -1 ;
    } else {
        return "'dock', 'reservoir', 'riverbank', 'water'".indexOf(feature['fclass'] ) > -1 ;
    }
}


function exp_Zbiornikiwodne_1rule1_eval_expression(context) {
    // fclass = 'wetland'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['fclass']  == 'wetland');
    } else {
        return (feature['fclass']  == 'wetland');
    }
}


function exp_Natura_3rule0_eval_expression(context) {
    // category  IN ('aquarium', 'water', 'spring', 'fountain')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'aquarium', 'water', 'spring', 'fountain'".indexOf(feature.properties['category'] ) > -1 ;
    } else {
        return "'aquarium', 'water', 'spring', 'fountain'".indexOf(feature['category'] ) > -1 ;
    }
}


function exp_Natura_3rule1_eval_expression(context) {
    // category = 'beach'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'beach');
    } else {
        return (feature['category']  == 'beach');
    }
}


function exp_Natura_3rule2_eval_expression(context) {
    // category = 'cave_entrance'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'cave_entrance');
    } else {
        return (feature['category']  == 'cave_entrance');
    }
}


function exp_Natura_3rule3_eval_expression(context) {
    // category  IN ('nature_reserve', 'park')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'nature_reserve', 'park'".indexOf(feature.properties['category'] ) > -1 ;
    } else {
        return "'nature_reserve', 'park'".indexOf(feature['category'] ) > -1 ;
    }
}


function exp_Natura_3rule4_eval_expression(context) {
    // category = 'peak'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'peak');
    } else {
        return (feature['category']  == 'peak');
    }
}


function exp_Natura_3rule5_eval_expression(context) {
    // category = 'picnic_site'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'picnic_site');
    } else {
        return (feature['category']  == 'picnic_site');
    }
}


function exp_Natura_3rule6_eval_expression(context) {
    // category = 'wilderness_hut'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'wilderness_hut');
    } else {
        return (feature['category']  == 'wilderness_hut');
    }
}


function exp_Natura_3rule7_eval_expression(context) {
    // category = 'zoo'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'zoo');
    } else {
        return (feature['category']  == 'zoo');
    }
}


function exp_SchronienieiZakwaterowanie_4rule0_eval_expression(context) {
    // category = 'camp_site'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'camp_site');
    } else {
        return (feature['category']  == 'camp_site');
    }
}


function exp_SchronienieiZakwaterowanie_4rule1_eval_expression(context) {
    // category = 'caravan_site'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'caravan_site');
    } else {
        return (feature['category']  == 'caravan_site');
    }
}


function exp_SchronienieiZakwaterowanie_4rule2_eval_expression(context) {
    // category  IN ('motel', 'hotel', 'hostel', 'guest_house', 'chalet', 'alpine_hut')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'motel', 'hotel', 'hostel', 'guest_house', 'chalet', 'alpine_hut'".indexOf(feature.properties['category'] ) > -1 ;
    } else {
        return "'motel', 'hotel', 'hostel', 'guest_house', 'chalet', 'alpine_hut'".indexOf(feature['category'] ) > -1 ;
    }
}


function exp_SchronienieiZakwaterowanie_4rule3_eval_expression(context) {
    // category = 'shelter'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'shelter');
    } else {
        return (feature['category']  == 'shelter');
    }
}


function exp_Inne_5rule0_eval_expression(context) {
    // category = 'bench'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'bench');
    } else {
        return (feature['category']  == 'bench');
    }
}


function exp_Inne_5rule1_eval_expression(context) {
    // category  IN ('building', 'protected_building', 'tower', 'mill')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'building', 'protected_building', 'tower', 'mill'".indexOf(feature.properties['category'] ) > -1 ;
    } else {
        return "'building', 'protected_building', 'tower', 'mill'".indexOf(feature['category'] ) > -1 ;
    }
}


function exp_Inne_5rule2_eval_expression(context) {
    // category  IN ('hunting_lodge', 'game_feeding;shelter')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'hunting_lodge', 'game_feeding;shelter'".indexOf(feature.properties['category'] ) > -1 ;
    } else {
        return "'hunting_lodge', 'game_feeding;shelter'".indexOf(feature['category'] ) > -1 ;
    }
}


function exp_Inne_5rule3_eval_expression(context) {
    // category = 'information'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'information');
    } else {
        return (feature['category']  == 'information');
    }
}


function exp_Inne_5rule4_eval_expression(context) {
    // category = 'pillory'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'pillory');
    } else {
        return (feature['category']  == 'pillory');
    }
}


function exp_Inne_5rule5_eval_expression(context) {
    // category  IN ('cemetery', 'chapel', 'church', 'manor', 'place_of_worship', 'wayside_chapel', 'wayside_cross', 'wayside_shrine')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'cemetery', 'chapel', 'church', 'manor', 'place_of_worship', 'wayside_chapel', 'wayside_cross', 'wayside_shrine'".indexOf(feature.properties['category'] ) > -1 ;
    } else {
        return "'cemetery', 'chapel', 'church', 'manor', 'place_of_worship', 'wayside_chapel', 'wayside_cross', 'wayside_shrine'".indexOf(feature['category'] ) > -1 ;
    }
}


function exp_Inne_5rule6_eval_expression(context) {
    // category = 'theme_park'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'theme_park');
    } else {
        return (feature['category']  == 'theme_park');
    }
}


function exp_Inne_6rule0_eval_expression(context) {
    // category = 'cemetery'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'cemetery');
    } else {
        return (feature['category']  == 'cemetery');
    }
}


function exp_Inne_6rule1_eval_expression(context) {
    // category = 'theme_park'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'theme_park');
    } else {
        return (feature['category']  == 'theme_park');
    }
}


function exp_Odpoczynek_7rule0_eval_expression(context) {
    // category = 'cafe'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'cafe');
    } else {
        return (feature['category']  == 'cafe');
    }
}


function exp_Odpoczynek_7rule1_eval_expression(context) {
    // category = 'drinking_water'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'drinking_water');
    } else {
        return (feature['category']  == 'drinking_water');
    }
}


function exp_Odpoczynek_7rule2_eval_expression(context) {
    // category = 'restaurant'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'restaurant');
    } else {
        return (feature['category']  == 'restaurant');
    }
}


function exp_Odpoczynek_7rule3_eval_expression(context) {
    // category = 'toilets'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'toilets');
    } else {
        return (feature['category']  == 'toilets');
    }
}


function exp_Sztuka_8rule0_eval_expression(context) {
    // tourism = 'attraction'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['tourism']  == 'attraction');
    } else {
        return (feature['tourism']  == 'attraction');
    }
}


function exp_Sztuka_8rule1_eval_expression(context) {
    // tourism = 'gallery'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['tourism']  == 'gallery');
    } else {
        return (feature['tourism']  == 'gallery');
    }
}


function exp_Sztuka_8rule2_eval_expression(context) {
    // tourism = 'viewpoint'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['tourism']  == 'viewpoint');
    } else {
        return (feature['tourism']  == 'viewpoint');
    }
}


function exp_Sztuka_8rule3_eval_expression(context) {
    // tourism = 'artwork'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['tourism']  == 'artwork');
    } else {
        return (feature['tourism']  == 'artwork');
    }
}


function exp_MiejscaHistoryczne_9rule0_eval_expression(context) {
    // category = 'archaeological_site'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'archaeological_site');
    } else {
        return (feature['category']  == 'archaeological_site');
    }
}


function exp_MiejscaHistoryczne_9rule1_eval_expression(context) {
    // category = 'museum'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'museum');
    } else {
        return (feature['category']  == 'museum');
    }
}


function exp_MiejscaHistoryczne_9rule2_eval_expression(context) {
    // category = 'palace'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'palace');
    } else {
        return (feature['category']  == 'palace');
    }
}


function exp_MiejscaHistoryczne_9rule3_eval_expression(context) {
    // category  IN ('bomb_crater', 'battlefield')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'bomb_crater', 'battlefield'".indexOf(feature.properties['category'] ) > -1 ;
    } else {
        return "'bomb_crater', 'battlefield'".indexOf(feature['category'] ) > -1 ;
    }
}


function exp_MiejscaHistoryczne_9rule4_eval_expression(context) {
    // category  IN ('citywalls', 'city_gate', 'gate', 'fort', 'ruins', 'castle')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'citywalls', 'city_gate', 'gate', 'fort', 'ruins', 'castle'".indexOf(feature.properties['category'] ) > -1 ;
    } else {
        return "'citywalls', 'city_gate', 'gate', 'fort', 'ruins', 'castle'".indexOf(feature['category'] ) > -1 ;
    }
}


function exp_MiejscaHistoryczne_9rule5_eval_expression(context) {
    // category  IN ('heritage', 'monument', 'tomb', 'memorial')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'heritage', 'monument', 'tomb', 'memorial'".indexOf(feature.properties['category'] ) > -1 ;
    } else {
        return "'heritage', 'monument', 'tomb', 'memorial'".indexOf(feature['category'] ) > -1 ;
    }
}


function exp_MiejscaHistoryczne_10rule0_eval_expression(context) {
    // category = 'archaeological_site'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'archaeological_site');
    } else {
        return (feature['category']  == 'archaeological_site');
    }
}


function exp_MiejscaHistoryczne_10rule1_eval_expression(context) {
    // category = 'bomb_crater'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['category']  == 'bomb_crater');
    } else {
        return (feature['category']  == 'bomb_crater');
    }
}


function exp_MiejscaHistoryczne_10rule2_eval_expression(context) {
    // category  IN ('ruins', 'citywalls', 'city_gate', 'castle', 'fort')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'ruins', 'citywalls', 'city_gate', 'castle', 'fort'".indexOf(feature.properties['category'] ) > -1 ;
    } else {
        return "'ruins', 'citywalls', 'city_gate', 'castle', 'fort'".indexOf(feature['category'] ) > -1 ;
    }
}


function exp_MiejscaHistoryczne_10rule3_eval_expression(context) {
    // category  IN ('tomb', 'memorial', 'monument', 'heritage')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'tomb', 'memorial', 'monument', 'heritage'".indexOf(feature.properties['category'] ) > -1 ;
    } else {
        return "'tomb', 'memorial', 'monument', 'heritage'".indexOf(feature['category'] ) > -1 ;
    }
}