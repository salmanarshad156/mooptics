<?php
require_once 'php/connection.php';

$order_status = $estimated_delivery_date = null;
$order_no = $delivery_postcode = null;
if(isset($_POST['check_status'])) {
    $order_no = $_POST['order_no'];
    $delivery_postcode = $_POST['delivery_postcode'];

    $query = "select * from orders where order_no = '$order_no' and delivery_postcode = '$delivery_postcode' limit 1";
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_array($result);
        $order_status = $row['order_status'];
        $estimated_delivery_date = $row['estimated_delivery_date'];
    }
}
?>

<!DOCTYPE html>
<html class="html" lang="en-US">
<?php
include_once 'head.php'
?>

<style>
    .form-track{
        padding: 100px 20px 30px;
        max-width: 1200px;
        margin: auto
    }
    @media screen and (max-width: 768px){
        .form-track{
            padding: 20px;
        }
    }

    input {
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


                                <div data-elementor-type="wp-post" data-elementor-id="148"
                                     class="elementor elementor-148">
                                    <div class="elementor-inner">
                                        <div class="elementor-section-wrap">
                                            <section
                                                    class="elementor-section elementor-top-section elementor-element elementor-element-b7ea7cf elementor-section-full_width elementor-section-height-min-height elementor-section-content-middle single_hero elementor-reverse-mobile elementor-section-height-default elementor-section-items-middle"
                                                    data-id="b7ea7cf" data-element_type="section"
                                                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                <div class="elementor-background-overlay"></div>
                                                <div class="elementor-container elementor-column-gap-default">
                                                    <div class="elementor-row">
                                                        <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9a6efad"
                                                             data-id="9a6efad" data-element_type="column">
                                                            <div class="elementor-column-wrap elementor-element-populated">
                                                                <div class="elementor-widget-wrap">
                                                                    <div class="elementor-element elementor-element-a8d4cb0 elementor-widget elementor-widget-heading"
                                                                         data-id="a8d4cb0" data-element_type="widget"
                                                                         data-widget_type="heading.default">
                                                                        <div class="elementor-widget-container">
                                                                            <h1 class="elementor-heading-title elementor-size-default">
                                                                                Track Your <span
                                                                                        class="blue">Order</span>
                                                                            </h1></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-90a0914"
                                                             data-id="90a0914" data-element_type="column">
                                                            <div class="elementor-column-wrap elementor-element-populated">
                                                                <div class="elementor-widget-wrap">
                                                                    <div class="elementor-element elementor-element-7b8196e elementor-widget__width-initial elementor-absolute elementor-widget-tablet__width-initial elementor-widget elementor-widget-image"
                                                                         data-id="7b8196e" data-element_type="widget"
                                                                         data-settings="{&quot;_position&quot;:&quot;absolute&quot;}"
                                                                         data-widget_type="image.default">
                                                                        <div class="elementor-widget-container">
                                                                            <div class="elementor-image">
                                                                                <img width="1000" height="667"
                                                                                     src="assets/img/SPEED.png"
                                                                                     class="attachment-large size-large d-img"
                                                                                     alt="" loading="lazy"/>
                                                                                <img width="1000" height="667"
                                                                                     src="assets/img/SPEED-mobile.png"
                                                                                     class="attachment-large size-large m-img"
                                                                                     alt="" loading="lazy"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <div class="form-track">
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
                                                                          action="track-your-order.php" method="post">
                                                                        <div class="elementor-form-fields-wrapper elementor-labels-">
                                                                            <div class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required">
                                                                                <label for="form-field-name"
                                                                                       class="elementor-field-label elementor-screen-only">
                                                                                    Order No </label>
                                                                                <input size="1"
                                                                                       type="text"
                                                                                       name="order_no"
                                                                                       id="form-field-name"
                                                                                       class="elementor-field elementor-size-sm  elementor-field-textual"
                                                                                       placeholder="Order No"
                                                                                       required="required"
                                                                                       aria-required="true"
                                                                                       value="<?= $order_no ?>">
                                                                            </div>
                                                                            <div class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_1 elementor-col-100 elementor-field-required">
                                                                                <label for="form-field-field_1"
                                                                                       class="elementor-field-label elementor-screen-only">
                                                                                    Delivery Post Code </label>
                                                                                <input size="1"
                                                                                       type="text"
                                                                                       name="delivery_postcode"
                                                                                       id="form-field-field_1"
                                                                                       class="elementor-field elementor-size-sm  elementor-field-textual"
                                                                                       placeholder="Delivery Post Code"
                                                                                       required="required"
                                                                                       aria-required="true"
                                                                                       value="<?= $delivery_postcode ?>">
                                                                            </div>

                                                                            <div class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                                                                <button type="submit" name="check_status"
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
                                                                        <span>
                                                                <?= $order_status ? $order_status : '*******' ?>
                                                            </span>
                                                                    </div>
                                                                    <div>
                                                                        <span>Expected Delivery Date :</span>
                                                                        <span>
                                                                <?= $estimated_delivery_date ? date_create($estimated_delivery_date)->format('d/m/Y') : '**/**/****' ?>
                                                            </span>
                                                                    </div>
                                                                </div>
                                                            </div>
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
