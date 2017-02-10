<header class="header">
    <nav class="nav">
        <div class="container">
            <div class="nav-left">
                <a href="/" class="nav-item is-main-logo">@include('layouts.partials.vectorial-logo') <span>{{ config('app.name') }}</span></a>
            </div>
            <span class="nav-toggle" v-if="!menu.isVisible" @click="menu.open()">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div class="nav-right nav-menu">
                @if (Auth::guest())
                    <span class="nav-item"><a href="{{ route('login') }}">Login</a></span>
                    <span class="nav-item"><a href="{{ route('register') }}">Register</a></span>
                @else
                    <span class="nav-item">@include('layouts.partials.logout-button')</span>
                @endif
            </div>
        </div>
    </nav>
    <div id="nav-mobile" class="section is-fullheight is-fullwidth is-paddingless is-hidden-desktop" v-if="menu.isVisible">
        <span class="nav-close" @click="menu.close()"></span>
        <ul class="nav navbar-nav navbar-right">
            <!-- Authentication Links -->
            @if (Auth::guest())
                <li><a href="{{ route('login') }}">Login</a></li>
                <li><a href="{{ route('register') }}">Register</a></li>
            @else
                <li>@include('layouts.partials.logout-button')</li>
            @endif
        </ul>
    </div>
</header>