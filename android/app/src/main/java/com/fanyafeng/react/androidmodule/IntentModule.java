package com.fanyafeng.react.androidmodule;

import android.content.ComponentName;
import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by 365rili on 16/4/1.
 */
public class IntentModule extends ReactContextBaseJavaModule {

    private static final String INTENT_MODULE_NAME = "Intent";
    private Intent mIntent;
    private Bundle mExtras;
    private ComponentName mComponent;

    public IntentModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return INTENT_MODULE_NAME;
    }

    @ReactMethod
    public void newIntent() {
        mIntent = new Intent();
    }
/*
    @ReactMethod
    public Intent putExtra(String name, boolean value) {
        if (mExtras == null) {
            mExtras = new Bundle();
        }
        mExtras.putBoolean(name, value);
        return mIntent;
    }

    @ReactMethod
    public Intent putExtra(String name, int value) {
        if (mExtras == null) {
            mExtras = new Bundle();
        }
        mExtras.putInt(name, value);
        return mIntent;
    }
*/
    @ReactMethod
    public Intent putExtra(String name, String value) {
        if (mExtras == null) {
            mExtras = new Bundle();
        }
        mExtras.putString(name, value);
        return mIntent;
    }

    @ReactMethod
    public Intent setClassName(String className) {
        mComponent = new ComponentName(getReactApplicationContext(), className);
        return mIntent;
    }
}
