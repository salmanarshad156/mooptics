<?php
require_once 'php/connection.php';

if (isset($_POST['order_no'])) {
    $order_no = $_POST['order_no'];
    $delivery_postcode = $_POST['delivery_postcode'];

    $query = "select * from orders where order_no = '$order_no' and delivery_postcode = '$delivery_postcode' limit 1";
    $result = mysqli_query($conn, $query);
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_array($result);

        $data['error'] = '';
        $data['order_status'] = $row['order_status'];
        $data['expected_delivery_date'] = date_create($row['estimated_delivery_date'])->format('d/m/Y');
    } else {
        $data['error'] = 'Order details are invalid, please check and re-enter.';
    }

    echo json_encode($data);
    exit;
}
?>

<!DOCTYPE html>
<html class="html" lang="en-US">
<?php
include_once 'head.php'
?>

<style>
    .form-track {
        padding: 30px 20px !important;
        max-width: 1200px;
        margin: 30px auto 0;
        background: white;
        min-height: 500px;
    }

    .form-track .elementor-widget-container {
        max-width: 500px;
        margin: auto;
    }

    @media (max-width: 1550px) {
        .form-track {
            min-height: 36vw !important;
        }
    }

    @media screen and (max-width: 768px) {
        .form-track {
            padding: 20px;
            margin: 0 auto;
        }
    }

    @media (max-width: 767px) {
        .elementor-reverse-mobile>.elementor-container>.elementor-row> :first-child {
            -webkit-box-ordinal-group: 11;
            -ms-flex-order: 10;
            order: 9;
            padding-top: 60px;
            background: white;
        }
    }

    input {
        margin-bottom: 16px;
        border-color: #e5e5e5 !important;

    }
</style>


<link rel='stylesheet' href='assets/css/css1/post-166.css' media='all' />


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


                                    <div data-elementor-type="wp-post" data-elementor-id="148" class="elementor elementor-148">
                                        <div class="elementor-inner">
                                            <div class="elementor-section-wrap">
                                                <section class="elementor-section elementor-top-section elementor-element elementor-element-b7ea7cf elementor-section-full_width elementor-section-height-min-height elementor-section-content-middle single_hero elementor-reverse-mobile elementor-section-height-default elementor-section-items-middle" data-id="b7ea7cf" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                    <div class="elementor-background-overlay"></div>
                                                    <div class="elementor-container elementor-column-gap-default">
                                                        <div class="elementor-row">
                                                            <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9a6efad" data-id="9a6efad" data-element_type="column">
                                                                <div class="elementor-column-wrap elementor-element-populated">
                                                                    <div class="elementor-widget-wrap">
                                                                        <div class="elementor-element elementor-element-a8d4cb0 elementor-widget elementor-widget-heading" data-id="a8d4cb0" data-element_type="widget" data-widget_type="heading.default">
                                                                            <div class="elementor-widget-container">
                                                                                <h1 class="elementor-heading-title elementor-size-default">
                                                                                    Track Your <span class="blue">Order</span>
                                                                                </h1>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3a57dbc" data-id="3a57dbc" data-element_type="column" style="margin: auto">
                                                                <div class="elementor-column-wrap elementor-element-populated">
                                                                    <div class="elementor-widget-wrap form-track">
                                                                        <div class="elementor-element elementor-element-44e92ed9 elementor-button-align-start elementor-widget elementor-widget-form" data-id="44e92ed9" data-element_type="widget" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                                                                            <div class="elementor-widget-container">
                                                                                <!-- <form class="elementor-form" action="track-your-order.php" method="post"> -->
                                                                                <form class="elementor-form check-status-form">
                                                                                    <div class="elementor-form-fields-wrapper elementor-labels-">
                                                                                        <div class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required">
                                                                                            <label for="form-field-name" class="elementor-field-label elementor-screen-only">
                                                                                                Order No </label>
                                                                                            <input size="1" type="text" name="order_no" id="form-field-name" class="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Order No" required="required" aria-required="true">
                                                                                        </div>
                                                                                        <div class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_1 elementor-col-100 elementor-field-required">
                                                                                            <label for="form-field-field_1" class="elementor-field-label elementor-screen-only">
                                                                                                Delivery Post Code </label>
                                                                                            <input size="1" type="text" name="delivery_postcode" id="form-field-field_1" class="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Delivery Post Code" required="required" aria-required="true">
                                                                                        </div>

                                                                                        <span class="error-msg" style="color: red">
                                                                                        </span>

                                                                                        <div class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons" style="justify-content: center">
                                                                                            <button type="submit" name="check_status" onclick="submitForm()" class="elementor-button elementor-size-sm" style="margin-top: 10px">
                                                                                                <span>
                                                                                                    <span class=" elementor-button-icon">
                                                                                                    </span>
                                                                                                    <span class="elementor-button-text">Submit</span>
                                                                                                </span>
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>

                                                                                <div class="order-status" style="margin-top: 30px; display: none;">
                                                                                    <span style="font-weight: bold">Order Status :</span>
                                                                                    <span></span>
                                                                                </div>
                                                                                <div class="expected-delivery-date" style="display: none;">
                                                                                    <span style="font-weight: bold">Expected Delivery Date :</span>
                                                                                    <span></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
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

    <!-- <div class="error-popup" id="error-popup">
        <div class="popup-wrap">
            <div class="hide-popup" onclick="hidePopup()">
                x
            </div>
            <div class="popup-text">
                Order details are invalid
            </div>
        </div>
    </div>
    <script>
        function hidePopup() {
            document.getElementById('error-popup').style.display = "none";
        }
    </script> -->

    <?php
    include_once 'scripts.php'
    ?>
    <script>
        function hideFormResult() {
            $('.order-status').css('display', 'none');
            $('.expected-delivery-date').css('display', 'none');
        }

        function showFormResult() {
            $('.order-status').css('display', '');
            $('.expected-delivery-date').css('display', '');
        }

        function submitForm() {
            hideFormResult();
            $('.error-msg').html('');

            let order_no = $('.check-status-form input[name="order_no"]').val();
            let delivery_postcode = $('.check-status-form input[name="delivery_postcode"]').val();
            $.ajax({
                url: 'track-your-order.php',
                type: 'post',
                data: {
                    order_no,
                    delivery_postcode
                },
                success: function(response) {
                    let data = JSON.parse(response);

                    if (data.error) {
                        $('.error-msg').html(data.error);
                        return;
                    }

                    showFormResult();
                    $('.order-status span:nth-child(2)').html(data.order_status);
                    $('.expected-delivery-date span:nth-child(2)').html(data.expected_delivery_date);
                }
            });
        }

        $(document).ready(function() {
            $('.check-status-form').submit(function(e) {
                e.preventDefault();
            });
        });
    </script>
</body>

</html>