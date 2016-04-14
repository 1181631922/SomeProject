package com.fanyafeng.react.dialog;

import android.app.Dialog;
import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;

import com.fanyafeng.react.R;

/**
 * Created by 365rili on 16/4/6.
 */
public class ShareDialog extends Dialog implements OnClickListener {
    int resLayout;
    public ShareDialog(Context context) {
        super(context);
    }

    public ShareDialog(Context context, int themeResId,int resLayout) {
        super(context, themeResId);
        this.resLayout=resLayout;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.setContentView(resLayout);

        Window window = this.getWindow();
//        window.setWindowAnimations(R.style.main_menu_animstyle);
        WindowManager.LayoutParams wl = window.getAttributes();
        wl.x = 0;
        wl.width = ViewGroup.LayoutParams.MATCH_PARENT;
        wl.height = ViewGroup.LayoutParams.WRAP_CONTENT;

        // 设置显示位置
        this.onWindowAttributesChanged(wl);
        // 设置点击外围解散
        ShareDialog.this.setCanceledOnTouchOutside(true);
    }

    @Override
    public void onClick(View v) {

    }
}
