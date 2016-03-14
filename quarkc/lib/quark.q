use js ws 1.0;
use js request 2.69.0;
use js timers 0.1.1;
include quark_runtime.js;
include quark_node_runtime.js;

use py ws4py 0.3.*;
include quark_runtime.py;
include quark_threaded_runtime.py;
include quark_ws4py_fixup.py;

use java com.fasterxml.jackson.jr jackson-jr-objects 2.5.3;
use java io.netty netty-all 4.0.32.Final;
use java junit junit 4.12;
include io/datawire/quark/runtime/AbstractDatawireRuntime.java;
include io/datawire/quark/runtime/Builtins.java;
include io/datawire/quark/runtime/Runtime.java;
include io/datawire/quark/runtime/Task.java;

package quark 0.0.1;

include primitives.q;
include logging.q;
include reflect.q;
include json.q;
include service.q;
include concurrent.q;
include http.q;
include ws.q;

macro void print(Object msg) $java{do{System.out.println($msg);System.out.flush();}while(false)}
                             $py{_println($msg)}
                             $js{_qrt.print($msg)};

macro long now() $java{System.currentTimeMillis()}
                 $py{long(time.time()*1000)}
                 $js{Date.now()};

macro void sleep(float seconds) $java{io.datawire.quark.runtime.Builtins.sleep($seconds)}
                                $py{time.sleep($seconds)}
                                $js{_qrt.sleep($seconds)};

macro String url_get(String url) $java{io.datawire.quark.runtime.Builtins.url_get($url)}
                                 $py{_url_get($url)}
                                 $js{_qrt.url_get($url)};

macro int parseInt(String st) $java{Integer.parseInt($st)}
                              $py{int($st)}
                              $js{parseInt($st)};

macro Codec defaultCodec() $java{io.datawire.quark.runtime.Builtins.defaultCodec()}
                           $py{_default_codec()}
                           $js{_qrt.defaultCodec()};

@mapping($java{io.datawire.quark.runtime.Task})
primitive Task {
    void onExecute(Runtime runtime); // XXX: right now, context is not
                                     // restored for these. We should
                                     // offer a context-aware
                                     // scheduling API on top and have
                                     // this as internal thing
}

@mapping($java{io.datawire.quark.runtime.Runtime})
primitive Runtime {
    macro Runtime() $java{io.datawire.quark.runtime.Runtime.Factory.create()}
                    $py{_RuntimeFactory.create()}
                    $js{_qrt.RuntimeFactory.create()};
    void open(String url, WSHandler handler);
    void request(HTTPRequest request, HTTPHandler handler);
    void schedule(Task handler, float delayInSeconds);
    Codec codec();
    void serveHTTP(String url, HTTPServlet servlet);
    void serveWS(String url, WSServlet servlet);
    void respond(HTTPRequest request, HTTPResponse response);

    @doc("Display the explanatory message and then terminate the program")
    void fail(String message);

    @doc("Get a logger for the specified topic.")
    Logger logger(String topic);
}
