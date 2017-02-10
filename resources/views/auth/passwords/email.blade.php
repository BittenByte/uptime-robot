@extends('layouts.master')

@section('content')
    <div class="columns is-mobile">
        <div class="column is-half is-offset-one-quarter">
            <h1 class="title">Reset Password</h1>
            <form role="form" method="POST" action="{{ route('password.email') }}">
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

                <div class="control is-grouped">
                    <p class="control">
                        <button type="submit" class="button is-primary">Send Password Reset Link</button>
                    </p>
                </div>
            </form>
        </div>
    </div>
@endsection
