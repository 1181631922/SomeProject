package com.fanyafeng.react;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Gravity;
import android.view.View;

import com.fanyafeng.react.dialog.ShareDialog;
import com.fanyafeng.react.rnfragment.FragmentMainActivity;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
    }


    @Override
    public void onClick(View v) {
        switch (v.getId()){
            case R.id.btn_react:
                startActivity(new Intent(MainActivity.this, MyReactActivity.class));
                break;
            case R.id.btn_test_react:
//                startActivity(new Intent(MainActivity.this,TestReactActivity.class));
                ShareDialog shareDialog=new ShareDialog(this,R.style.mystyle,R.layout.dialog_share);
                shareDialog.getWindow().setGravity(Gravity.BOTTOM);
                shareDialog.show();
                break;
            case R.id.btn_test_fragment:
                startActivity(new Intent(MainActivity.this, FragmentMainActivity.class));
                break;
        }
    }
}