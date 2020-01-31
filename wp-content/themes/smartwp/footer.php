<?php if ( ! defined( 'ABSPATH' ) ) :
    exit; // Exit if accessed directly
endif; ?>
 <footer class="footer-section footer-multi-wrapper">
   
    <?php if (is_active_sidebar('footer-sidebar' )): ?>
        <div class="container">
            <div class="row">
                <div class="sidebar-wrapper footer-sidebar clearfix text-left" role="complementary">
                    <?php dynamic_sidebar('footer-sidebar' );?>
                </div>
            </div>
        </div> <!-- .container -->
    <?php endif; ?>
    
    <div class="footer-copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-left">
                    <div class="copyright ">
                        &copy; <?php esc_html_e( 'Copyright by ', 'smartwp' ); ?> <a href="<?php echo esc_url( home_url() ); ?>"><?php echo bloginfo( 'name ' ); ?></a> <?php echo esc_html( date_i18n( __( 'Y ', 'smartwp' ) ) ); ?>
                    </div> <!-- .copyright -->
                </div> <!-- .col-# -->
                <div class="col-md-6 text-right">
                	<div class="copyright">
                        <h2><?php esc_html__( 'powered by ', 'smartwp' ); ?><a href="https://smartsoftcode.com"><?php esc_html_e( 'SmartSoftCode', 'smartwp' ); ?></a></h2>
                    </div> <!-- .copyright -->
                </div>
            </div> <!-- .row -->
        </div> <!-- .container -->
    </div> <!-- .footer-copyright -->
</footer> <!-- .footer-section -->
 <?php wp_footer(); ?>
</body>
</html>