include io/datawire/quark/runtime/AbstractWSHandler.java;
include io/datawire/quark/runtime/WebSocket.java;
include io/datawire/quark/runtime/WSHandler.java;
include io/datawire/quark/runtime/WSServlet.java;
include io/datawire/quark/netty/QuarkNettyServerWebsocket.java;
include io/datawire/quark/netty/QuarkWebSocket.java;
include io/datawire/quark/netty/QuarkNettyClientWebsocket.java;

namespace quark {
    @mapping($java{io.datawire.quark.runtime.WSHandler})
    primitive WSHandler {
        void onWSInit(WebSocket socket) {}
        void onWSConnected(WebSocket socket) {}
        void onWSMessage(WebSocket socket, String message) {}
        void onWSBinary(WebSocket socket, Buffer message) {}
        void onWSClosed(WebSocket socket) {}
        void onWSError(WebSocket socket) {}
        void onWSFinal(WebSocket socket) {}
    }

    @mapping($java{io.datawire.quark.runtime.WebSocket})
    primitive WebSocket {
        bool send(String message);
        bool sendBinary(Buffer bytes);
        bool close();
    }

    @doc("Websocket servlet")
    @mapping($java{io.datawire.quark.runtime.WSServlet})
    primitive WSServlet extends Servlet {
        @doc("called for each new incoming WebSocket connection")
        WSHandler onWSConnect(HTTPRequest upgrade_request) { return null; }

        void serveWS(String url) { concurrent.Context.runtime().serveWS(url, self); }
    }
}
