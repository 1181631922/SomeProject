package com.fanyafeng.react.androidmodule;

import android.view.Gravity;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.fanyafeng.react.R;
import com.fanyafeng.react.dialog.ShareDialog;

/**
 * Created by 365rili on 16/4/6.
 */
public class ShareDialogModule extends ReactContextBaseJavaModule {

    private static final String SHARE_DIALOG_MODULE_NAME="ShareDialog";

    public ShareDialogModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return SHARE_DIALOG_MODULE_NAME;
    }

    @ReactMethod
    public void show(){
        ShareDialog shareDialog=new ShareDialog(getReactApplicationContext(), R.style.mystyle,R.layout.dialog_share);
        shareDialog.getWindow().setGravity(Gravity.BOTTOM);
        shareDialog.show();
    }
}
