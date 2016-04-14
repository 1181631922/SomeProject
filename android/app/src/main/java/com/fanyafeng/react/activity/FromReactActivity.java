package com.fanyafeng.react.activity;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.TextView;

import com.fanyafeng.react.R;

import org.w3c.dom.Text;

public class FromReactActivity extends AppCompatActivity {

    private TextView tv_from_react;
    private String reactString;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_from_react);
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

        reactString = getIntent().getStringExtra("react");

        initView();
        initData();
    }

    private void initView() {
        tv_from_react = (TextView) findViewById(R.id.tv_from_react);

    }

    private void initData() {
        if (reactString != null && !reactString.equals("")) {
            tv_from_react.setText(reactString);
        }
    }

}
