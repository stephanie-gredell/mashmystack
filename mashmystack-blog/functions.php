<?php
function mms_scripts() {
    wp_enqueue_style( 'mms-style', get_stylesheet_uri() );
}

add_action( 'wp_enqueue_scripts', 'mms_scripts' )
?>
