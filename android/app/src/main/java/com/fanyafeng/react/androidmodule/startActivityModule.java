package com.fanyafeng.react.androidmodule;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by 365rili on 16/4/1.
 */
public class startActivityModule extends ReactContextBaseJavaModule {

    private static final String STARTACTIVITY_MODULE_NAME = "startActivity";

    public startActivityModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return STARTACTIVITY_MODULE_NAME;
    }

    @ReactMethod
    public void startActivity(Intent intent) {
        startActivity(intent);
    }


}
