<!DOCTYPE html>
<html>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div class="content_container">
<div class="header_container">
  <h1 class="title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="navbar-brand"><?php bloginfo( 'name' ); ?></a></h1>

  <p class="headline"><strong>Experience different technologies</strong> and see what works well together and what does not. Go outside the box of typical tech stacks. Take the Mash My Stack challenge
  and get a stack to build your app with!</p>

  <a href="https://www.mashmystack.com" class="masher_link"><button class="get_mashup_button">Go to Mash Your Stack</button></a>
</div>
