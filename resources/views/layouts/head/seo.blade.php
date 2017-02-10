{{-- We don't wont robot to index this site by now --}}
<meta name="robots" content="noindex, follow">

{{-- Drop some commont metas --}}
<title>{{ config('app.name') }}</title>
<meta name="description" content="{{ config('app.name') }}">
<link rel="canonical" href="{{ Request::path() }}">
<meta name="keywords" content="bittenbyte, uptime, robot">

{{-- we should add here other metas (og:*, twitter:*, ldjson...) --}}
