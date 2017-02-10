<header class="header">
    <nav class="nav">
        <div class="container">
            <div class="nav-left">
                <a href="/" class="nav-item is-main-logo">@include('layouts.partials.vectorial-logo') <span>{{ config('app.name') }}</span></a>
            </div>
            <span class="nav-toggle" @click="menu.open()">
                <span></span>
                <span></span>
                <span></span>
            </span>
            <div class="nav-right nav-menu">
                @if (Auth::guest())
                    <span class="nav-item"><a href="{{ route('login') }}">Login</a></span>
                    <span class="nav-item"><a href="{{ route('register') }}">Register</a></span>
                @else
                    <span class="nav-item">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            {{ Auth::user()->name }} <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <li>@include('layouts.partials.logout-button')</li>
                        </ul>
                    </span>
                @endif
            </div>
        </div>
    </nav>
    <div id="nav-mobile" class="section is-fullheight is-fullwidth is-paddingless" v-if="menu.isVisible">
        <span class="nav-close" @click="menu.close()"></span>
        <ul class="nav navbar-nav navbar-right">
            <!-- Authentication Links -->
            @if (Auth::guest())
                <li><a href="{{ route('login') }}">Login</a></li>
                <li><a href="{{ route('register') }}">Register</a></li>
            @else
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    {{ Auth::user()->name }} <span class="caret"></span>
                </a>

                <ul class="dropdown-menu" role="menu">
                    <li>@include('layouts.partials.logout-button')</li>
                </ul>
            @endif
        </ul>
    </div>
</header>