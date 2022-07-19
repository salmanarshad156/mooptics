<!DOCTYPE html>
<html class="html" lang="en-US">
<?php
include_once 'head.php'
?>

<style>
    #site-header.transparent-header {
        top: 45px;
    }
    @media screen and (max-width: 768px){
        #site-header.transparent-header {
            top: 0;
        }
    }
    input{
        margin-bottom: 16px;
        border-color: #e5e5e5 !important;

    }
</style>


<link rel='stylesheet' href='assets/css/css1/post-166.css' media='all'/>


<body class="page-template-default page page-id-147 wp-custom-logo wp-embed-responsive mt-147 mt-page-strainless-optics no-isotope no-lightbox no-fitvids no-scroll-top no-sidr no-carousel no-matchheight oceanwp-theme sidebar-mobile has-transparent-header no-header-border default-breakpoint content-full-screen has-topbar page-header-disabled has-breadcrumbs elementor-default elementor-kit-2908 elementor-page elementor-page-147">
<div id="outer-wrap" class="site clr">

    <a class="skip-link screen-reader-text" href="#main">Skip to content</a>


    <div id="wrap" class="clr">


        <?php
        include_once 'navbar.php'
        ?>


        <main id="main" class="site-main clr" role="main">


            <div id="content-wrap" class="container clr">


                <div id="primary" class="content-area clr">


                    <div id="content" class="site-content clr">


                        <article class="single-page-article clr">


                            <div class="entry clr" itemprop="text">


                                <div style="padding: 130px 20px 30px; max-width: 1200px; margin: auto ">
                                    <h1 style="text-align: center">TRACK YOUR ORDER</h1>

                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3a57dbc"
                                         data-id="3a57dbc"
                                         data-element_type="column" style="margin: auto">
                                        <div class="elementor-column-wrap elementor-element-populated">
                                            <div class="elementor-widget-wrap">
                                                <div class="elementor-element elementor-element-44e92ed9 elementor-button-align-start elementor-widget elementor-widget-form"
                                                     data-id="44e92ed9"
                                                     data-element_type="widget"
                                                     data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}"
                                                     data-widget_type="form.default">
                                                    <div class="elementor-widget-container">
                                                        <form class="elementor-form"
                                                              action="" method="post">
                                                            <div class="elementor-form-fields-wrapper elementor-labels-">
                                                                <div class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required">
                                                                    <label for="form-field-name"
                                                                           class="elementor-field-label elementor-screen-only">
                                                                        Order No </label>
                                                                    <input size="1"
                                                                           type="number"
                                                                           name="name"
                                                                           id="form-field-name"
                                                                           class="elementor-field elementor-size-sm  elementor-field-textual"
                                                                           placeholder="Order No"
                                                                           required="required"
                                                                           aria-required="true">
                                                                </div>
                                                                <div class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_1 elementor-col-100 elementor-field-required">
                                                                    <label for="form-field-field_1"
                                                                           class="elementor-field-label elementor-screen-only">
                                                                        Delivery Post Code </label>
                                                                    <input size="1"
                                                                           type="text"
                                                                           name="phone"
                                                                           id="form-field-field_1"
                                                                           class="elementor-field elementor-size-sm  elementor-field-textual"
                                                                           placeholder="Delivery Post Code"
                                                                           required="required"
                                                                           aria-required="true">
                                                                </div>

                                                                <div class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                                                    <button type="submit"
                                                                            class="elementor-button elementor-size-sm" style="margin-top: 10px">
						<span>
															<span class=" elementor-button-icon">
																										</span>
																						<span class="elementor-button-text">Submit</span>
													</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>

                                                        <div style="margin-top: 30px">
                                                            <span>Order Status :</span>
                                                            <span>*******</span>
                                                        </div>
                                                        <div>
                                                            <span>Expected Delivery Date :</span>
                                                            <span>**/**/****</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>

                        </article>


                    </div><!-- #content -->


                </div><!-- #primary -->


            </div><!-- #content-wrap -->


        </main><!-- #main -->


        <?php
        include_once 'footer.php'
        ?>


    </div><!-- #wrap -->


</div><!-- #outer-wrap -->




<?php
include_once 'scripts.php'
?>
</body>
</html>
