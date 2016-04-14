package com.fanyafeng.react.reactnativeconfig;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.react.uimanager.ViewManager;

import java.util.List;

/**
 * Created by 365rili on 16/3/30.
 */
public class MyReactPackage extends MainReactPackage {
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return super.createViewManagers(reactContext);
    }
}
