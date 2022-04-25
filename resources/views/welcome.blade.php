<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel React App</title>

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Source+Code+Pro:700,900&display=swap"
        rel="stylesheet">

    <!-- CSS Libraries -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="{{ asset('/public/WebsiteAssets/lib/slick/slick.css') }}" rel="stylesheet">
    <link href="{{ asset('/public/WebsiteAssets/lib/slick/slick-theme.css') }}" rel="stylesheet">

    <!-- Template Stylesheet -->



    <link href="{{ asset('/public/css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('/public/WebsiteAssets/css/style.css') }}" rel="stylesheet">
    <!-- Styles -->
</head>

<body class="common-home res layout-home6">

    <div id="wrapper" class="wrapper-full banners-effect-7">
        <div id="main"></div>
    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('/public/WebsiteAssets/lib/easing/easing.min.js') }}"></script>
    <script src="{{ asset('/public/WebsiteAssets/lib/slick/slick.min.js') }}"></script>
    <script src="holder.js"></script>
    <!-- Template Javascript -->
    <script src="{{ asset('/public/WebsiteAssets/js/main.js') }}"></script>
    <script type="application/javascript" src="{{ url('/public/js/app.js') }}"></script>

</body>

</html>
