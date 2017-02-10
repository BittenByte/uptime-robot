@if(!empty($sites))
    <table class="table is-bordered is-striped is-narrow">
        <thead>
            <tr>
                <th><abbr title="Site URL">Site</abbr></th>
                <th><abbr title="Uptime Check Status">Status</abbr></th>
                <td><abbr title="Look for string">String</abbr></td>
                {{-- <td><abbr title="Uptime Check Interval">Interval</abbr></td>
                <td><abbr title="Uptime Check Enabled">Enabled</abbr></td>
                <td><abbr title="Uptime check failure reason">Fail Reason</abbr></td>
                <td><abbr title="Uptime check times failed in a row">Fails</abbr></td>
                <td><abbr title="Uptime status last change date">Last Status Date</abbr></td>
                <td><abbr title="Uptime last check date">Last Check</abbr></td>
                <td><abbr title="Uptime check failed event fired on date">Event</abbr></td>
                <td><abbr title="Uptime check metdod">Metdod</abbr></td>
                <td><abbr title="Certificate check enabled">Cert. check</abbr></td>
                <td><abbr title="Certificate status"></abbr>Cert. status</td>
                <td><abbr title="Certificate expiration date">Cert. exp. date</abbr></td>
                <td><abbr title="Certificate issuer">Cert. issuer</abbr></td>
                <td><abbr title="Certificate check failure reason">Cert. reason</abbr></td> 
                --}}
                <td></td>
            </tr>
        </thead>
        {{--<tfoot>
            <tr>
                <th><abbr title="Description">Desc.</abbr></th>
                <th>Completed</th>
            </tr>
        </tfoot>--}}
        @foreach ($sites as $site)
            <tbody>
                <tr>
                    <td>{{ $site->url }}</td>
                    <td>{{ $site->uptime_status }}</td>
                    <td>{{ $site->look_for_string }}</td>
                    <td><a href="#"><i class="fa fa-check-circle"></i></a></td>
                </tr>
            </tbody>
        @endforeach
    </table>
@else
    <article class="message is-primary">
        <div class="message-body">
            <p><strong>No sites yet!</strong></p>
            <p>Add a new site now to start monitoring!</p>
        </div>
    </article>
@endif