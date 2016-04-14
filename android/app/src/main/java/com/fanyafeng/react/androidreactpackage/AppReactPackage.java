package com.fanyafeng.react.androidreactpackage;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.fanyafeng.react.androidmodule.IntentModule;
import com.fanyafeng.react.androidmodule.LogModule;
import com.fanyafeng.react.androidmodule.ShareDialogModule;
import com.fanyafeng.react.androidmodule.ToastModule;
import com.fanyafeng.react.androidmodule.startActivityModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by 365rili on 16/3/31.
 */
public class AppReactPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new LogModule(reactContext));//log
        modules.add(new ToastModule(reactContext));//toast
        modules.add(new ShareDialogModule(reactContext));//sharedialog
//        modules.add(new IntentModule(reactContext));//intnet
//        modules.add(new startActivityModule(reactContext));
        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
