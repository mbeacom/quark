package quark_md;

public class quark_ServerResponder extends quark.reflect.Class implements io.datawire.quark.runtime.QObject {
    public static quark.reflect.Class singleton = new quark_ServerResponder();
    public quark_ServerResponder() {
        super("quark.ServerResponder");
        (this).name = "quark.ServerResponder";
        (this).parameters = new java.util.ArrayList(java.util.Arrays.asList(new Object[]{}));
        (this).fields = new java.util.ArrayList(java.util.Arrays.asList(new Object[]{new quark.reflect.Field("quark.HTTPRequest", "request"), new quark.reflect.Field("quark.HTTPResponse", "response")}));
        (this).methods = new java.util.ArrayList(java.util.Arrays.asList(new Object[]{}));
    }
    public Object construct(java.util.ArrayList<Object> args) {
        return new quark.ServerResponder((io.datawire.quark.runtime.HTTPRequest) ((args).get(0)), (io.datawire.quark.runtime.HTTPResponse) ((args).get(1)));
    }
    public String _getClass() {
        return (String) (null);
    }
    public Object _getField(String name) {
        return null;
    }
    public void _setField(String name, Object value) {}
}
