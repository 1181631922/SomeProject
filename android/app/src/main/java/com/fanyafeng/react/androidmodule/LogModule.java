package com.fanyafeng.react.androidmodule;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by 365rili on 16/3/31.
 */
public class LogModule extends ReactContextBaseJavaModule{

    private static final String LOG_MODULE_NAME="Log";

    public LogModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return LOG_MODULE_NAME;
    }

    @ReactMethod
    public void d(String tag,String msg){
        Log.d(tag,msg);
    }
}
