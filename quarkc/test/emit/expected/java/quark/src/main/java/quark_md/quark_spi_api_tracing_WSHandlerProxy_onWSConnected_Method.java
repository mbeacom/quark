package quark_md;

public class quark_spi_api_tracing_WSHandlerProxy_onWSConnected_Method extends quark.reflect.Method implements io.datawire.quark.runtime.QObject {
    public quark_spi_api_tracing_WSHandlerProxy_onWSConnected_Method() {
        super("quark.void", "onWSConnected", new java.util.ArrayList(java.util.Arrays.asList(new Object[]{"quark.WebSocket"})));
    }
    public Object invoke(Object object, java.util.ArrayList<Object> args) {
        quark.spi_api_tracing.WSHandlerProxy obj = (quark.spi_api_tracing.WSHandlerProxy) (object);
        (obj).onWSConnected((quark.WebSocket) ((args).get(0)));
        return null;
    }
    public String _getClass() {
        return (String) (null);
    }
    public Object _getField(String name) {
        return null;
    }
    public void _setField(String name, Object value) {}
}
