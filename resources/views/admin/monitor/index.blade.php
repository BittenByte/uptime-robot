@extends('layouts.master')

@section('content')
    <section class="section">
        <div class="container">
            <h1 class="title">Sites</h1>
            <h2 class="subtitle">
                A list of sites you are monitoring and their status
            </h2>
            @include('admin.monitor.table')
            {{-- {{ dump(config('laravel-uptime-monitor')) }} --}}
        </div>
  </section>
@endsection
