<!DOCTYPE html>
<html class="html" lang="en-US">
<?php
include_once 'head.php'
?>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<?php
if (isset($_POST["email"])) {
    $fname = $_POST["name"];
    $contact = $_POST["phone"];
    $email = $_POST["email"];
    $location = $_POST["location"];
    $subject = $_POST["subject"];
    $description = $_POST["message"];

    $to_email = 'info@optergouk.com';
    $subject = 'New query from mooptics.com';
    $message = "<html><head><title>HTML email</title></head><body><strong>Name:</strong> $fname<br/><strong>Contact:</strong> $contact<br/><strong>Email:</strong> $email<br/><strong>Location:</strong> $location<br/><strong>Subject:</strong> $subject<br/><strong>Description:</strong> $description</body></html>";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// More headers
    $secretKey = "6Le3s9UcAAAAABFTo4hpDzhUsKLtSRRSiedIkcDN";
    $responseKey = $_POST["g-recaptcha-response"];
    $ip;

    $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$ip";
    $response = file_get_contents($url);
    $response = json_decode($response);
    if ($response->success) {

        $inactive = 86400;
        if (isset($_SESSION["email_timeout"])) {
            $session_life = time() - $_SESSION['email_timeout'];
        } else {
            $session_life = 100000;
        }

        if ($session_life > $inactive) {
            if (mail($to_email, $subject, $message, $headers)) {
//        echo "email sent";
            }
            $_SESSION["email_timeout"] = time();

        } else {
//        echo "<h1>" . $_SESSION["email_timeout"] . "</h1>";
        }
    } else {
        $invalidCaptcha = 1;
    }
}
?>


<link rel='stylesheet' href='assets/css/css1/post-166.css' media='all'/>

<body class="page-template-default page page-id-166 wp-custom-logo wp-embed-responsive mt-166 mt-page-contact-us no-isotope no-lightbox no-fitvids no-scroll-top no-sidr no-carousel no-matchheight oceanwp-theme sidebar-mobile has-transparent-header no-header-border default-breakpoint content-full-screen has-topbar page-header-disabled has-breadcrumbs elementor-default elementor-kit-2908 elementor-page elementor-page-166">

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


                                <div data-elementor-type="wp-post" data-elementor-id="166"
                                     class="elementor elementor-166">
                                    <div class="elementor-inner">
                                        <div class="elementor-section-wrap">
                                            <section
                                                    class="elementor-section elementor-top-section elementor-element elementor-element-70d8dba elementor-section-full_width elementor-section-height-min-height elementor-section-content-middle product_banner elementor-section-height-default elementor-section-items-middle"
                                                    data-id="70d8dba" data-element_type="section"
                                                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                <div class="elementor-background-overlay"></div>
                                                <div class="elementor-container elementor-column-gap-default">
                                                    <div class="elementor-row">
                                                        <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d547274"
                                                             data-id="d547274" data-element_type="column">
                                                            <div class="elementor-column-wrap elementor-element-populated">
                                                                <div class="elementor-widget-wrap">
                                                                    <div class="elementor-element elementor-element-4df899d elementor-widget elementor-widget-heading"
                                                                         data-id="4df899d" data-element_type="widget"
                                                                         data-widget_type="heading.default">
                                                                        <div class="elementor-widget-container">
                                                                            <h1 class="elementor-heading-title elementor-size-default">
                                                                                Contact <span class="blue">us</span>

                                                                            </h1></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-22398f7"
                                                             data-id="22398f7" data-element_type="column">
                                                            <div class="elementor-column-wrap elementor-element-populated">
                                                                <div class="elementor-widget-wrap">
                                                                    <div class="elementor-element elementor-element-c7b18e0 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-image"
                                                                         data-id="c7b18e0" data-element_type="widget"
                                                                         data-widget_type="image.default">
                                                                        <div class="elementor-widget-container">
                                                                            <div class="elementor-image">
                                                                                <img width="1000" height="300"
                                                                                     src="assets/img/contact/mooptics_contact_us.png"
                                                                                     class="attachment-large size-large"
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
                                            <section
                                                    class="elementor-section elementor-top-section elementor-element elementor-element-8b75f37 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                    data-id="8b75f37" data-element_type="section">
                                                <div class="elementor-container elementor-column-gap-default">
                                                    <div class="elementor-row">
                                                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a30ca73"
                                                             data-id="a30ca73" data-element_type="column">
                                                            <div class="elementor-column-wrap elementor-element-populated">
                                                                <div class="elementor-widget-wrap">

                                                                    <section
                                                                            class="elementor-section elementor-inner-section elementor-element elementor-element-e95fb24 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                                            data-id="e95fb24"
                                                                            data-element_type="section">
                                                                        <div class="elementor-container elementor-column-gap-default">
                                                                            <div class="elementor-row">
                                                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8d69981"
                                                                                     data-id="8d69981"
                                                                                     data-element_type="column">
                                                                                    <div class="elementor-column-wrap elementor-element-populated">
                                                                                        <div class="elementor-widget-wrap">
                                                                                            <div class="elementor-element elementor-element-e2039d8 elementor-widget elementor-widget-text-editor"
                                                                                                 data-id="e2039d8"
                                                                                                 data-element_type="widget"
                                                                                                 data-widget_type="text-editor.default">
                                                                                                <div class="elementor-widget-container">
                                                                                                    <div class="elementor-text-editor elementor-clearfix">
                                                                                                        <p>
                                                                                                            <b>Address</b><br/><span
                                                                                                                    class="elementor-icon-list-text">Unit 6 Hackthorpe Hall, <br/></span><span
                                                                                                                    class="elementor-icon-list-text"> Hackthorpe, Cumbria,<br/> CA10 2HX</span>
                                                                                                        </p>
                                                                                                        <p><strong>Telephone</strong><br/>01768 606027</p>
                                                                                                        <p>
                                                                                                            <strong>Email</strong><br/><a href="mailto:info@optergouk.com" style="color: inherit">info@optergouk.com</a>
                                                                                                        </p></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3a57dbc"
                                                                                     data-id="3a57dbc"
                                                                                     data-element_type="column">
                                                                                    <div class="elementor-column-wrap elementor-element-populated">
                                                                                        <div class="elementor-widget-wrap">
                                                                                            <div class="elementor-element elementor-element-617ca6a elementor-widget elementor-widget-heading"
                                                                                                 data-id="617ca6a"
                                                                                                 data-element_type="widget"
                                                                                                 data-widget_type="heading.default">
                                                                                                <div class="elementor-widget-container">
                                                                                                    <h3 class="elementor-heading-title elementor-size-default">
                                                                                                        Send us a
                                                                                                        message</h3>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="elementor-element elementor-element-44e92ed9 elementor-button-align-start elementor-widget elementor-widget-form"
                                                                                                 data-id="44e92ed9"
                                                                                                 data-element_type="widget"
                                                                                                 data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}"
                                                                                                 data-widget_type="form.default">
                                                                                                <div class="elementor-widget-container">
                                                                                                    <form class="elementor-form"
                                                                                                          action="" method="post">
<!--                                                                                                        <input type="hidden"-->
<!--                                                                                                               name="post_id"-->
<!--                                                                                                               value="166"/>-->
<!--                                                                                                        <input type="hidden"-->
<!--                                                                                                               name="form_id"-->
<!--                                                                                                               value="44e92ed9"/>-->
<!--                                                                                                        <input type="hidden"-->
<!--                                                                                                               name="referer_title"-->
<!--                                                                                                               value="Contact Us - Optergo"/>-->
<!---->
<!--                                                                                                        <input type="hidden"-->
<!--                                                                                                               name="queried_id"-->
<!--                                                                                                               value="166"/>-->

                                                                                                        <div class="elementor-form-fields-wrapper elementor-labels-">
                                                                                                            <div class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required">
                                                                                                                <label for="form-field-name"
                                                                                                                       class="elementor-field-label elementor-screen-only">
                                                                                                                    Full
                                                                                                                    Name </label>
                                                                                                                <input size="1"
                                                                                                                       type="text"
                                                                                                                       name="name"
                                                                                                                       id="form-field-name"
                                                                                                                       class="elementor-field elementor-size-sm  elementor-field-textual"
                                                                                                                       placeholder="Full Name"
                                                                                                                       required="required"
                                                                                                                       aria-required="true">
                                                                                                            </div>
                                                                                                            <div class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_1 elementor-col-100 elementor-field-required">
                                                                                                                <label for="form-field-field_1"
                                                                                                                       class="elementor-field-label elementor-screen-only">
                                                                                                                    Phone </label>
                                                                                                                <input size="1"
                                                                                                                       type="text"
                                                                                                                       name="phone"
                                                                                                                       id="form-field-field_1"
                                                                                                                       class="elementor-field elementor-size-sm  elementor-field-textual"
                                                                                                                       placeholder="Phone"
                                                                                                                       required="required"
                                                                                                                       aria-required="true">
                                                                                                            </div>
                                                                                                            <div class="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100">
                                                                                                                <label for="form-field-email"
                                                                                                                       class="elementor-field-label elementor-screen-only">
                                                                                                                    E-mail </label>
                                                                                                                <input size="1"
                                                                                                                       type="email"
                                                                                                                       name="email"
                                                                                                                       id="form-field-email"
                                                                                                                       class="elementor-field elementor-size-sm  elementor-field-textual"
                                                                                                                       placeholder="E-mail">
                                                                                                            </div>
                                                                                                            <div class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_2 elementor-col-100">
                                                                                                                <label for="form-field-field_2"
                                                                                                                       class="elementor-field-label elementor-screen-only">
                                                                                                                    Location </label>
                                                                                                                <input size="1"
                                                                                                                       type="text"
                                                                                                                       name="location"
                                                                                                                       id="form-field-field_2"
                                                                                                                       class="elementor-field elementor-size-sm  elementor-field-textual"
                                                                                                                       placeholder="Location">
                                                                                                            </div>
                                                                                                            <div class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-3186a7c elementor-col-100">
                                                                                                                <label for="form-field-3186a7c"
                                                                                                                       class="elementor-field-label elementor-screen-only">
                                                                                                                    Subject </label>
                                                                                                                <input size="1"
                                                                                                                       type="text"
                                                                                                                       name="subject"
                                                                                                                       id="form-field-3186a7c"
                                                                                                                       class="elementor-field elementor-size-sm  elementor-field-textual"
                                                                                                                       placeholder="Subject">
                                                                                                            </div>
                                                                                                            <div class="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100 elementor-field-required">
                                                                                                                <label for="form-field-message"
                                                                                                                       class="elementor-field-label elementor-screen-only">
                                                                                                                    Message </label>
                                                                                                                <textarea
                                                                                                                        class="elementor-field-textual elementor-field  elementor-size-sm"
                                                                                                                        name="message"
                                                                                                                        id="form-field-message"
                                                                                                                        rows="4"
                                                                                                                        placeholder="Message"
                                                                                                                        required="required"
                                                                                                                        aria-required="true"></textarea>
                                                                                                            </div>
<!--                                                                                                            <div class="elementor-field-type-recaptcha_v3 elementor-field-group elementor-column elementor-field-group-field_2180f94 elementor-col-100 recaptcha_v3-bottomright">-->
<!--                                                                                                                <div class="elementor-field"-->
<!--                                                                                                                     id="form-field-field_2180f94">-->
<!--                                                                                                                    <div class="elementor-g-recaptcha"-->
<!--                                                                                                                         data-sitekey="6LdYKAccAAAAACMMblSRRsQ5I0dityberu0Q19PI"-->
<!--                                                                                                                         data-type="v3"-->
<!--                                                                                                                         data-action="Form"-->
<!--                                                                                                                         data-badge="bottomright"-->
<!--                                                                                                                         data-size="invisible"></div>-->
<!--                                                                                                                </div>-->
<!--                                                                                                            </div>-->

                                                                                                            <div class="col-12" style="margin-left: 5px">
                                                                                                                <div class="g-recaptcha mt-3 d-flex"
                                                                                                                     data-sitekey="6Le3s9UcAAAAAAkHXjic_FqCuv9pxgd7ygIF9bPI"></div>

                                                                                                                <?php
                                                                                                                if (isset($invalidCaptcha) and $invalidCaptcha) {
                                                                                                                    ?>
                                                                                                                    <span style="color: white; font-weight: bold;">Invalid captcha</span>
                                                                                                                    <?php
                                                                                                                }
                                                                                                                ?>
                                                                                                            </div>
                                                                                                            <div class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                                                                                                <button type="submit"
                                                                                                                        class="elementor-button elementor-size-sm" style="margin-top: 10px">
						<span>
															<span class=" elementor-button-icon">
																										</span>
																						<span class="elementor-button-text">Send</span>
													</span>
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </form>
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
                                                </div>
                                            </section>
                                            <section
                                                    class="elementor-section elementor-top-section elementor-element elementor-element-e640b9e elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                                    data-id="e640b9e" data-element_type="section">
                                                <div class="elementor-container elementor-column-gap-default">
                                                    <div class="elementor-row">
                                                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0616d8f"
                                                             data-id="0616d8f" data-element_type="column">
                                                            <div class="elementor-column-wrap">
                                                                <div class="elementor-widget-wrap">
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





<?php
include_once 'scripts.php'
?>

</body>
</html>
