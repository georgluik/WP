<?php
// child style enqueue
function onepagerx_styles() {
    $themeVersion = wp_get_theme()->get('Version');
    // Enqueue our style.css with our own version
    wp_enqueue_style('onepagerx-style', get_template_directory_uri() . '/style.css',array(), $themeVersion);
   
}
add_action('wp_enqueue_scripts', 'onepagerx_styles');
?>