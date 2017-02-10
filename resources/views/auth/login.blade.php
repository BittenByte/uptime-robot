@extends('layouts.master')

@section('content')
    <div class="columns is-mobile">
        <div class="column is-half is-offset-one-quarter">
            <h1 class="title">Login</h1>
            <form role="form" method="POST" action="{{ route('login') }}">
                {{ csrf_field() }}
                <label class="label">Email</label>
                <p class="control has-icon has-icon-right">
                    <input class="input {{ $errors->has('email') ? ' is-danger' : '' }}"  name="email" type="text" placeholder="you@yourdomain.com" value="{{ old('email') }}" required autofocus>
                    <span class="icon is-small">
                        <i class="fa fa-envelope"></i>
                    </span>
                    @if ($errors->has('email'))
                        <span class="help is-danger">{{ $errors->first('email') }}</span>
                    @endif
                </p>

                <label class="label">Password</label>
                <p class="control has-icon has-icon-right">
                    <input class="input {{ $errors->has('password') ? ' is-danger' : '' }}" name="password" type="password" placeholder="Your password" value="" required>
                    <span class="icon is-small">
                        <i class="fa fa-lock"></i>
                    </span>
                    @if ($errors->has('email'))
                        <span class="help is-danger">{{ $errors->first('password') }}</span>
                    @endif
                </p>

                <p class="control">
                    <label class="checkbox">
                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}>
                        Remember me
                    </label>
                </p>
                <div class="control is-grouped">
                    <p class="control">
                        <button type="submit" class="button is-primary">Login</button>
                    </p>
                    <p class="control">
                        <a class="button id-outlined" href="{{ route('password.request') }}">
                            Forgot Your Password?
                        </a>
                    </p>
                </div>
            </form>
        </div>
    </div>
@endsection
