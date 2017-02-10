<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    @include('layouts.head.common-metas')
    @include('layouts.head.csrf-token-protection')
    @include('layouts.head.seo')
    @include('layouts.head.favicons')
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
    <div id="body-wrapper">
        @include('layouts.partials.header')
        <main>
            @yield('content')
        </main>
    </div>

    @include('layouts.partials.footer')

    @section('body_js_scripts')
        <script src="{{ mix('js/manifest.js') }}"></script>
        <script src="{{ mix('js/vendor.js') }}"></script>
        <script src="{{ mix('js/app.js') }}"></script>
    @show
</body>
</html>
