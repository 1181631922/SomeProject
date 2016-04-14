package com.fanyafeng.react.androidmodule;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by 365rili on 16/3/31.
 */
public class ToastModule extends ReactContextBaseJavaModule {

    private static final String TOAST_MODULE_NAME="Toast";

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return TOAST_MODULE_NAME;
    }

    @ReactMethod
    public void longShow(String text){
        Toast.makeText(getReactApplicationContext(),text,Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public void shortShow(String text){
        Toast.makeText(getReactApplicationContext(),text,Toast.LENGTH_SHORT).show();
    }
}
