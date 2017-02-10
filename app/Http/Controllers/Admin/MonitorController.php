<?php

namespace BittenByteUptimeMonitor\Http\Controllers\Admin;

use Illuminate\Http\Request;
use BittenByteUptimeMonitor\Http\Controllers\Controller;

class MonitorController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sites = \Spatie\UptimeMonitor\Models\Monitor::all();
        
        return view('admin.monitor.index', compact('sites'));
    }
}
